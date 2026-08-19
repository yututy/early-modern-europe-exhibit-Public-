/**
 * 第二局 · 王国的账本
 * 拖拽上阵 · 五波 · 国库 / 贵族满意度实时反馈 · 收束折线
 */

export const LEDGER_UNITS = {
  knight: {
    id: "knight",
    title: "Knight",
    blurb: "High power, but costly in coin and fiefs. Once prices rise, you cannot afford them.",
    src: "/military/ledger_unit_knight.jpg",
    power: 12,
    cost: 24,
    noble: 14,
  },
  pike: {
    id: "pike",
    title: "Pike",
    blurb: "Front-line wall, max 4. Each pike +4 when the enemy has knights. Pike alone cannot cover the later firepower gap.",
    src: "/military/ledger_unit_pike.jpg",
    power: 6,
    cost: 9,
    noble: 3,
  },
  shot: {
    id: "shot",
    title: "Shot",
    blurb: "Strong against infantry (power 9); drops to 6 if the enemy has knights — pike must hold the horse.",
    src: "/military/ledger_unit_shot.jpg",
    power: 9,
    cost: 10,
    noble: 0,
  },
};

export const LEDGER_ENEMIES = {
  levy: {
    kind: "levy",
    src: "/military/anim/levy_walk_01.png?v=cut11",
    alt: "Levy",
    faceLeft: true,
    power: 3,
  },
  pike: {
    kind: "pike",
    src: "/military/anim/pike_walk_01.png?v=cut11",
    alt: "Pike",
    faceLeft: false,
    power: 5,
  },
  knight: {
    kind: "knight",
    src: "/military/anim/knight_walk_01.png?v=cut11",
    alt: "Knight",
    faceLeft: false,
    power: 10,
  },
};

const frameList = (kind, action) =>
  [1, 2, 3, 4, 5, 6].map(
    (n) =>
      `/military/anim/${kind}_${action}_${String(n).padStart(2, "0")}.png?v=cut11`
  );

export const LEDGER_ANIM = {
  knight: { walk: frameList("knight", "walk"), fight: frameList("knight", "fight") },
  pike: { walk: frameList("pike", "walk"), fight: frameList("pike", "fight") },
  shot: { walk: frameList("shot", "walk"), fight: frameList("shot", "fight") },
  levy: { walk: frameList("levy", "walk"), fight: frameList("levy", "fight") },
};

/**
 * 五波经济（web/scripts/balance_sim.py）
 * 矛最多 4；枪打步兵强、见骑变弱；纯矛 / 纯枪都清不完五波，要混编。
 */
export const LEDGER_WAVES = [
  {
    id: 1,
    title: "Wave 1 · Levy",
    briefing: "Facing: levy ×3. Drag a knight onto the field. A win pays into the treasury; later enemies grow stronger, and prices rise.",
    threat: 10,
    enemies: [{ kind: "levy", count: 3 }],
    unlock: ["knight"],
    inflation: 1,
    income: 28,
    hint: "Start by committing 1 knight.",
  },
  {
    id: 2,
    title: "Wave 2 · Pike",
    briefing: "Facing: pike ×4. Pike is now unlocked (front rank, max 4). You may mix in one shot.",
    threat: 16,
    enemies: [{ kind: "pike", count: 4 }],
    unlock: ["knight", "pike"],
    inflation: 1,
    income: 34,
    hint: "E.g. 3 pike + 1 shot, or 1 knight + 2 pike.",
  },
  {
    id: 3,
    title: "Wave 3 · Pike",
    briefing: "Facing: pike ×5. Shot is unlocked — stronger against infantry. Four pike alone will not hold.",
    threat: 20,
    enemies: [{ kind: "pike", count: 5 }],
    unlock: ["knight", "pike", "shot"],
    inflation: 1.15,
    income: 40,
    hint: "E.g. 3 shot. Enemy cavalry comes next — do not stack shot alone.",
  },
  {
    id: 4,
    title: "Wave 4 · Pike and horse",
    briefing: "Facing: pike ×4 + knight ×1. Against cavalry: each pike +4; shot power drops to 6.",
    threat: 28,
    enemies: [
      { kind: "pike", count: 4 },
      { kind: "knight", count: 1 },
    ],
    unlock: ["knight", "pike", "shot"],
    inflation: 1.4,
    income: 46,
    hint: "E.g. 4 pike + 1 shot. Shot alone needs a large number to hold.",
    inflateFx: true,
  },
  {
    id: 5,
    title: "Wave 5 · Heavy pressure",
    briefing: "Facing: pike ×3 + knight ×2. Income cannot keep up with knight prices; mix pike and shot to last the final wave.",
    threat: 32,
    enemies: [
      { kind: "pike", count: 3 },
      { kind: "knight", count: 2 },
    ],
    unlock: ["knight", "pike", "shot"],
    inflation: 1.65,
    income: 50,
    hint: "E.g. 4 pike + 1 shot. Shot alone cannot buy enough men.",
    inflateFx: true,
  },
];

