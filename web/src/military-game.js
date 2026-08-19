import { DOCTRINES, ROUNDS, GAME_META } from "./military-game-data.js";

const doctrineMap = Object.fromEntries(DOCTRINES.map((d) => [d.id, d]));

/**
 * @param {HTMLElement} root
 * @param {{
 *   unlocked?: boolean,
 *   onIntroCleared?: () => void,
 *   onOpenLedger?: () => void,
 * }} [opts]
 */
export function bindMilitaryGame(root, opts = {}) {
  const bay = root.querySelector("#mil-game-bay");
  if (!bay) return;

  const stage = bay.querySelector("[data-mil-stage]");
  const startBtn = bay.querySelector("[data-mil-start]");
  const advancedBtn = bay.querySelector("[data-mil-advanced]");
  if (!stage || !startBtn) return;

  let unlocked = Boolean(opts.unlocked);
  let state = blankState();
  let timers = /** @type {number[]} */ ([]);

  function blankState() {
    return {
      index: 0,
      correctDoctrine: 0,
      picked: null,
      phase: "idle",
    };
  }

  const clearTimers = () => {
    timers.forEach((id) => window.clearTimeout(id));
    timers = [];
  };

  const later = (ms, fn) => {
    const id = window.setTimeout(fn, ms);
    timers.push(id);
  };

  const introCleared = () =>
    typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem(GAME_META.storageIntro) === "1";

  const markIntroCleared = () => {
    try {
      sessionStorage.setItem(GAME_META.storageIntro, "1");
    } catch {
      /* ignore */
    }
    opts.onIntroCleared?.();
  };

  const ledgerReady = () => introCleared();

  const refreshChrome = () => {
    startBtn.disabled = !unlocked;
    startBtn.setAttribute("aria-disabled", unlocked ? "false" : "true");
    if (advancedBtn) {
      const ready = ledgerReady();
      advancedBtn.hidden = false;
      advancedBtn.disabled = !ready;
      advancedBtn.setAttribute("aria-disabled", ready ? "false" : "true");
      advancedBtn.title = ready
        ? "Game two · The kingdom's ledger"
        : "Unlocks after Clash is cleared";
    }
  };

  const openWarEconomy = () => {
    if (!ledgerReady()) return false;
    opts.onOpenLedger?.();
    return true;
  };

  const idleHtml = () => `
    <div class="mil-play-idle">
      <p class="mil-play-idle-title">Clash · Choose a method</p>
      <p class="mil-play-hint">Four short acts · press Clash to begin</p>
    </div>
  `;

  const cardFaceHtml = (card, { role = "", win = false, lose = false } = {}) => {
    if (!card) return "";
    const cls = [
      "mil-card-face",
      role,
      win ? "is-win" : "",
      lose ? "is-lose" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return `
      <article class="${cls}">
        <div class="mil-card-art">
          <img src="${card.src}" alt="${card.alt}" loading="lazy" />
        </div>
        <div class="mil-card-copy">
          <strong>${card.title}</strong>
          <span>${card.blurb}</span>
        </div>
      </article>`;
  };

  const pickButtonHtml = (card, id) => `
    <button type="button" class="mil-card" data-pick="${id}">
      <div class="mil-card-art">
        <img src="${card.src}" alt="${card.alt}" loading="lazy" />
      </div>
      <div class="mil-card-copy">
        <strong>${card.title}</strong>
        <span>${card.blurb}</span>
      </div>
    </button>`;

  const clashHtml = (yours, foe, ok) => `
      <div class="mil-duel ${ok ? "is-win" : "is-miss"}" aria-live="polite">
        <div class="mil-duel-slot">
          <p class="mil-duel-label">Your method</p>
          ${cardFaceHtml(yours, { role: "is-yours", win: ok, lose: !ok })}
        </div>
        <div class="mil-duel-vs" aria-hidden="true">Clash</div>
        <div class="mil-duel-slot">
          <p class="mil-duel-label">Opposite</p>
          ${cardFaceHtml(foe, { role: "is-foe", win: !ok, lose: ok })}
        </div>
      </div>
      <p class="mil-battle-status">${
        ok ? "Your method holds the field" : "The field holds · this method cannot stand"
      }</p>
    `;

  const doctrineDuel = (pickedId, ok) => {
    const round = ROUNDS[state.index];
    return clashHtml(doctrineMap[pickedId], round.enemyCard, ok);
  };

  /** After the clash: the loser darkens, then splits down the middle */
  const playClashResolve = () => {
    const duel = stage.querySelector(".mil-duel");
    if (!duel) return;
    duel.classList.add("is-rush");
    later(420, () => {
      duel.classList.add("is-resolved");
      const lose = duel.querySelector(".mil-card-face.is-lose");
      const art = lose?.querySelector(".mil-card-art");
      const img = art?.querySelector("img");
      if (!art || !img) return;
      const src = img.getAttribute("src") || "";
      const alt = img.getAttribute("alt") || "";
      art.innerHTML = `
        <div class="mil-split" aria-hidden="true">
          <div class="mil-split-half is-left"><img src="${src}" alt="" /></div>
          <div class="mil-split-half is-right"><img src="${src}" alt="${alt}" /></div>
        </div>`;
      later(40, () => art.querySelector(".mil-split")?.classList.add("is-cracked"));
    });
  };

  const renderChooseDoctrine = () => {
    const round = ROUNDS[state.index];
    if (!round) return renderEnd();
    state.phase = "choose";
    state.picked = null;
    const cards = round.options
      .map((id) => pickButtonHtml(doctrineMap[id], id))
      .join("");

    stage.innerHTML = `
      <div class="mil-play-head">
        <p class="aside-label">Opening · ${round.act} / ${ROUNDS.length} · ${round.yearHint}</p>
        <h3 class="mil-play-title">${round.title}</h3>
        <p class="mil-play-brief">${round.briefing}</p>
      </div>
      <div class="mil-card-row" role="group" aria-label="Method cards">
        ${cards}
      </div>
      <p class="mil-play-tip">Choose a method card to open the clash.</p>
    `;

    stage.querySelectorAll("[data-pick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-pick");
        if (!id || state.phase !== "choose") return;
        resolveDoctrine(id);
      });
    });
  };

  const resolveDoctrine = (pickedId) => {
    const round = ROUNDS[state.index];
    if (!round) return;
    state.phase = "battle";
    state.picked = pickedId;
    const ok = pickedId === round.correctId;
    if (ok) state.correctDoctrine += 1;

    stage.innerHTML = `
      <div class="mil-play-head">
        <p class="aside-label">Opening · ${round.act} / ${ROUNDS.length} · Clash</p>
        <h3 class="mil-play-title">${round.title}</h3>
      </div>
      ${doctrineDuel(pickedId, ok)}
    `;

    playClashResolve();

    later(1900, () => {
      if (!ok) showDoctrineMiss(pickedId);
      else showDoctrineWin();
    });
  };

  const showDoctrineMiss = (pickedId) => {
    const round = ROUNDS[state.index];
    if (!round) return;
    state.phase = "result";
    const explain = round.trapExplain[pickedId] || "This method cannot bear the pressure of this act.";
    const correct = doctrineMap[round.correctId];

    stage.innerHTML = `
      <div class="mil-play-head">
        <p class="aside-label">Opening · ${round.act} / ${ROUNDS.length}</p>
        <h3 class="mil-play-title">The method fails</h3>
      </div>
      ${doctrineDuel(pickedId, false)}
      <div class="mil-result is-miss">
        <p class="mil-result-text">${explain}</p>
        <p class="mil-result-correct">The surer method: <strong>${correct.title}</strong> — ${correct.blurb}</p>
      </div>
      <div class="mil-result-actions">
        <button type="button" class="btn" data-mil-next>${
          state.index >= ROUNDS.length - 1 ? "See the close" : "Next act"
        }</button>
      </div>
    `;
    playClashResolve();

    stage.querySelector("[data-mil-next]")?.addEventListener("click", () => {
      clearTimers();
      advanceRound();
    });
  };

  const showDoctrineWin = () => {
    const round = ROUNDS[state.index];
    if (!round) return;
    state.phase = "result";
    stage.innerHTML = `
      <div class="mil-play-head">
        <p class="aside-label">Opening · ${round.act} / ${ROUNDS.length}</p>
        <h3 class="mil-play-title">The method holds</h3>
      </div>
      ${doctrineDuel(round.correctId, true)}
      <div class="mil-result is-win">
        <p class="mil-result-text">${round.winExplain}</p>
      </div>
      <div class="mil-result-actions">
        <button type="button" class="btn" data-mil-next>${
          state.index >= ROUNDS.length - 1 ? "See the close" : "Next act"
        }</button>
      </div>
    `;
    playClashResolve();
    stage.querySelector("[data-mil-next]")?.addEventListener("click", () => {
      clearTimers();
      advanceRound();
    });
  };

  const advanceRound = () => {
    state.index += 1;
    if (state.index >= ROUNDS.length) renderEnd();
    else renderChooseDoctrine();
  };

  const renderEnd = () => {
    state.phase = "end";
    markIntroCleared();
    refreshChrome();

    const total = ROUNDS.length;
    stage.innerHTML = `
      <div class="mil-play-end">
        <p class="aside-label">Cleared</p>
        <h3 class="mil-play-title">Opening complete</h3>
        <p class="mil-end-score">Methods chosen well <strong>${state.correctDoctrine}</strong> / ${total} acts</p>
        <p class="mil-end-text">Clash complete. Continue with the hall essay, or go on to game two, War and Economy.</p>
        <blockquote class="mil-closing mil-closing-inline">${GAME_META.closing}</blockquote>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-mil-to-ledger>Next game · War and Economy</button>
          <button type="button" class="btn btn-ghost" data-mil-to-wall>Continue reading ↓</button>
          <button type="button" class="btn btn-ghost" data-mil-restart>Play again</button>
        </div>
      </div>
    `;
    stage.querySelector("[data-mil-to-ledger]")?.addEventListener("click", () => {
      openWarEconomy();
    });
    stage.querySelector("[data-mil-to-wall]")?.addEventListener("click", () => {
      const main = bay.closest("main");
      main?.classList.remove("is-game-first");
      const content = main?.querySelector("#mil-content");
      if (content) content.hidden = false;
      content?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    stage.querySelector("[data-mil-restart]")?.addEventListener("click", () => {
      clearTimers();
      state = blankState();
      renderChooseDoctrine();
    });
  };

  startBtn.addEventListener("click", () => {
    if (!unlocked) return;
    clearTimers();
    state = blankState();
    renderChooseDoctrine();
    bay.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  advancedBtn?.addEventListener("click", () => {
    openWarEconomy();
  });

  stage.innerHTML = idleHtml();
  refreshChrome();

  return {
    setUnlocked: (value) => {
      unlocked = value;
      refreshChrome();
    },
    refreshUnlocks: refreshChrome,
    hasIntroCleared: introCleared,
    openWarEconomy,
  };
}

export function militaryGameBayHtml() {
  return `
    <section class="mil-game-bay" id="mil-game-bay" aria-label="Military hall game">
      <div class="mil-play-stage" data-mil-stage aria-live="polite"></div>
      <div class="mil-game-actions">
        <button class="btn" type="button" data-mil-start>Clash</button>
        <button class="btn btn-ghost" type="button" data-mil-advanced disabled aria-disabled="true" title="Unlocks after Clash is cleared">War and Economy</button>
      </div>
    </section>
  `;
}
