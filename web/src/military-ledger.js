/**
 * 第二局 · 王国的账本
 * 拖拽上阵 · 五波 · 国库 / 贵族满意度实时反馈 · 收束折线
 */

export const LEDGER_UNITS = {
  knight: {
    id: "knight",
    title: "骑士",
    blurb: "战力高，吃钱吃封地；后期物价一涨就雇不起。",
    src: "/military/ledger_unit_knight.jpg",
    power: 12,
    cost: 24,
    noble: 14,
  },
  pike: {
    id: "pike",
    title: "长矛手",
    blurb: "前排墙，最多 4 名。对面有骑士时每矛 +4；纯矛扛不住后期火力缺口。",
    src: "/military/ledger_unit_pike.jpg",
    power: 6,
    cost: 9,
    noble: 3,
  },
  shot: {
    id: "shot",
    title: "火枪手",
    blurb: "打步兵强（战力 9）；对面有骑士时掉到 6——要靠矛阵扛骑。",
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
    alt: "民兵",
    faceLeft: true,
    power: 3,
  },
  pike: {
    kind: "pike",
    src: "/military/anim/pike_walk_01.png?v=cut11",
    alt: "长矛手",
    faceLeft: false,
    power: 5,
  },
  knight: {
    kind: "knight",
    src: "/military/anim/knight_walk_01.png?v=cut11",
    alt: "骑士",
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
    title: "第一波 · 民兵",
    briefing: "对面：民兵 ×3。拖骑士上阵即可。打赢会入账；后面敌军更强、物价会涨。",
    threat: 10,
    enemies: [{ kind: "levy", count: 3 }],
    unlock: ["knight"],
    inflation: 1,
    income: 28,
    hint: "先拖 1 名骑士出战。",
  },
  {
    id: 2,
    title: "第二波 · 长矛手",
    briefing: "对面：长矛手 ×4。长矛手已解锁（前排，最多 4 名）。可混一枪。",
    threat: 16,
    enemies: [{ kind: "pike", count: 4 }],
    unlock: ["knight", "pike"],
    inflation: 1,
    income: 34,
    hint: "例：3 矛 + 1 枪，或 1 骑 + 2 矛。",
  },
  {
    id: 3,
    title: "第三波 · 长矛手",
    briefing: "对面：长矛手 ×5。火枪已解锁——打步兵更强。纯 4 矛战力不够。",
    threat: 20,
    enemies: [{ kind: "pike", count: 5 }],
    unlock: ["knight", "pike", "shot"],
    inflation: 1.15,
    income: 40,
    hint: "例：3 火枪。下一波有敌骑，别只堆枪。",
  },
  {
    id: 4,
    title: "第四波 · 矛骑混编",
    briefing: "对面：长矛手 ×4 + 骑士 ×1。有敌骑：矛每名 +4，火枪战力降为 6。",
    threat: 28,
    enemies: [
      { kind: "pike", count: 4 },
      { kind: "knight", count: 1 },
    ],
    unlock: ["knight", "pike", "shot"],
    inflation: 1.4,
    income: 46,
    hint: "例：4 矛 + 1 枪。纯火枪要堆很多才够。",
    inflateFx: true,
  },
  {
    id: 5,
    title: "第五波 · 重兵压境",
    briefing: "对面：长矛手 ×3 + 骑士 ×2。入账赶不上骑士涨价；矛枪混编撑过最后一波。",
    threat: 32,
    enemies: [
      { kind: "pike", count: 3 },
      { kind: "knight", count: 2 },
    ],
    unlock: ["knight", "pike", "shot"],
    inflation: 1.65,
    income: 50,
    hint: "例：4 矛 + 1 枪。纯枪买不起够用的人数。",
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
      return { ok: false, reason: "未解锁" };
    }
    if (id === "knight" && knightLockedByNobles()) {
      return { ok: false, reason: "贵族抵制" };
    }
    if (id === "pike" && field.pike >= 4) {
      return { ok: false, reason: "矛阵已满(4)" };
    }
    const nextCost = fieldCost() + priceOf(id);
    if (nextCost > treasury) {
      return { ok: false, reason: "国库不够" };
    }
    if (fieldCount() >= 8) {
      return { ok: false, reason: "编制已满" };
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
        <img src="/military/ledger_cover.jpg" alt="摊开的战争账本" />
      </div>
      <div class="led-intro-copy">
        <p class="aside-label">第二局 · 可选</p>
        <h3 class="mil-play-title">王国的账本</h3>
        <p class="mil-play-brief">五波仗。拖兵上阵，战力够就打赢。打完扣编制费，打赢另有入账；打输还要多扣应急款。物价会涨——骑士越来越雇不起，要靠矛枪混编。</p>
        <p class="mil-play-hint">长矛克敌骑（有敌骑时每矛 +3 战力）；火枪单兵高但对骑无加成。金币不够不能加兵。</p>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-led-begin>开始五波</button>
          <button type="button" class="btn btn-ghost" data-led-back>${opts.backLabel || "离开"}</button>
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
        ? " · 对骑+4"
        : id === "shot" && enemyHasKnights() && gate.ok
          ? " · 见骑6"
          : "";
    const nobleTax =
      id === "knight" && nobleKnightMult() > 1
        ? ` · 贵族加价×${nobleKnightMult().toFixed(2)}`
        : "";
    return `
      <button type="button" class="led-unit ${gate.ok ? "" : "is-locked"} ${wave().inflateFx ? "is-inflating" : ""}"
        draggable="${gate.ok ? "true" : "false"}" data-unit="${id}" ${gate.ok ? "" : "disabled"}>
        <img src="${u.src}" alt="${u.title}" />
        <strong>${u.title}</strong>
        <span>${
          gate.ok
            ? `${price} 金 · 战力 ${combat}${matchNote}${nobleTax}`
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
            `data-remove="${id}" title="点一下撤回"`,
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
      ? `<p class="led-last-bill">上波结算：${lastResult.ledgerNote}</p>`
      : waveIndex === 0
        ? `<p class="led-last-bill">开局国库 100。胜：扣编制费后入账；负：编制费 + 应急，无入账。</p>`
        : "";
    return `
      <div class="led-play ${w.inflateFx ? "is-inflating" : ""}">
        <header class="led-head">
          <p class="aside-label">战争与经济 · ${w.id} / ${LEDGER_WAVES.length}</p>
          <h3 class="mil-play-title">${w.title}</h3>
        </header>
        <section class="led-books led-books-top" aria-label="账本">
          <div class="led-books-meters">
            ${meter("国库", treasury, "is-gold")}
            ${meter("贵族满意度", nobles, "is-noble")}
            ${lastBill}
          </div>
          <div class="led-preview-card ${okLikely ? "is-ok" : "is-risk"}">
            <p class="led-preview">本波战力 <strong>${power}</strong> <span>/ 对面 ${foePower}</span>
              · 花费 <strong class="${w.inflateFx ? "is-tick" : ""}">${cost}</strong>
              <span>· 胜后约 ${afterWin}（入账 +${income}）</span>
              ${okLikely ? "" : `<span>· 败后约 ${afterLose}</span>`}</p>
            <p class="led-preview-note">${
              cost > treasury
                ? "花费已超过国库"
                : okLikely
                  ? `大概扛得住 · 扣 ${cost} 后入账 +${income}`
                  : `战力不够 · 败了扣 ${cost} + 应急 ${loseExtra}，无入账`
            }</p>
          </div>
        </section>
        <div class="led-board">
          <aside class="led-roster" aria-label="可派单位">
            <p class="led-kicker">编制</p>
            ${UNIT_IDS.map(unitChip).join("")}
            <p class="mil-play-tip">${w.hint}${
              knightLockedByNobles()
                ? " 贵族已抵制骑士。"
                : nobleKnightMult() > 1
                  ? " 贵族不满，骑士更贵。"
                  : ""
            }${treasury < 40 ? " 国库偏紧，看好花费。" : ""}</p>
          </aside>
          <div class="led-field${clashing ? " is-clashing" : ""}" data-drop-field>
            <div class="led-field-bg">
              <img src="/military/ledger_field.jpg" alt="" />
            </div>
            <div class="led-ranks" aria-hidden="true">
              <div class="led-rank is-you">
                ${playerSprites() || `<p class="led-field-empty">拖到这边站队 · 火枪自动后排横行</p>`}
              </div>
              <div class="led-rank is-foe">
                ${enemySprites()}
              </div>
            </div>
            <p class="led-pressure">对面战力 ${foePower} · 编制压力 ${w.threat}</p>
          </div>
        </div>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-led-fight ${fieldCount() && !clashing && cost <= treasury ? "" : "disabled"}>${clashing ? "交锋中" : "出战"}</button>
          <button type="button" class="btn btn-ghost" data-led-clear ${fieldCount() ? "" : "disabled"}>清空战场</button>
          <button type="button" class="btn btn-ghost" data-led-surrender ${clashing ? "disabled" : ""}>认输</button>
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
        ? "本局失败 · 国库空了"
        : collapsed === "revolt"
          ? "本局失败 · 贵族翻脸了"
          : null;
    const defeatLines = !r.held
      ? `<ul class="led-outcome-list">
          <li>编制费照扣（本波已付 ${Math.abs(r.costPaid ?? 0)}）</li>
          <li>另扣战败应急款 ${r.emergencyPaid ?? 0}（无入账）</li>
          <li>贵族满意度 ${r.nobleDelta >= 0 ? "+" : ""}${r.nobleDelta}：太低则骑士涨价，再低锁死</li>
          <li>${
            collapsed === "bust"
              ? "国库归零，没法再雇兵，本局到此结束。"
              : collapsed === "revolt"
                ? "贵族掉穿，骑士编制不听调令，本局到此结束。"
                : "若国库或贵族撑不住，会提前收束，进不完五波"
          }</li>
        </ul>`
      : "";
    return `
      <div class="led-result ${r.held ? "is-win" : "is-miss"}${collapsed ? " is-fail" : ""}">
        <p class="aside-label">第 ${w.id} 波${
          failTitle ? " · 失败" : r.held ? "扛住了" : "顶不住"
        }</p>
        <h3 class="mil-play-title">${
          failTitle ||
          (r.held ? "这一仗打过去了" : "编制没顶住")
        }</h3>
        ${
          collapsed
            ? `<p class="mil-play-brief">本局结束。可重新开始，或先看收束小结。</p>`
            : ""
        }
        ${defeatLines}
        <div class="led-result-books">
          ${meter("国库", treasury, "is-gold")}
          ${meter("贵族满意度", nobles, "is-noble")}
          <p class="led-delta">本波变化：国库 <strong>${r.treasuryDelta}</strong> · 贵族 <strong>${
            r.nobleDelta >= 0 ? "+" : ""
          }${r.nobleDelta}</strong></p>
          <p class="led-delta-detail">${r.ledgerNote || ""}</p>
        </div>
        <div class="mil-result-actions">
          ${
            collapsed
              ? `<button type="button" class="btn" data-led-again>重新开始</button>
                 <button type="button" class="btn btn-ghost" data-led-next>看看收束</button>`
              : `<button type="button" class="btn" data-led-next>${
                  waveIndex >= LEDGER_WAVES.length - 1 ? "查看结局" : "下一波"
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
        title: "你认输了",
        body: "主动收兵，本局结束。换一套更省的编制，再开一局试试。",
      };
    }
    const kind = endingKind();
    if (kind === "bust") {
      return {
        fail: true,
        title: "国库先死了",
        body: "没有钱续编制，仗打不下去了。本局失败——点「再来一局」重新开账。",
      };
    }
    if (kind === "revolt") {
      return {
        fail: true,
        title: "贵族不干了",
        body: "骑士编制靠封地与面子养活。满意度掉穿之后唤不动甲骑。本局失败——可以再开一局。",
      };
    }
    if (kind === "thin") {
      return {
        fail: false,
        title: "两条线都瘦了",
        body: "既没攒下国库，也没稳住贵族。王国还能挨过这一季，但续不起下一场长时间战争。",
      };
    }
    if (kind === "powder") {
      return {
        fail: false,
        title: "价码换了人",
        body: "火枪占比抬起来了。火药改的不只是城墙，还有谁付得起下一仗——骑士不是突然变弱，是贵到撑不起连续战役。",
      };
    }
    return {
      fail: false,
      title: "还在押骑士",
      body: "编制仍偏旧。短期能打，账本会提醒你：连续战役里，贵兵会先把国库掏空。",
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
          copy.fail ? "本局失败" : "收束"
        } · 国库 ${Math.round(treasury)} · 贵族 ${Math.round(nobles)}</p>
        ${copy.fail ? `<p class="led-fail-banner">失败 · 可以重新开始</p>` : ""}
        <h3 class="mil-play-title">${copy.title}</h3>
        <div class="led-result-books">
          ${meter("最终国库", treasury, "is-gold")}
          ${meter("最终贵族满意度", nobles, "is-noble")}
        </div>
        <svg class="led-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="骑士与火枪使用率">
          <path class="is-knight" d="${chartPath(knight, w, h)}" />
          <path class="is-shot" d="${chartPath(shot, w, h)}" />
        </svg>
        <p class="led-chart-legend"><i class="is-knight"></i> 骑士占比　<i class="is-shot"></i> 火枪占比</p>
        <p class="mil-play-brief">${copy.body}</p>
        <div class="mil-result-actions">
          <button type="button" class="btn" data-led-again>再来一局</button>
          <button type="button" class="btn btn-ghost" data-led-back>${opts.backLabel || "离开"}</button>
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
      ? `编制费 −${cost}，入账 +${income}。贵族 ${nobleDelta >= 0 ? "+" : ""}${nobleDelta}。国库 ${beforeT}→${treasury}，贵族 ${beforeN}→${nobles}。`
      : `编制费 −${cost} + 应急 −${emergency}（无入账）。贵族 ${nobleDelta}。国库 ${beforeT}→${treasury}，贵族 ${beforeN}→${nobles}。`;

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
      btn.textContent = "交锋中";
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