const UNIT_IDS = ["knight", "pike", "shot"];

/**
 * @param {HTMLElement} stage
 * @param {{ onBack?: () => void }} [opts]
 */
export function mountLedgerGame(stage, opts = {}) {
  if (!stage) return;

  const blankField = () => ({ knight: 0, pike: 0, shot: 0 });

  let waveIndex = 0;
  let treasury = 100;
  let nobles = 42;
  let field = blankField();
  let history = {
    treasury: [100],
    nobles: [42],
    knightShare: [0],
    shotShare: [0],
  };
  let phase = "intro";
  let lastResult = null;
  let gaveUp = false;
  let clashing = false;
  /** @type {number[]} */
  let animTimers = [];

  const wave = () => LEDGER_WAVES[waveIndex];

  const inflation = () => wave()?.inflation ?? 1;
  const winIncome = () => wave()?.income ?? 0;

  const enemyHasKnights = () =>
    (wave().enemies || []).some((s) => s.kind === "knight" && s.count > 0);

  const nobleKnightMult = () => {
    if (nobles < 22) return 1.55;
    if (nobles < 35) return 1.28;
    return 1;
  };

  const knightLockedByNobles = () => nobles < 18;

  const priceOf = (id) => {
    let p = LEDGER_UNITS[id].cost * inflation();
    if (id === "knight") p *= nobleKnightMult();
    return Math.round(p);
  };

  /** 单兵战斗力：有敌骑时矛 +4；火枪见骑降为 6 */
  const unitCombatPower = (id) => {
    if (id === "shot" && enemyHasKnights()) return 6;
    let p = LEDGER_UNITS[id].power;
    if (id === "pike" && enemyHasKnights()) p += 4;
    return p;
  };

  const fieldPower = () =>
    UNIT_IDS.reduce((sum, id) => sum + field[id] * unitCombatPower(id), 0);

  const fieldCost = () =>
    UNIT_IDS.reduce((sum, id) => sum + field[id] * priceOf(id), 0);

  const fieldNoble = () =>
    UNIT_IDS.reduce((sum, id) => sum + field[id] * LEDGER_UNITS[id].noble, 0);

  const fieldCount = () => UNIT_IDS.reduce((sum, id) => sum + field[id], 0);

  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

  const unitGate = (id) => {
    if (!wave().unlock.includes(id)) {
      return { ok: false, reason: "Locked" };
    }
    if (id === "knight" && knightLockedByNobles()) {
      return { ok: false, reason: "Nobles resist" };
    }
    if (id === "pike" && field.pike >= 4) {
      return { ok: false, reason: "Pike line full (4)" };
    }
    const nextCost = fieldCost() + priceOf(id);
    if (nextCost > treasury) {
      return { ok: false, reason: "Treasury too low" };
    }
    if (fieldCount() >= 8) {
      return { ok: false, reason: "Roster full" };
    }
    return { ok: true, reason: "" };
  };

  const endingKind = () => {
    if (treasury <= 0) return "bust";
    if (nobles <= 12) return "revolt";
    if (treasury < 28 && nobles < 28) return "thin";
    if (history.shotShare.slice(1).reduce((a, b) => a + b, 0) >
      history.knightShare.slice(1).reduce((a, b) => a + b, 0)) {
      return "powder";
    }
    return "knightly";
  };

  const sparkPath = (values, w, h) => {
    if (!values.length) return "";
    const max = Math.max(100, ...values);
    const min = Math.min(0, ...values);
    const span = max - min || 1;
    return values
      .map((v, i) => {
        const x = values.length === 1 ? 0 : (i / (values.length - 1)) * w;
        const y = h - ((v - min) / span) * h;
        return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  };

  const introHtml = () => `
    <div class="led-intro">
      <div class="led-intro-art">
        <img src="/military/ledger_cover.jpg" alt="An open war ledger" />
      </div>
      <div class="led-intro-copy">
        <p class="aside-label">Game II · Optional</p>
        <h3 class="mil-play-title">The King's Ledger</h3>
        <p class="mil-play-brief">Five waves. Drag troops onto the field; if your power is enough, you hold. After the clash you pay the roster cost. A win also brings income; a loss takes an extra emergency levy. Prices will rise — knights grow too dear, so mix pike and shot.</p>
        <p class="mil-play-hint">Pike counters enemy horse (each pike +4 power when cavalry is present). Shot hits hard per man but gains nothing against cavalry. You cannot add troops without gold.</p>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-led-begin>Begin five waves</button>
          <button type="button" class="btn btn-ghost" data-led-back>${opts.backLabel || "Leave"}</button>
        </div>
      </div>
    </div>
  `;

  const unitChip = (id) => {
    const u = LEDGER_UNITS[id];
    const gate = unitGate(id);
    const price = priceOf(id);
    const combat = unitCombatPower(id);
    const matchNote =
      id === "pike" && enemyHasKnights() && gate.ok
        ? " · +4 vs cavalry"
        : id === "shot" && enemyHasKnights() && gate.ok
          ? " · 6 vs cavalry"
          : "";
    const nobleTax =
      id === "knight" && nobleKnightMult() > 1
        ? ` · noble surcharge ×${nobleKnightMult().toFixed(2)}`
        : "";
    return `
      <button type="button" class="led-unit ${gate.ok ? "" : "is-locked"} ${wave().inflateFx ? "is-inflating" : ""}"
        draggable="${gate.ok ? "true" : "false"}" data-unit="${id}" ${gate.ok ? "" : "disabled"}>
        <img src="${u.src}" alt="${u.title}" />
        <strong>${u.title}</strong>
        <span>${
          gate.ok
            ? `${price} gold · power ${combat}${matchNote}${nobleTax}`
            : gate.reason
        }</span>
      </button>`;
  };

  const spriteHtml = (kind, alt, side, extra = "", faceLeft = false, power = 0, uid = "") => {
    const src = LEDGER_ANIM[kind]?.walk?.[0] || "";
    const face = faceLeft ? " is-face-left" : "";
    return `
    <figure class="led-sprite is-${side} is-${kind}${face}" data-kind="${kind}" data-side="${side}" data-power="${power}" data-uid="${uid}" ${extra}>
      <img src="${src}" alt="${alt}" />
    </figure>`;
  };

  const playerSprites = () => {
    /** 两横行：上行=后排火枪，下行=前排近战（更靠中心）；禁止第三行 */
    const melee = [];
    const shots = [];
    let n = 0;
    const push = (id, bucket) => {
      const u = LEDGER_UNITS[id];
      for (let i = 0; i < field[id]; i += 1) {
        n += 1;
        bucket.push(
          spriteHtml(
            id,
            u.title,
            "you",
            `data-remove="${id}" title="Click to recall"`,
            false,
            unitCombatPower(id),
            `you-${id}-${n}`
          )
        );
      }
    };
    push("knight", melee);
    push("pike", melee);
    push("shot", shots);
    if (!melee.length && !shots.length) return "";

    const row = (cls, items) =>
      items.length
        ? `<div class="led-row ${cls}">${items.join("")}</div>`
        : "";

    if (shots.length) {
      return `${row("is-back", shots)}${row("is-front", melee)}`;
    }
    // 无枪：近战也拆成两横行，人数均分
    const mid = Math.ceil(melee.length / 2);
    return `${row("is-back", melee.slice(0, mid))}${row("is-front", melee.slice(mid))}`;
  };

  const enemySprites = () => {
    const bits = [];
    let n = 0;
    (wave().enemies || []).forEach((slot) => {
      const e = LEDGER_ENEMIES[slot.kind];
      if (!e) return;
      for (let i = 0; i < slot.count; i += 1) {
        n += 1;
        bits.push(
          spriteHtml(e.kind, e.alt, "foe", "", !!e.faceLeft, e.power, `foe-${e.kind}-${n}`)
        );
      }
    });
    if (!bits.length) return "";
    /** 对面也严格两横行：上行后排、下行前排（靠中心） */
    const mid = Math.ceil(bits.length / 2);
    const back = bits.slice(0, mid);
    const front = bits.slice(mid);
    const row = (cls, items) =>
      items.length
        ? `<div class="led-row ${cls}">${items.join("")}</div>`
        : "";
    return `${row("is-back", back)}${row("is-front", front)}`;
  };

  const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

  const clearAnim = () => {
    animTimers.forEach((id) => clearInterval(id));
    animTimers = [];
  };

  const playSpriteAnim = (el, mode, { loop = true, fps = 7 } = {}) => {
    if (el.classList.contains("is-dead")) return;
    const kind = el.getAttribute("data-kind");
    const frames = LEDGER_ANIM[kind]?.[mode];
    const img = el.querySelector("img");
    if (!frames?.length || !img) return;
    let i = 0;
    img.src = frames[0];
    const id = setInterval(() => {
      if (el.classList.contains("is-dead")) {
        clearInterval(id);
        animTimers = animTimers.filter((t) => t !== id);
        return;
      }
      i += 1;
      if (i >= frames.length) {
        if (!loop) {
          img.src = frames[frames.length - 1];
          clearInterval(id);
          animTimers = animTimers.filter((t) => t !== id);
          return;
        }
        i = 0;
      }
      img.src = frames[i];
    }, Math.round(1000 / fps));
    animTimers.push(id);
  };

  const startWalkLoops = () => {
    clearAnim();
    stage.querySelectorAll(".led-sprite[data-kind]:not(.is-dead)").forEach((el) => {
      // 火枪是远程：待机也播开火循环，显得在持枪瞄准
      const mode = el.classList.contains("is-shot") ? "fight" : "walk";
      playSpriteAnim(el, mode, { loop: true, fps: mode === "fight" ? 6 : 7 });
    });
  };

  const killSprite = async (el) => {
    if (!el || el.classList.contains("is-dead")) return;
    el.classList.add("is-dying");
    await wait(420);
    el.classList.add("is-dead");
    el.classList.remove("is-dying");
  };

  /** 战力对耗：能扣掉敌军就敌军消失；扣不动则我方单位依次消失 */
  const planAttrition = () => {
    const you = [...stage.querySelectorAll(".led-sprite.is-you")].map((el) => ({
      el,
      power: Number(el.getAttribute("data-power")) || 0,
    }));
    const foe = [...stage.querySelectorAll(".led-sprite.is-foe")].map((el) => ({
      el,
      power: Number(el.getAttribute("data-power")) || 0,
    }));
    let pool = you.reduce((s, u) => s + u.power, 0);
    /** @type {{ type: 'foe' | 'you', el: Element }[]} */
    const events = [];
    let foeLeft = foe.length;
    for (const enemy of foe) {
      if (pool >= enemy.power) {
        pool -= enemy.power;
        events.push({ type: "foe", el: enemy.el });
        foeLeft -= 1;
      } else {
        you.forEach((u) => events.push({ type: "you", el: u.el }));
        break;
      }
    }
    return { events, held: foeLeft <= 0 };
  };

  const meter = (label, value, cls) => `
    <div class="led-meter ${cls}">
      <div class="led-meter-row">
        <span>${label}</span>
        <strong>${Math.round(value)}</strong>
      </div>
      <div class="led-meter-bar" aria-hidden="true">
        <i style="width:${clamp(value, 0, 100)}%"></i>
      </div>
    </div>
  `;

  const enemyPowerTotal = () =>
    (wave().enemies || []).reduce((sum, slot) => {
      const e = LEDGER_ENEMIES[slot.kind];
      return sum + (e ? e.power * slot.count : 0);
    }, 0);

  const playHtml = () => {
    const w = wave();
    const power = fieldPower();
    const cost = fieldCost();
    const foePower = enemyPowerTotal();
    const okLikely = power >= foePower;
    const loseExtra = Math.round(18 * inflation());
    const income = winIncome();
    const afterWin = Math.max(0, treasury - cost + income);
    const afterLose = Math.max(0, treasury - cost - loseExtra);
    const lastBill = lastResult?.ledgerNote
      ? `<p class="led-last-bill">Last wave settled: ${lastResult.ledgerNote}</p>`
      : waveIndex === 0
        ? `<p class="led-last-bill">Opening treasury 100. Win: pay roster cost, then take income. Loss: roster cost + emergency, no income.</p>`
        : "";
    return `
      <div class="led-play ${w.inflateFx ? "is-inflating" : ""}">
        <header class="led-head">
          <p class="aside-label">War and Economy · ${w.id} / ${LEDGER_WAVES.length}</p>
          <h3 class="mil-play-title">${w.title}</h3>
        </header>
        <section class="led-books led-books-top" aria-label="Ledger">
          <div class="led-books-meters">
            ${meter("Treasury", treasury, "is-gold")}
            ${meter("Noble favour", nobles, "is-noble")}
            ${lastBill}
          </div>
          <div class="led-preview-card ${okLikely ? "is-ok" : "is-risk"}">
            <p class="led-preview">This wave: power <strong>${power}</strong> <span>/ facing ${foePower}</span>
              · cost <strong class="${w.inflateFx ? "is-tick" : ""}">${cost}</strong>
              <span>· after a win, about ${afterWin} (income +${income})</span>
              ${okLikely ? "" : `<span>· after a loss, about ${afterLose}</span>`}</p>
            <p class="led-preview-note">${
              cost > treasury
                ? "Cost exceeds the treasury"
                : okLikely
                  ? `Likely to hold · pay ${cost}, then income +${income}`
                  : `Power too low · a loss costs ${cost} + emergency ${loseExtra}, no income`
            }</p>
          </div>
        </section>
        <div class="led-board">
          <aside class="led-roster" aria-label="Available units">
            <p class="led-kicker">Order of battle</p>
            ${UNIT_IDS.map(unitChip).join("")}
            <p class="mil-play-tip">${w.hint}${
              knightLockedByNobles()
                ? " Nobles have blocked knights."
                : nobleKnightMult() > 1
                  ? " Nobles are discontent; knights cost more."
                  : ""
            }${treasury < 40 ? " Treasury is tight — watch the cost." : ""}</p>
          </aside>
          <div class="led-field${clashing ? " is-clashing" : ""}" data-drop-field>
            <div class="led-field-bg">
              <img src="/military/ledger_field.jpg" alt="" />
            </div>
            <div class="led-ranks" aria-hidden="true">
              <div class="led-rank is-you">
                ${playerSprites() || `<p class="led-field-empty">Drag here to form ranks · shot auto-lines in the rear</p>`}
              </div>
              <div class="led-rank is-foe">
                ${enemySprites()}
              </div>
            </div>
            <p class="led-pressure">Facing power ${foePower} · roster pressure ${w.threat}</p>
          </div>
        </div>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-led-fight ${fieldCount() && !clashing && cost <= treasury ? "" : "disabled"}>${clashing ? "Clashing" : "March"}</button>
          <button type="button" class="btn btn-ghost" data-led-clear ${fieldCount() ? "" : "disabled"}>Clear the field</button>
          <button type="button" class="btn btn-ghost" data-led-surrender ${clashing ? "disabled" : ""}>Concede</button>
        </div>
      </div>
    `;
  };

  const resultHtml = () => {
    const w = wave();
    const r = lastResult;
    const collapsed = r.collapse;
    const failTitle =
      collapsed === "bust"
        ? "Defeat · Treasury empty"
        : collapsed === "revolt"
          ? "Defeat · The nobles have turned"
          : null;
    const defeatLines = !r.held
      ? `<ul class="led-outcome-list">
          <li>Roster cost still charged (paid this wave: ${Math.abs(r.costPaid ?? 0)})</li>
          <li>Plus a defeat emergency levy of ${r.emergencyPaid ?? 0} (no income)</li>
          <li>Noble favour ${r.nobleDelta >= 0 ? "+" : ""}${r.nobleDelta}: too low and knights rise in price; lower still and they lock</li>
          <li>${
            collapsed === "bust"
              ? "The treasury is empty; you cannot hire more troops. This game ends here."
              : collapsed === "revolt"
                ? "Noble favour has collapsed; the knight roster will not take orders. This game ends here."
                : "If the treasury or the nobles cannot hold, the game closes early — you will not finish five waves"
          }</li>
        </ul>`
      : "";
    return `
      <div class="led-result ${r.held ? "is-win" : "is-miss"}${collapsed ? " is-fail" : ""}">
        <p class="aside-label">Wave ${w.id}${
          failTitle ? " · Defeat" : r.held ? " · Held" : " · Could not hold"
        }</p>
        <h3 class="mil-play-title">${
          failTitle ||
          (r.held ? "This clash is over" : "The roster did not hold")
        }</h3>
        ${
          collapsed
            ? `<p class="mil-play-brief">This game is over. Restart, or view the closing note first.</p>`
            : ""
        }
        ${defeatLines}
        <div class="led-result-books">
          ${meter("Treasury", treasury, "is-gold")}
          ${meter("Noble favour", nobles, "is-noble")}
          <p class="led-delta">This wave: Treasury <strong>${r.treasuryDelta}</strong> · Nobles <strong>${
            r.nobleDelta >= 0 ? "+" : ""
          }${r.nobleDelta}</strong></p>
          <p class="led-delta-detail">${r.ledgerNote || ""}</p>
        </div>
        <div class="mil-result-actions">
          ${
            collapsed
              ? `<button type="button" class="btn" data-led-again>Play again</button>
                 <button type="button" class="btn btn-ghost" data-led-next>View the close</button>`
              : `<button type="button" class="btn" data-led-next>${
                  waveIndex >= LEDGER_WAVES.length - 1 ? "See the ending" : "Next wave"
                }</button>`
          }
        </div>
      </div>
    `;
  };

  const chartPath = (values, w, h) => {
    const max = 100;
    return values
      .map((v, i) => {
        const x = values.length === 1 ? 8 : 8 + (i / (values.length - 1)) * (w - 16);
        const y = 8 + (1 - v / max) * (h - 16);
        return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  };

  const endCopy = () => {
    if (gaveUp) {
      return {
        fail: true,
        title: "You conceded",
        body: "You called the army back. This game is over. Try a leaner roster next time.",
      };
    }
    const kind = endingKind();
    if (kind === "bust") {
      return {
        fail: true,
        title: "The treasury died first",
        body: "No coin left to keep the roster. The war cannot continue. Defeat — tap Play again to open a new ledger.",
      };
    }
    if (kind === "revolt") {
      return {
        fail: true,
        title: "The nobles will not serve",
        body: "The knight roster lives on fiefs and honour. Once favour collapses, the heavy horse will not come. Defeat — you may start a new game.",
      };
    }
    if (kind === "thin") {
      return {
        fail: false,
        title: "Both lines ran thin",
        body: "You neither saved the treasury nor held the nobles. The kingdom can last this season, but not another long war.",
      };
    }
    if (kind === "powder") {
      return {
        fail: false,
        title: "The price changed hands",
        body: "Shot took a larger share. Powder changed more than walls — it changed who can pay for the next fight. Knights did not suddenly weaken; they grew too dear for a run of campaigns.",
      };
    }
    return {
      fail: false,
      title: "Still betting on knights",
      body: "The roster still leans old. It can fight in the short run. The ledger will remind you: across campaigns, expensive troops empty the treasury first.",
    };
  };

  const endHtml = () => {
    const w = 320;
    const h = 140;
    const knight = history.knightShare;
    const shot = history.shotShare;
    const copy = endCopy();
    return `
      <div class="led-end${copy.fail ? " is-fail" : ""}">
        <p class="aside-label">${
          copy.fail ? "Defeat" : "The close"
        } · Treasury ${Math.round(treasury)} · Nobles ${Math.round(nobles)}</p>
        ${copy.fail ? `<p class="led-fail-banner">Defeat · You may start again</p>` : ""}
        <h3 class="mil-play-title">${copy.title}</h3>
        <div class="led-result-books">
          ${meter("Final treasury", treasury, "is-gold")}
          ${meter("Final noble favour", nobles, "is-noble")}
        </div>
        <svg class="led-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Knight and shot usage">
          <path class="is-knight" d="${chartPath(knight, w, h)}" />
          <path class="is-shot" d="${chartPath(shot, w, h)}" />
        </svg>
        <p class="led-chart-legend"><i class="is-knight"></i> Knight share　<i class="is-shot"></i> Shot share</p>
        <p class="mil-play-brief">${copy.body}</p>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-led-again>Play again</button>
          <button type="button" class="btn btn-ghost" data-led-back>${opts.backLabel || "Leave"}</button>
        </div>
      </div>
    `;
  };

  const bindDrag = () => {
    stage.querySelectorAll(".led-unit:not(.is-locked)").forEach((el) => {
      el.addEventListener("dragstart", (e) => {
        const id = el.getAttribute("data-unit");
        e.dataTransfer?.setData("text/plain", id || "");
        e.dataTransfer?.setDragImage(el, 40, 40);
      });
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-unit");
        if (id) addUnit(id);
      });
    });

    const drop = stage.querySelector("[data-drop-field]");
    if (!drop) return;
    drop.addEventListener("dragover", (e) => {
      e.preventDefault();
      drop.classList.add("is-over");
    });
    drop.addEventListener("dragleave", () => drop.classList.remove("is-over"));
    drop.addEventListener("drop", (e) => {
      e.preventDefault();
      drop.classList.remove("is-over");
      const id = e.dataTransfer?.getData("text/plain");
      if (id) addUnit(id);
    });

    stage.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-remove");
        if (id && field[id] > 0 && !clashing) {
          field[id] -= 1;
          render();
        }
      });
    });
  };

  const addUnit = (id) => {
    if (clashing) return;
    if (!unitGate(id).ok) return;
    field[id] += 1;
    render();
  };

  const settleFight = (held) => {
    const cost = fieldCost();
    const nobleGain = fieldNoble();
    const emergency = held ? 0 : Math.round(18 * inflation());
    const income = held ? winIncome() : 0;
    const treasuryDelta = -(cost + emergency) + income;
    let nobleDelta = held ? nobleGain : Math.round(nobleGain * 0.2) - 12;
    if (!held) nobleDelta -= Math.round(4 * inflation());

    const beforeT = treasury;
    const beforeN = nobles;
    treasury = clamp(treasury + treasuryDelta, 0, 180);
    nobles = clamp(nobles + nobleDelta, 0, 100);

    const total = fieldCount() || 1;
    history.treasury.push(treasury);
    history.nobles.push(nobles);
    history.knightShare.push(Math.round((field.knight / total) * 100));
    history.shotShare.push(Math.round((field.shot / total) * 100));

    let collapse = null;
    if (treasury <= 0) collapse = "bust";
    else if (nobles <= 12) collapse = "revolt";

    const ledgerNote = held
      ? `Roster cost −${cost}, income +${income}. Nobles ${nobleDelta >= 0 ? "+" : ""}${nobleDelta}. Treasury ${beforeT}→${treasury}, nobles ${beforeN}→${nobles}.`
      : `Roster cost −${cost} + emergency −${emergency} (no income). Nobles ${nobleDelta}. Treasury ${beforeT}→${treasury}, nobles ${beforeN}→${nobles}.`;

    lastResult = {
      held,
      treasuryDelta,
      nobleDelta,
      collapse,
      ledgerNote,
      costPaid: cost,
      emergencyPaid: emergency,
      incomePaid: income,
    };
    clashing = false;
    phase = "result";
    render();
  };

  const fight = async () => {
    if (!fieldCount() || clashing) return;
    if (fieldCost() > treasury) return;
    clashing = true;
    const fieldEl = stage.querySelector(".led-field");
    fieldEl?.classList.add("is-clashing");
    fieldEl?.classList.remove("is-melee", "is-resolving");
    const btn = stage.querySelector("[data-led-fight]");
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Clashing";
    }
    const clearBtn = stage.querySelector("[data-led-clear]");
    if (clearBtn) clearBtn.disabled = true;

    const { events, held } = planAttrition();

    // 1) 近战冲锋靠拢；火枪原地开火，不跟排前移
    clearAnim();
    stage.querySelectorAll(".led-sprite[data-kind]:not(.is-dead)").forEach((el) => {
      if (el.classList.contains("is-shot") && el.classList.contains("is-you")) {
        playSpriteAnim(el, "fight", { loop: true, fps: 8 });
      } else {
        playSpriteAnim(el, "walk", { loop: true, fps: 10 });
      }
    });
    await wait(1250);
    if (!clashing) return;

    // 2) 碰上了，全体播攻击（火枪继续原地开枪）
    fieldEl?.classList.add("is-melee");
    clearAnim();
    stage.querySelectorAll(".led-sprite[data-kind]:not(.is-dead)").forEach((el) => {
      playSpriteAnim(el, "fight", { loop: true, fps: 8 });
    });
    await wait(1400);
    if (!clashing) return;

    // 3) 战力对耗：一个个消失
    fieldEl?.classList.add("is-resolving");
    for (const ev of events) {
      if (!clashing) return;
      await killSprite(ev.el);
      await wait(180);
    }
    await wait(420);
    if (!clashing) return;
    settleFight(held);
  };

  const nextWave = () => {
    if (lastResult?.collapse || waveIndex >= LEDGER_WAVES.length - 1) {
      phase = "end";
      render();
      return;
    }
    waveIndex += 1;
    field = blankField();
    phase = "play";
    render();
  };

  const surrender = () => {
    if (clashing) return;
    gaveUp = true;
    clashing = false;
    phase = "end";
    render();
  };

  const restart = () => {
    waveIndex = 0;
    treasury = 100;
    nobles = 42;
    field = blankField();
    history = {
      treasury: [100],
      nobles: [42],
      knightShare: [0],
      shotShare: [0],
    };
    lastResult = null;
    gaveUp = false;
    clashing = false;
    phase = "play";
    render();
  };

  const bindChrome = () => {
    stage.querySelector("[data-led-begin]")?.addEventListener("click", () => {
      phase = "play";
      render();
    });
    stage.querySelector("[data-led-back]")?.addEventListener("click", () => {
      opts.onBack?.();
    });
    stage.querySelector("[data-led-fight]")?.addEventListener("click", () => {
      fight();
    });
    stage.querySelector("[data-led-clear]")?.addEventListener("click", () => {
      field = blankField();
      render();
    });
    stage.querySelector("[data-led-surrender]")?.addEventListener("click", surrender);
    stage.querySelector("[data-led-next]")?.addEventListener("click", nextWave);
    stage.querySelector("[data-led-again]")?.addEventListener("click", restart);
  };

  const render = () => {
    clearAnim();
    if (phase === "intro") stage.innerHTML = introHtml();
    else if (phase === "play") stage.innerHTML = playHtml();
    else if (phase === "result") stage.innerHTML = resultHtml();
    else stage.innerHTML = endHtml();
    bindChrome();
    if (phase === "play") {
      bindDrag();
      startWalkLoops();
    }
  };

  const preloadAnim = () => {
    Object.values(LEDGER_ANIM).forEach((pack) => {
      [...pack.walk, ...pack.fight].forEach((src) => {
        const im = new Image();
        im.src = src;
      });
    });
  };

  phase = "intro";
  preloadAnim();
  render();
}
