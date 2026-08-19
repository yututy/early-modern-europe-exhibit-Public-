/**
 * 经济厅总账：九笔过账贯穿全厅。
 * 过账 → 盖章 → 正文/交互 → 开新页（书卷翻页）。
 */

function econMedia(slide) {
  return `
    <figure class="wall-slide-media ledger-media-fix">
      <img src="${slide.src}" alt="${slide.alt || ""}" loading="lazy" />
    </figure>
  `;
}

const economyThemes = [
  {
    id: "boom",
    title: "The base of prosperity",
    teaser: "Population, mining, and trading cities rise together—expansion begins as a countable backdrop.",
    pageLabel: "Folio I · Base",
    slides: [
      {
        title: "A century of people and cities",
        paras: [
          "In the first half of the sixteenth century, population grew widely across much of Europe, often lasting into about 1620. Growth pushed more people into taxable, hireable, borrowable money relations: grain, rent, wages, and debt locked together. City figures were the easiest evidence to write down as “prosperity.”",
          "The line chart sets Rome (Volume I) beside Antwerp (standard urban-history estimates) on a shared scale. Different counting methods can shift totals by thousands; the exhibition reads the structure of the leap, not a census roll.",
        ],
        src: "/economy/antwerp_birdseye.jpg",
        alt: "Historical bird’s-eye view of Antwerp",
        caption: "City numbers: prosperity first written as countable population and throughput",
        voucher: "Population abstracts arrive from markets and parish books. Enter them under “base of prosperity”?",
        journal: "Dr: Urban population & consumption · Cr: Taxable, hireable money relations",
        seal: "Population",
        interact: "popChart",
      },
      {
        title: "Mining, smelting, and the print complex",
        paras: [
          "From about 1460–1530, output of iron, copper, and silver rose sharply. Ore seldom became money at once: it had to be sorted and crushed, roasted to strip sulfur, then driven in blast furnaces with charcoal and hydraulic blast; after slag and metal parted, refining and casting into bars still remained. Drainage engines and timbered galleries swallowed capital too—mining itself was an industrial expansion.",
          "Agricola’s De re metallica put pumps, furnace practice, and galleries into print, so technique could travel. Printing in turn pulled paper-making and spectacles; cities pulled building. The three steps below follow the workflow “prepare ore → smelt → cast bars” (a schematic rhythm, not a full process simulation).",
        ],
        src: "/economy/mining.jpg",
        alt: "Agricola, De re metallica: woodcut of mine engines",
        caption: "Mine engines enter the printed book: the technical face of industrial expansion",
        voucher: "Mining and smelting abstracts to the books: does metal enter a mobilizable industrial base?",
        journal: "Dr: Iron, copper, silver & print complex · Cr: Mobilizable industrial base",
        seal: "Mining",
        interact: "smelt",
      },
      {
        title: "Antwerp: a hub you can see",
        paras: [
          "In the first half of the sixteenth century, Antwerp was northern Europe’s most nameable trade and finance hub. Quays and the exchange were visible geographic anchors; bills of exchange and market letters were invisible tools of inter-city credit—only together did they write throughput as an interface.",
          "On the bird’s-eye view, tap the port and the exchange; then open the two credit-instrument cards. Once all four are lit, this folio may turn. Florence and Augsburg counting-houses plugged into just such urban networks before local wealth became mobilizable European power.",
        ],
        src: "/economy/antwerp_birdseye.jpg",
        alt: "Antwerp bird’s-eye view, 1572 (Braun & Hogenberg)",
        caption: "Antwerp: geographic anchors + inter-city credit tools",
        voucher: "The Antwerp hub plate is open. Confirm all four sites, then turn the page.",
        journal: "Dr: North Sea hub throughput · Cr: Inter-city credit interface",
        seal: "Hub",
        interact: "antwerpMap",
      },
    ],
  },
  {
    id: "merchant",
    title: "Merchant-bankers",
    teaser: "The Medici set the scale; the office and the putting-out system rewrite the word “merchant.”",
    pageLabel: "Folio II · Counting-house",
    slides: [
      {
        title: "The Medici: the scale of many branches",
        paras: [
          "The Medici rose from Florentine cloth and exchange. From the late fourteenth into the fifteenth century, the line of Giovanni di Bicci built a bank that could be copied across cities: Rome handled Curia-related receipts and payments; branches in Venice, Geneva, Bruges, and elsewhere settled trade and political loans. By about 1460 it was still one of Europe’s most influential commercial–financial complexes.",
          "Around 1451 assets stood in the order of some ninety thousand florins—enough to press Italian city-states and papal finance. Cosimo turned profits into patronage and civic alliances; Lorenzo’s generation kept “first citizen” influence afloat on credit. The heraldic balls stand for a name-credit that could be replicated branch by branch.",
          "High-risk lending could rebound: Bruges-branch loans to great men such as the Duke of Burgundy were one reason the network later contracted. Placing the Medici before the Fugger sets a measuring rod—the same merchant-banker role that mining empires would, half a century later, push to a larger scale.",
        ],
        src: "/economy/medici_arms.jpg",
        alt: "Medici arms: a visible mark of family credit",
        caption: "Medici arms: trade, credit, and city politics stacked on one name",
        voucher: "Letter from Florence: multi-branch assets about ninety thousand florins. Enter as measuring rod.",
        journal: "Dr: Multi-branch trade & credit · Cr: Family credit replicable across cities",
        seal: "Scale",
        interact: null,
      },
      {
        title: "From itinerant trader to the office",
        paras: [
          "By the early sixteenth century, successful merchants looked more and more like people at desks: Arabic-numeral bookkeeping, commercial law and insurance, prices and exchange intelligence in letters, and judgment of how politics hit markets. Long-distance itinerants still existed; elite daily work was already scheduled at the ledger table and in correspondence.",
          "Tap the trade seals on the counting-house compass to read each face—exchange, international banking, insurance, industry, and landed property. The face of early modern capital was often ink, seals, and interest rates.",
        ],
        src: "/economy/antwerp_bourse.jpg",
        alt: "Antwerp Exchange: the everyday of capital at the desk",
        caption: "Counting-house and exchange: the everyday of capital at the desk",
        voucher: "Office rules: has “merchant” widened from retail into a professional register?",
        journal: "Dr: Bookkeeping & exchange intelligence · Cr: Capital form at the desk",
        seal: "Books",
        interact: "trades",
      },
      {
        title: "Putting-out: capital reaches the household",
        paras: [
          "Putting-out: the merchant supplies materials; households process them at home and return finished goods. Capital need not own every loom, yet can bind family labor into a countable rhythm with raw stock, orders, and inspection.",
          "The “spindle” interaction below writes the subcontract chain as a loop you can walk; light a full week, then weigh gains and costs. Those who could organize mines and credit would, when war and the imperial election needed silver, stand across the table from princes negotiating rates.",
        ],
        src: "/economy/mining.jpg",
        alt: "Technical image linked to mining and household labor",
        caption: "Putting-out and mining books: how capital organizes labor and technique",
        voucher: "Putting-out commission sheet posted. Seal, then open Folio III.",
        journal: "Dr: Household work & mining contracts · Cr: Countable labor chain",
        seal: "Outwork",
        interact: "chain",
      },
    ],
  },
  {
    id: "fugger",
    title: "From mines to the imperial election",
    teaser: "The life of Jakob Fugger; florins of 1519 enter high politics.",
    pageLabel: "Folio III · Imperial election",
    slides: [
      {
        title: "Jakob Fugger: life and firm",
        paras: [
          "Jakob Fugger (1459–1525) was born into an Augsburg merchant family. Around 1478, at about nineteen, he entered trade in earnest—first learning logistics in the family’s textile and commercial network, then shifting toward mining leases, metal sales, and cross-border lending, until “Fugger” named a compound firm that could see both mine output and court cash shortfalls at once.",
          "He dealt for decades with the Habsburgs: advancing military and political outlays for Maximilian and others in return for mining rights, repayment schedules, and market access. Interests touched Tyrolean silver, Hungarian copper, Spanish mercury, and more; at the height under his successors, branches numbered about twenty-five. When Jakob died in 1525, he was already one of Europe’s richest merchant-bankers.",
        ],
        src: "/economy/fugger.jpg",
        alt: "Portrait associated with Jakob Fugger",
        caption: "Jakob Fugger: the human face of a mining–credit firm",
        voucher: "Augsburg personnel file: Jakob’s life and firm abstracted into the book.",
        journal: "Dr: Mining empire & branch net · Cr: Sustainable capacity for large loans",
        seal: "Fugger",
        interact: null,
      },
      {
        title: "1519: about 543,000 florins",
        paras: [
          "In the 1519 imperial election, Jakob supplied support on the order of some 543,000 florins to the Habsburg candidate (Charles). Fine totals are often written as about 543,385—roughly two-thirds of the electors’ cash arrangements for the whole contest (on the order of some 850,000).",
          "The figure may date; the structure does not: private credit walked straight into high politics.",
        ],
        src: "/economy/charles_medal.jpg",
        alt: "Medal of Charles V: a public emblem raised on election cash",
        caption: "Measuring the imperial election: how private credit writes public power",
        voucher: "Imperial-election file: about 543,000 florins await branch posting and lighting.",
        journal: "Dr: Cash & pledges the electors needed · Cr: Political leverage in the 1519 election",
        seal: "1519",
        interact: "florins",
      },
      {
        title: "Private credit, public power",
        paras: [
          "Here the Economy Hall arrives: population and cities gave a countable base; merchant-bankers made credit a firm that could be scheduled across cities; the Fugger proved that large private credit could rewrite who sat on the imperial throne.",
          "“Having money” here is not market noise; it is the counting-house capacity to keep feeding mines, bills of exchange, and electors’ cash. The engine of expansion sounds between interest rates and seals—next, the Military Hall will ask again, from gunpowder and infantry: who can pay for organized force, and who can monopolize it.",
        ],
        src: "/economy/merchant_andorfer.jpg",
        alt: "Portrait of Sebastian Andorfer (1517): a Renaissance merchant face",
        caption: "Arrival: a merchant portrait—the social face where private wealth meets public power",
        voucher: "Closing sheet of the ledger: three folios complete. Stamp and close the books.",
        journal: "Dr: Private credit networks · Cr: Cash conditions of public power",
        seal: "Nexus",
        interact: null,
      },
    ],
  },
];

function buildLedgerEntries() {
  const entries = [];
  economyThemes.forEach((theme, chapterIndex) => {
    theme.slides.forEach((slide, folioIndex) => {
      entries.push({
        id: `${theme.id}-${folioIndex}`,
        chapterIndex,
        folioIndex,
        chapterId: theme.id,
        chapterTitle: theme.title,
        pageLabel: theme.pageLabel,
        ref: `${chapterIndex + 1}.${folioIndex + 1}`,
        title: slide.title,
        paras: slide.paras,
        src: slide.src,
        alt: slide.alt,
        caption: slide.caption,
        voucher: slide.voucher,
        journal: slide.journal,
        seal: slide.seal,
        interact: slide.interact,
      });
    });
  });
  return entries;
}

const ledgerEntries = buildLedgerEntries();

function popChartSvg() {
  // 常规坐标：横轴年代，纵轴人口（万）——刻度加密
  const w = 440;
  const h = 236;
  const pad = { l: 42, r: 16, t: 22, b: 36 };
  const yearMin = 1490;
  const yearMax = 1610;
  const popMax = 12;
  const yearTicks = [1500, 1520, 1540, 1560, 1580, 1600];
  const popTicks = [0, 2, 4, 6, 8, 10];
  const xYear = (y) => pad.l + ((y - yearMin) / (yearMax - yearMin)) * (w - pad.l - pad.r);
  const yPop = (v) => pad.t + (1 - v / popMax) * (h - pad.t - pad.b);
  const rome = [
    [1526, 5],
    [1600, 10],
  ];
  const ant = [
    [1500, 4.6],
    [1526, 5],
    [1565, 9.5],
  ];
  const line = (pts) =>
    pts
      .map((p, i) => `${i ? "L" : "M"}${xYear(p[0]).toFixed(1)},${yPop(p[1]).toFixed(1)}`)
      .join(" ");
  const gridY = popTicks
    .map(
      (v) =>
        `<line x1="${pad.l}" y1="${yPop(v)}" x2="${w - pad.r}" y2="${yPop(v)}" stroke="rgba(196,165,116,0.12)" />`
    )
    .join("");
  const gridX = yearTicks
    .map(
      (y) =>
        `<line x1="${xYear(y)}" y1="${pad.t}" x2="${xYear(y)}" y2="${h - pad.b}" stroke="rgba(196,165,116,0.1)" />`
    )
    .join("");
  return `
    <svg class="pop-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Line chart of population scale for Rome and Antwerp">
      ${gridY}${gridX}
      <line x1="${pad.l}" y1="${h - pad.b}" x2="${w - pad.r}" y2="${h - pad.b}" stroke="rgba(196,165,116,0.4)" />
      <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${h - pad.b}" stroke="rgba(196,165,116,0.4)" />
      ${popTicks
        .map((v) => {
          const y = yPop(v);
          return `<line x1="${pad.l - 4}" y1="${y}" x2="${pad.l}" y2="${y}" stroke="rgba(196,165,116,0.45)" />
            <text x="6" y="${y + 3}" fill="#a69e90" font-size="9">${v}×10k</text>`;
        })
        .join("")}
      ${yearTicks
        .map((y) => {
          const x = xYear(y);
          return `<line x1="${x}" y1="${h - pad.b}" x2="${x}" y2="${h - pad.b + 4}" stroke="rgba(196,165,116,0.45)" />
            <text x="${x}" y="${h - 12}" fill="#a69e90" font-size="9" text-anchor="middle">${y}</text>`;
        })
        .join("")}
      <path d="${line(rome)}" fill="none" stroke="#d4bc94" stroke-width="2.2" />
      <path d="${line(ant)}" fill="none" stroke="#8fa88a" stroke-width="2.2" />
      ${rome
        .map((p) => `<circle cx="${xYear(p[0])}" cy="${yPop(p[1])}" r="3.5" fill="#d4bc94" />`)
        .join("")}
      ${ant
        .map((p) => `<circle cx="${xYear(p[0])}" cy="${yPop(p[1])}" r="3.5" fill="#8fa88a" />`)
        .join("")}
      <text x="${w - pad.r}" y="16" fill="#d4bc94" font-size="11" text-anchor="end">Rome</text>
      <text x="${w - pad.r}" y="32" fill="#8fa88a" font-size="11" text-anchor="end">Antwerp</text>
    </svg>`;
}

/** 冶炼三步：阿格里科拉木刻工序图 */
function smeltStepVisual(step) {
  const imgs = [
    "/economy/mining.jpg",
    "/economy/smelt_agri_charcoal.jpg",
    "/economy/smelt_agri_furnace.jpg",
  ];
  const alts = [
    "Agricola woodcut: preparing ore and mine engines",
    "Agricola woodcut: roasting and furnace yards in overview",
    "Agricola woodcut: work at the furnace and metal gathering",
  ];
  const i = Math.max(0, Math.min(2, step));
  return `
    <figure class="smelt-fig">
      <img data-smelt-img src="${imgs[i]}" alt="${alts[i]}" />
      <figcaption data-smelt-cap>${alts[i]}</figcaption>
    </figure>`;
}

function ledgerInteractHtml(entry) {
  const type = entry.interact;
  if (!type) return "";

  if (type === "popChart") {
    return `
      <div class="ledger-x" data-interact="popChart">
        <p class="ledger-x-label">Line chart · years on the x-axis · population (×10,000) on the y-axis</p>
        ${popChartSvg()}
        <p class="ledger-x-note">Rome follows Volume I close reading; Antwerp takes midpoints from standard urban-history scales. Use it to see the leap, not a precise census.</p>
      </div>`;
  }

  if (type === "smelt") {
    const steps = [
      {
        t: "1. Prepare the ore",
        d: "Ore rarely goes straight into the furnace. First sort and crush it, strip gangue and impurities, then ready charcoal and flux. Without this step, heat and slag cannot be controlled, and later smelting only carries the problem into the metal.",
        vis: "Woodcut sketch: galleries, drainage, and prep engines—the first link of industrial expansion.",
      },
      {
        t: "2. Blast smelting",
        d: "Once charged, hydraulic or bellows blast drives the furnace into the range where metal can gather. Sulfur and gangue enter the slag and are skimmed; liquid metal pools in the hearth and forehearth—this is the key process that rewrites “ore” as “mobilizable material.”",
        vis: "Woodcut sketch: roasting pits, furnace yards, and flues—blast separates heat from impurity.",
      },
      {
        t: "3. Draw the metal",
        d: "After tapping, pour into molds; cool and strip the bars. Bars can feed the mint or workshops for guns and engines—metal first becomes a unit of industrial base that can be booked, pledged, and allocated across cities.",
        vis: "Woodcut sketch: work at the furnace—metal gathers, ready to cast into the industrial base.",
      },
    ];
    return `
      <div class="ledger-x" data-interact="smelt" data-step="0">
        <p class="ledger-x-label">Workflow · three smelting steps (Agricola woodcuts)</p>
        <ol class="smelt-steps">
          ${steps
            .map(
              (s, i) => `
            <li data-smelt="${i}" class="${i === 0 ? "is-on" : ""}">
              <strong>${s.t}</strong><span>${s.d}</span>
            </li>`
            )
            .join("")}
        </ol>
        <div class="smelt-stage" aria-live="polite">
          <div class="smelt-flow-wrap" data-smelt-flow>${smeltStepVisual(0)}</div>
          <div class="smelt-stage-copy">
            <p class="smelt-vis" data-vis>${steps[0].vis}</p>
            <button type="button" class="btn" data-smelt-next>Enter blast smelting →</button>
          </div>
        </div>
        <p class="ledger-x-note smelt-done" hidden>Smelting complete: metal enters a mobilizable industrial base. You may continue to the next entry.</p>
      </div>`;
  }

  if (type === "antwerpMap") {
    const places = [
      {
        id: "port",
        label: "Port warehouses",
        x: 24,
        y: 36,
        d: "Wharves and warehouses along the Scheldt were the hand-off where inland goods went to sea and overseas cargo came ashore. The rhythm of loading set the city’s throughput: without the port, the exchange and bills of exchange were only idle paper credit. Throughput itself is the hub’s first face.",
      },
      {
        id: "bourse",
        label: "The Exchange",
        x: 51,
        y: 44,
        d: "Here merchants compared prices, negotiated exchange, and traded notes and news. The exchange gathered scattered deals into a stage that could be seen—prices, reputation, and political rumor were all re-priced under one roof. It is the room where cash met promises.",
      },
    ];
    const billIcon = `<svg class="antwerp-tool-svg" viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 12h16M12 17h16M12 22h12" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="28" cy="28" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M26.5 28h3M28 26.5v3" stroke="currentColor" stroke-width="1.2"/></svg>`;
    const letterIcon = `<svg class="antwerp-tool-svg" viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="10" width="28" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 12l14 10L34 12" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 26l6-4M30 26l-6-4" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/></svg>`;
    const tools = [
      {
        id: "bill",
        label: "Bill-of-exchange network",
        icon: billIcon,
        tag: "Inter-city credit",
        d: "A bill of exchange is not a building but a portable promise: you need not haul chests of cash; credit can arrive in the next city ahead of you. Antwerp became a hub not only because ships were many, but because such notes stitched North Sea and inland counting-houses into one net.",
      },
      {
        id: "news",
        label: "Market letters",
        icon: letterIcon,
        tag: "Intelligence channel",
        d: "Letters are not landmarks on the map but flowing market and political assessments. Whoever read reliable news first could seize the time gap in exchange and lending—intelligence itself was a priceable asset.",
      },
    ];
    return `
      <div class="ledger-x ledger-x-map" data-interact="antwerpMap">
        <p class="ledger-x-label">Interact · geographic anchors + inter-city credit tools</p>
        <div class="antwerp-stage" id="antwerp-stage">
          <img class="antwerp-map" src="/economy/antwerp_birdseye.jpg" alt="Antwerp bird’s-eye view, 1572" draggable="false" />
          ${places
            .map(
              (z) => `
            <button type="button" class="antwerp-zone" data-hub="${z.id}" data-text="${z.d.replace(/"/g, "&quot;")}"
              style="left:${z.x}%;top:${z.y}%" aria-label="${z.label}" aria-pressed="false"></button>`
            )
            .join("")}
          <ul class="antwerp-legend">
            ${places
              .map(
                (z) => `
              <li data-hub="${z.id}"><span class="flash-dot"></span><strong>${z.label}</strong><em>Geography</em></li>`
              )
              .join("")}
          </ul>
        </div>
        <p class="antwerp-tools-label">Credit tools (not pinned to map coordinates)</p>
        <div class="antwerp-tools">
          ${tools
            .map(
              (t) => `
            <button type="button" class="antwerp-tool" data-hub="${t.id}" data-text="${t.d.replace(/"/g, "&quot;")}" aria-pressed="false">
              <span class="antwerp-tool-icon" aria-hidden="true">${t.icon}</span>
              <span class="antwerp-tool-copy">
                <strong>${t.label}</strong>
                <em>${t.tag}</em>
              </span>
            </button>`
            )
            .join("")}
        </div>
        <p class="hub-detail" data-hub-detail>First tap the port / exchange on the map, then the two credit-tool cards.</p>
        <p class="ledger-x-note">Confirmed <span data-antwerp-n>0</span> / 4</p>
        <div class="antwerp-modal antwerp-modal-inline" data-antwerp-modal hidden>
          <h4 data-antwerp-title></h4>
          <p data-antwerp-body></p>
        </div>
      </div>`;
  }

  if (type === "trades") {
    const trades = [
      {
        t: "Exchange",
        icon: "⇄",
        angle: -90,
        d: "Spot conversion of currencies and bills is the gateway to inter-city trade. The counting-house must watch fineness, exchange fees, and price gaps between cities to turn “local money” into “money on the road.” Without exchange, a branch network is only an empty frame.",
      },
      {
        t: "International banking",
        icon: "▦",
        angle: -18,
        d: "Multi-branch lending and clearing turn local deposits into remote payment power. Much of Medici and Fugger strength came from whether the branch net could honor promises in the right city. One name had to be believed in many places at once.",
      },
      {
        t: "Insurance",
        icon: "◈",
        angle: 54,
        d: "Pricing risk for cargoes and contracts makes long-distance business add up. Insurance rewrites wreck and default from personal misfortune into a shareable cost line. Once risk can be priced, capital dares to stretch farther.",
      },
      {
        t: "Industry",
        icon: "⚒",
        angle: 126,
        d: "Mining, textiles, and other industries take credit and also yield pledgeable cash flow. Without an industrial base, large political loans rarely roll for long. Interest is repaid by furnace and loom, not by slogans.",
      },
      {
        t: "Landed property",
        icon: "⌂",
        angle: 198,
        d: "Urban and rural estates are both asset allocation and collateral for credit. On a merchant-banker’s balance sheet, interest and ground rent often sit side by side. Deeds pin paper promises to seizable goods.",
      },
    ];
    return `
      <div class="ledger-x" data-interact="trades">
        <p class="ledger-x-label">Interact · counting-house compass (tap a seal to expand)</p>
        <div class="trade-compass" data-trade-compass>
          <svg class="trade-compass-svg" viewBox="0 0 280 280" aria-hidden="true">
            <circle class="trade-rail" cx="140" cy="140" r="96" fill="none" />
            <defs>
              <marker id="trade-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#8fa88a" />
              </marker>
            </defs>
            ${[0, 1, 2, 3, 4]
              .map((i) => {
                const a0 = ((-90 + i * 72) * Math.PI) / 180;
                const a1 = ((-90 + i * 72 + 54) * Math.PI) / 180;
                const x1 = 140 + Math.cos(a0) * 96;
                const y1 = 140 + Math.sin(a0) * 96;
                const x2 = 140 + Math.cos(a1) * 96;
                const y2 = 140 + Math.sin(a1) * 96;
                return `<path class="trade-rail-arc" d="M${x1.toFixed(1)},${y1.toFixed(1)} A96,96 0 0,1 ${x2.toFixed(1)},${y2.toFixed(1)}" marker-end="url(#trade-arrow)" />`;
              })
              .join("")}
          </svg>
          <p class="trade-compass-core" data-trade-core>
            <span class="trade-core-icon" data-trade-core-icon>◎</span>
            <span data-trade-core-name>Tap a surrounding seal</span>
          </p>
          ${trades
            .map(
              (h) => `
            <button type="button" class="trade-seal" data-trade-text="${h.d.replace(/"/g, "&quot;")}" data-trade-name="${h.t}" data-trade-icon="${h.icon}"
              style="--seal-angle:${h.angle}deg">
              <span class="trade-icon" aria-hidden="true">${h.icon}</span>
              <strong>${h.t}</strong>
            </button>`
            )
            .join("")}
        </div>
        <p class="trade-detail" data-trade-detail>Tap a trade seal on the compass to read the expanded note.</p>
      </div>`;
  }

  if (type === "chain") {
    const nodes = [
      {
        t: "Merchant supplies materials",
        icon: "Out",
        d: "The merchant advances raw stock and specifications, locking delivery dates and inspection standards. Capital moves first and pulls households into the order rhythm: who supplies materials briefly holds the metronome of the whole chain.",
      },
      {
        t: "Household processing",
        icon: "Weave",
        d: "Households work in domestic time; tools are often their own. Capital saves on workshops and permanent hires, yet pushes quality and deadline risk onto the household—idle labor is rewritten as countable hours.",
      },
      {
        t: "Finished goods returned",
        icon: "Check",
        d: "Goods are inspected and balances settled; delay and defect are priced here. Bargaining power often does not sit with the household: the moment of return decides who bears loss and who takes the margin.",
      },
      {
        t: "Market & export",
        icon: "Mart",
        d: "Into the market or export channel, capital completes one turn and readies the next packet of materials. The loop closes; credit and goods leave the village together toward a larger price field.",
      },
    ];
    return `
      <div class="ledger-x" data-interact="chain">
        <p class="ledger-x-label">Spindle loop · light nodes in order</p>
        <p class="chain-guide">Guide: start at left with “Merchant supplies materials,” then light the four nodes clockwise along the arrows; the center shows the current step. When the ring is fully lit, the pros-and-cons panel opens below.</p>
        <div class="chain-spindle" data-chain>
          <svg class="chain-spindle-svg" viewBox="0 0 280 280" aria-hidden="true">
            <defs>
              <marker id="chain-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#c4a574" />
              </marker>
            </defs>
            <circle class="chain-rail" cx="140" cy="140" r="96" />
            ${[0, 1, 2, 3]
              .map((i) => {
                const a0 = ((-90 + i * 90 + 12) * Math.PI) / 180;
                const a1 = ((-90 + i * 90 + 78) * Math.PI) / 180;
                const x1 = 140 + Math.cos(a0) * 96;
                const y1 = 140 + Math.sin(a0) * 96;
                const x2 = 140 + Math.cos(a1) * 96;
                const y2 = 140 + Math.sin(a1) * 96;
                return `<path class="chain-rail-arc" d="M${x1.toFixed(1)},${y1.toFixed(1)} A96,96 0 0,1 ${x2.toFixed(1)},${y2.toFixed(1)}" marker-end="url(#chain-arrow)" />`;
              })
              .join("")}
            <circle class="chain-hub" cx="140" cy="140" r="40" />
            <text x="140" y="134" text-anchor="middle" class="chain-hub-icon" data-chain-hub-icon>Axis</text>
            <text x="140" y="152" text-anchor="middle" class="chain-hub-sub" data-chain-hub-name>Putting-out</text>
          </svg>
          ${nodes
            .map(
              (n, i) => `
            <button type="button" class="chain-bead${i === 0 ? " is-hint" : ""}" data-chain-i="${i}" data-chain-text="${n.d.replace(/"/g, "&quot;")}"
              data-chain-name="${n.t}" data-chain-icon="${n.icon}"
              style="--bead-i:${i}" ${i === 0 ? "" : "disabled"}>
              <span>${n.t}</span>
            </button>`
            )
            .join("")}
        </div>
        <p class="chain-detail" data-chain-detail>Next: tap “Merchant supplies materials” to begin the loop.</p>
        <div class="chain-proscons" hidden data-chain-done>
          <div class="chain-pro">
            <h4>Pros</h4>
            <ul>
              <li>Capital need not furnish every tool and workshop, so expansion can spread faster; orders arrive and are put out, then shrink when orders thin.</li>
              <li>Rural idle time enters a money chain; household hours become priceable units of labor.</li>
              <li>Output and deadlines can flex with market and export orders; capital holds the beat without watching every loom each day.</li>
            </ul>
          </div>
          <div class="chain-con">
            <h4>Cons</h4>
            <ul>
              <li>Households bargain weakly; quality and deadline risk are pushed outward onto the family; inspection standards are often read by the supplier alone.</li>
              <li>Specs and news travel through middlemen; information asymmetry lets margins lodge in the chain’s seams.</li>
              <li>In a crisis, orders stop cold and household labor takes the first hit: there is no workshop to shut, only idle looms and empty work.</li>
            </ul>
          </div>
        </div>
      </div>`;
  }

  if (type === "florins") {
    const branches = [
      {
        id: "a",
        amt: 200000,
        title: "Main cash channel to the electors",
        src: "Roughly the bulk of the Fugger share used to open key electors’ cash and pledges. The exhibition splits it into round, tappable tiers so you can see how the “main channel” arrives first. Without this tier, later top-ups are empty talk.",
      },
      {
        id: "b",
        amt: 200000,
        title: "Counter-bid hedge & top-up",
        src: "Facing French and other rivals’ raises, the Habsburg side needed a continuous transfusion. This tier covers the top-up that “dragged the vote past the danger zone”—political time bought with cash.",
      },
      {
        id: "c",
        amt: 143385,
        title: "Balance to 543,385",
        src: "Fine totals are often written as about 543,385 (roughly two-thirds of a total near 850,000; the rest shared by the Welser and others). This tier fills the remainder and locks the Fugger share so private credit writes as one complete imperial-election entry.",
      },
    ];
    const bagSvg = `
      <svg class="florin-bag-svg" viewBox="0 0 40 48" aria-hidden="true">
        <path d="M14 14 C14 8 26 8 26 14 L28 20 C32 22 34 28 33 36 C32 44 8 44 7 36 C6 28 8 22 12 20 Z" />
        <path d="M16 14 Q20 10 24 14" fill="none" />
        <circle cx="20" cy="30" r="3.5" fill="none" />
      </svg>`;
    return `
      <div class="ledger-x" data-interact="florins">
        <p class="ledger-x-label">Light the florins · three money-bag branches</p>
        <p class="ledger-x-note">Tap a bag to light coins; the note appears under the bag.</p>
        <div class="florin-stack">
          <div class="florin-coin-wrap" aria-label="Florins you can light">
            <div class="florin-photo" data-florin-photo>
              <img class="florin-photo-base" src="/economy/florin_coin.jpg" alt="" />
              <div class="florin-photo-lit" data-florin-lit style="--lit:0%">
                <img src="/economy/florin_coin.jpg" alt="Florin coin lighting up" />
              </div>
            </div>
            <p class="florin-sum">Lit <strong data-florin-sum>0</strong> / 543,385</p>
          </div>
          <div class="florin-bags">
            ${branches
              .map(
                (b) => `
              <div class="florin-bag-col">
                <button type="button" class="florin-bag" data-branch="${b.id}" data-amt="${b.amt}" data-src="${b.src.replace(/"/g, "&quot;")}">
                  <span class="florin-bag-icon" aria-hidden="true">${bagSvg}</span>
                  <strong>${b.title}</strong>
                  <em>${b.amt.toLocaleString("en-US")}</em>
                </button>
                <p class="florin-bag-detail" data-bag-detail="${b.id}" hidden></p>
              </div>`
              )
              .join("")}
          </div>
        </div>
        <p class="florin-done" hidden>All three bags lit: the full florin lights; the Fugger imperial-election share is posted.</p>
      </div>`;
  }

  return "";
}

/** 左侧只列出：已入账 + 当前主线这一笔（未到的不预告） */
function visibleNavIds(postedIds, questId) {
  const allow = new Set([...(postedIds || []), questId].filter(Boolean));
  return ledgerEntries.filter((e) => allow.has(e.id)).map((e) => e.id);
}

function ledgerJournalHtml(postedIds, activeId, questId) {
  const ids = visibleNavIds(postedIds, questId);
  if (!ids.length) {
    return `<p class="ledger-empty">As you Post, entries appear one by one on the left; those already shown can be tapped to review.</p>`;
  }
  return `
    <ul class="ledger-journal-list">
      ${ids
        .map((id) => {
          const e = ledgerEntries.find((x) => x.id === id);
          if (!e) return "";
          const on = e.id === activeId ? " is-active" : "";
          const done = postedIds.includes(e.id) ? " is-posted" : "";
          const quest = e.id === questId ? " is-quest" : "";
          const canReview = postedIds.includes(e.id);
          return `
          <li>
            <button type="button" class="ledger-journal-item${on}${done}${quest}" data-entry="${e.id}">
              <span class="ledger-ref">${e.ref}</span>
              <span class="ledger-item-body">
                <strong>${e.title}</strong>
                <em>${e.journal}</em>
              </span>
              <span class="ledger-mini-seal" aria-hidden="true">${canReview ? e.seal : "…"}</span>
            </button>
          </li>`;
        })
        .join("")}
    </ul>
    <p class="ledger-side-hint">Entries appear step by step as you Post; tap those already shown to review.</p>
  `;
}

function ledgerRightHtml(entry, phase, chapterDone, allDone) {
  if (allDone) {
    return `
      <div class="ledger-finale">
        <p class="ledger-finale-kicker">The books are closed</p>
        <h2 class="ledger-finale-title">Private credit, public power</h2>
        <p class="ledger-finale-text">
          Base, counting-house, and imperial-election folios are complete. Private credit here is no longer market noise but the cash condition that lets public power run—next, the Military Hall keeps asking who can pay for organized force.
        </p>
        <figure class="ledger-finale-fig">
          <img src="/economy/macro_empire.jpg" alt="Allegorical relief of Charles V’s court: private credit enters imperial politics on a macro stage" />
        </figure>
        <div class="hall-nav">
          <a class="btn" href="#/military">Next · Military Hall →</a>
          <a class="btn btn-ghost" href="#/politics">← Politics Hall</a>
        </div>
      </div>
    `;
  }

  if (chapterDone) {
    const next = economyThemes[entry.chapterIndex + 1];
    return `
      <div class="ledger-turn">
        <p class="ledger-turn-kicker">${entry.pageLabel} · three entries complete</p>
        <h2 class="ledger-turn-title">Turn the page</h2>
        <p class="ledger-turn-text">This chapter’s entries are stamped and posted. Turn to ${next ? next.pageLabel : "the next folio"} and continue posting.</p>
        <button type="button" class="btn" data-ledger-action="turn">Turn the page →</button>
      </div>
    `;
  }

  if (phase === "read" || phase === "done-stamp") {
    const needsGate =
      entry.interact === "smelt" ||
      entry.interact === "florins" ||
      entry.interact === "antwerpMap" ||
      entry.interact === "chain";
    const hideSide = entry.interact === "antwerpMap";
    return `
      <div class="ledger-read">
        <div class="ledger-read-top">
          <p class="ledger-ref-lg">${entry.ref} · Posted</p>
          <span class="ledger-seal is-on" aria-hidden="true">${entry.seal}</span>
        </div>
        <h2 class="ledger-read-title">${entry.title}</h2>
        <p class="ledger-journal-line">${entry.journal}</p>
        <div class="ledger-read-grid${hideSide ? " is-solo" : ""}">
          <div class="ledger-read-prose">
            ${entry.paras.map((p) => `<p>${p}</p>`).join("")}
            <p class="econ-folio-cap">${entry.caption}</p>
          </div>
          ${hideSide ? "" : `<div class="ledger-read-media">${econMedia(entry)}</div>`}
        </div>
        ${ledgerInteractHtml(entry)}
        <button type="button" class="btn" data-ledger-action="next"${needsGate ? " disabled" : ""}>Continue to next entry →</button>
      </div>
    `;
  }

  if (phase === "stamp") {
    return `
      <div class="ledger-voucher is-posted">
        <p class="ledger-voucher-label">Posted · awaiting Stamp</p>
        <p class="ledger-journal-line is-write">${entry.journal}</p>
        <p class="ledger-voucher-text">${entry.voucher}</p>
        <div class="ledger-stamp-row">
          <span class="ledger-seal" aria-hidden="true">${entry.seal}</span>
          <button type="button" class="btn" data-ledger-action="stamp">Stamp to confirm</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="ledger-voucher">
      <p class="ledger-voucher-label">Pending voucher · ${entry.pageLabel}</p>
      <h2 class="ledger-voucher-title">${entry.title}</h2>
      <p class="ledger-voucher-text">${entry.voucher}</p>
      <p class="ledger-hint">After Post, the entry writes to the left page; after Stamp, this folio’s body and interaction open.</p>
      <button type="button" class="btn" data-ledger-action="post">Post to the book</button>
    </div>
  `;
}

export function economyView() {
  return `
    <main class="screen economy" aria-label="Economy Hall">
      <header class="econ-mast">
        <a class="link-back" href="#/gate">← Gate</a>
        <p class="econ-mast-label">Ledger · posting the books</p>
        <h1 class="display">The engine of expansion</h1>
        <p class="hall-kicker">Nine entries through the hall · Post → Stamp → Turn the page</p>
        <p class="hall-intro">
          The whole hall is one ledger: right page for work to do, left page for the running journal; after Stamp, body copy and a focused interaction open. Between folios, the book turns.
        </p>
      </header>

      <div class="ledger-progress-bar" aria-live="polite">
        <p id="ledger-progress">Posted 0 / 9</p>
        <ol class="ledger-chapter-dots" id="ledger-chapter-dots">
          ${economyThemes
            .map(
              (t, i) =>
                `<li data-chapter="${i}" class="${i === 0 ? "is-current" : ""}"><span>${["I", "II", "III"][i]}</span>${t.title}</li>`
            )
            .join("")}
        </ol>
      </div>

      <div class="ledger-book" id="ledger-book" aria-label="Economy Hall ledger">
        <div class="ledger-spine" aria-hidden="true"></div>
        <div class="ledger-flip-sheet" aria-hidden="true"></div>
        <section class="ledger-page ledger-page-left">
          <header class="ledger-page-head">
            <p>Chapter list · tap to review once shown</p>
            <p id="ledger-page-label">${economyThemes[0].pageLabel}</p>
          </header>
          <div id="ledger-journal">${ledgerJournalHtml([], ledgerEntries[0].id, ledgerEntries[0].id)}</div>
        </section>
        <section class="ledger-page ledger-page-right" id="ledger-right" aria-live="polite">
          ${ledgerRightHtml(ledgerEntries[0], "post", false, false)}
        </section>
      </div>

      <footer class="politics-foot">
        <div class="hall-nav">
          <a class="btn btn-ghost" href="#/politics">← Politics Hall</a>
          <a class="btn btn-ghost" href="#/gate">Back to Gate</a>
        </div>
        <p class="credit">Historical spine: Eugene F. Rice Jr. and Anthony Grafton, The Foundations of Early Modern Europe, 1460–1559 · Chapter 2</p>
      </footer>
    </main>
  `;
}

export function bindEconomy(root) {
  const book = root.querySelector("#ledger-book");
  const journalEl = root.querySelector("#ledger-journal");
  const rightEl = root.querySelector("#ledger-right");
  const progressEl = root.querySelector("#ledger-progress");
  const pageLabelEl = root.querySelector("#ledger-page-label");
  const dots = root.querySelector("#ledger-chapter-dots");
  if (!book || !journalEl || !rightEl) return;

  const posted = [];
  let index = 0;
  let phase = "post";
  let viewingId = null;
  let quest = { index: 0, phase: "post", viewingId: null };
  let freeBrowse = false;

  const current = () => ledgerEntries[index];
  const questEntryId = () => ledgerEntries[quest.index]?.id || null;

  const unlockNext = () => {
    const btn = rightEl.querySelector('[data-ledger-action="next"]');
    if (btn) btn.disabled = false;
  };

  const refreshDots = () => {
    const ci = (freeBrowse ? current() : ledgerEntries[quest.index])?.chapterIndex ?? 0;
    dots?.querySelectorAll("li").forEach((li) => {
      const c = Number(li.dataset.chapter);
      const sealed = posted.filter((id) => ledgerEntries.find((e) => e.id === id)?.chapterIndex === c).length;
      li.classList.toggle("is-current", c === ci && phase !== "finale");
      li.classList.toggle("is-done", sealed >= 3);
    });
  };

  const snapshotQuest = () => {
    if (!freeBrowse) {
      quest = { index, phase, viewingId };
    }
  };

  /** 回看已入账条目；不推进主线 */
  const reviewEntry = (targetIndex) => {
    const entry = ledgerEntries[targetIndex];
    if (!entry || !posted.includes(entry.id)) return;
    snapshotQuest();
    freeBrowse = true;
    index = targetIndex;
    viewingId = entry.id;
    phase = "read";
    render();
  };

  const resumeQuest = () => {
    freeBrowse = false;
    index = quest.index;
    phase = quest.phase;
    viewingId = quest.viewingId;
    render();
  };

  const runPageFlip = (after) => {
    book.classList.add("is-flipping");
    window.setTimeout(() => {
      book.classList.remove("is-flipping");
      after();
      book.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 820);
  };

  const bindInteract = () => {
    const box = rightEl.querySelector(".ledger-x");
    if (!box) return;
    const type = box.dataset.interact;

    if (type === "smelt") {
      let step = 0;
      const viss = [
        "Woodcut sketch: galleries, drainage, and prep engines—the first link of industrial expansion.",
        "Woodcut sketch: roasting pits, furnace yards, and flues—blast separates heat from impurity.",
        "Woodcut sketch: work at the furnace—metal gathers, ready to cast into the industrial base.",
      ];
      const labels = ["Enter blast smelting →", "Enter casting →", "Done"];
      const btn = box.querySelector("[data-smelt-next]");
      const visEl = box.querySelector("[data-vis]");
      const flowEl = box.querySelector("[data-smelt-flow]");
      btn?.addEventListener("click", () => {
        if (step >= 2) return;
        step += 1;
        box.querySelectorAll("[data-smelt]").forEach((li) => {
          li.classList.toggle("is-on", Number(li.dataset.smelt) <= step);
        });
        if (visEl) visEl.textContent = viss[step];
        if (flowEl) flowEl.innerHTML = smeltStepVisual(step);
        if (btn) btn.textContent = labels[step] || "Done";
        if (step === 2) {
          btn.hidden = true;
          box.querySelector(".smelt-done")?.removeAttribute("hidden");
          unlockNext();
        }
      });
    }

    if (type === "antwerpMap") {
      const seen = new Set();
      const nEl = box.querySelector("[data-antwerp-n]");
      const modal = box.querySelector("[data-antwerp-modal]");
      const title = box.querySelector("[data-antwerp-title]");
      const body = box.querySelector("[data-antwerp-body]");
      const detail = box.querySelector("[data-hub-detail]");

      const markHub = (el, id, label) => {
        if (title) title.textContent = label;
        if (body) body.textContent = el.dataset.text || "";
        modal?.removeAttribute("hidden");
        if (seen.has(id)) return;
        seen.add(id);
        el.classList.add("is-found");
        el.setAttribute("aria-pressed", "true");
        box.querySelector(`.antwerp-legend li[data-hub="${id}"]`)?.classList.add("is-done");
        if (detail) detail.textContent = `Confirmed: ${label} (${seen.size}/4)`;
        if (nEl) nEl.textContent = String(seen.size);
        if (seen.size >= 4) unlockNext();
      };

      box.querySelectorAll(".antwerp-zone").forEach((btn) => {
        btn.addEventListener("click", () => {
          markHub(btn, btn.dataset.hub, btn.getAttribute("aria-label") || "");
        });
      });
      box.querySelectorAll(".antwerp-tool").forEach((btn) => {
        btn.addEventListener("click", () => {
          const label = btn.querySelector("strong")?.textContent || btn.dataset.hub || "";
          markHub(btn, btn.dataset.hub, label);
        });
      });
    }

    if (type === "trades") {
      const detail = box.querySelector("[data-trade-detail]");
      const coreIcon = box.querySelector("[data-trade-core-icon]");
      const coreName = box.querySelector("[data-trade-core-name]");
      box.querySelectorAll(".trade-seal").forEach((btn) => {
        btn.addEventListener("click", () => {
          box.querySelectorAll(".trade-seal").forEach((b) => b.classList.remove("is-on"));
          btn.classList.add("is-on");
          if (coreIcon) coreIcon.textContent = btn.dataset.tradeIcon || "◎";
          if (coreName) coreName.textContent = btn.dataset.tradeName || "";
          if (detail) detail.textContent = btn.dataset.tradeText || "";
        });
      });
      unlockNext();
    }

    if (type === "chain") {
      let i = 0;
      const labels = [
        "Merchant supplies materials",
        "Household processing",
        "Finished goods returned",
        "Market & export",
      ];
      const detail = box.querySelector("[data-chain-detail]");
      const hubIcon = box.querySelector("[data-chain-hub-icon]");
      const hubName = box.querySelector("[data-chain-hub-name]");
      box.querySelectorAll(".chain-bead").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.dataset.chainI);
          if (idx !== i) return;
          btn.classList.add("is-on");
          btn.classList.remove("is-hint");
          if (detail) detail.textContent = btn.dataset.chainText || "";
          if (hubIcon) hubIcon.textContent = btn.dataset.chainIcon || "Axis";
          if (hubName) hubName.textContent = btn.dataset.chainName || "";
          i += 1;
          const next = box.querySelector(`.chain-bead[data-chain-i="${i}"]`);
          if (next) {
            next.disabled = false;
            next.classList.add("is-hint");
            if (detail && i < 4) {
              detail.textContent = `${btn.dataset.chainText || ""}\n→ Next: tap “${labels[i]}”`;
            }
          }
          if (i >= 4) {
            if (detail) detail.textContent = "Full ring lit. Weigh pros and cons below, then continue to the next entry.";
            box.querySelector("[data-chain-done]")?.removeAttribute("hidden");
            unlockNext();
          }
        });
      });
    }

    if (type === "florins") {
      let sum = 0;
      const lit = new Set();
      const sumEl = box.querySelector("[data-florin-sum]");
      const litEl = box.querySelector("[data-florin-lit]");

      const refreshLit = () => {
        const pct = (lit.size / 3) * 100;
        if (litEl) litEl.style.setProperty("--lit", `${pct}%`);
        if (lit.size >= 3) litEl?.classList.add("is-complete");
      };

      box.querySelectorAll(".florin-bag").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.branch;
          if (!id || lit.has(id)) return;
          const amt = Number(btn.dataset.amt || 0);
          lit.add(id);
          sum += amt;
          btn.classList.add("is-posted");
          const bagDetail = box.querySelector(`[data-bag-detail="${id}"]`);
          if (bagDetail) {
            bagDetail.hidden = false;
            bagDetail.textContent = btn.dataset.src || "";
          }
          if (sumEl) sumEl.textContent = sum.toLocaleString("en-US");
          refreshLit();
          if (lit.size >= 3) {
            box.querySelector(".florin-done")?.removeAttribute("hidden");
            unlockNext();
          }
        });
      });
      refreshLit();
    }

    if (!type || type === "popChart" || type === "trades") unlockNext();
  };

  const bindJournal = () => {
    journalEl.querySelectorAll(".ledger-journal-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.entry;
        const i = ledgerEntries.findIndex((e) => e.id === id);
        if (i < 0) return;
        // 当前主线笔：若在回看中则回到进度；否则不打断过账
        if (id === questEntryId()) {
          if (freeBrowse) resumeQuest();
          return;
        }
        // 仅已入账的可回看
        if (posted.includes(id)) reviewEntry(i);
      });
    });
  };

  const bindRight = () => {
    bindInteract();
    if (freeBrowse) {
      const nextBtn = rightEl.querySelector('[data-ledger-action="next"]');
      if (nextBtn) {
        nextBtn.textContent = "Return to current progress →";
        nextBtn.disabled = false;
        nextBtn.dataset.ledgerAction = "resume";
      }
    }
    rightEl.querySelectorAll("[data-ledger-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.ledgerAction;
        const entry = current();

        if (action === "resume") {
          resumeQuest();
          return;
        }

        if (freeBrowse && action !== "resume") {
          // 自由查阅中不推进主线，只允许 resume
          return;
        }

        if (action === "post") {
          if (!posted.includes(entry.id)) posted.push(entry.id);
          phase = "stamp";
          viewingId = entry.id;
          quest = { index, phase, viewingId };
          render();
          return;
        }

        if (action === "stamp") {
          const seal = rightEl.querySelector(".ledger-seal");
          seal?.classList.add("is-stamp");
          window.setTimeout(() => {
            phase = "read";
            viewingId = entry.id;
            quest = { index, phase, viewingId };
            render();
          }, 380);
          return;
        }

        if (action === "next") {
          if (btn.disabled) return;
          if (viewingId && viewingId !== entry.id && posted.length < 9) {
            viewingId = entry.id;
            if (!posted.includes(entry.id)) phase = "post";
            else {
              const chapterPosts = posted.filter(
                (id) => ledgerEntries.find((e) => e.id === id)?.chapterIndex === entry.chapterIndex
              );
              if (chapterPosts.length >= 3 && entry.folioIndex === 2 && posted.includes(entry.id)) {
                phase = entry.chapterIndex >= 2 ? "finale" : "turn";
              } else phase = "read";
            }
            quest = { index, phase, viewingId };
            render();
            return;
          }

          const chapterPosts = posted.filter(
            (id) => ledgerEntries.find((e) => e.id === id)?.chapterIndex === entry.chapterIndex
          );

          if (chapterPosts.length >= 3 && entry.folioIndex === 2) {
            phase = entry.chapterIndex >= 2 ? "finale" : "turn";
            viewingId = entry.id;
            quest = { index, phase, viewingId };
            render();
            return;
          }

          index = Math.min(index + 1, ledgerEntries.length - 1);
          phase = "post";
          viewingId = ledgerEntries[index].id;
          quest = { index, phase, viewingId };
          render();
          return;
        }

        if (action === "turn") {
          runPageFlip(() => {
            index = Math.min(index + 1, ledgerEntries.length - 1);
            phase = "post";
            viewingId = ledgerEntries[index].id;
            quest = { index, phase, viewingId };
            render();
          });
        }
      });
    });
  };

  const render = () => {
    const entry = current();
    const postedCount = posted.length;
    const questRef = ledgerEntries[quest.index]?.ref || "—";
    if (phase === "finale") {
      progressEl.textContent = "The books are closed · 9 / 9";
    } else if (freeBrowse) {
      progressEl.textContent = `Reviewing ${entry?.ref || "—"} · main progress ${questRef} (Posted ${postedCount}/9)`;
    } else {
      progressEl.textContent = `Posted ${postedCount} / 9 · current ${entry?.ref || "—"}`;
    }

    if (phase === "finale") {
      freeBrowse = false;
      pageLabelEl.textContent = "Closed";
      journalEl.innerHTML = ledgerJournalHtml(posted, viewingId, questEntryId());
      rightEl.innerHTML = ledgerRightHtml(entry || ledgerEntries[8], phase, false, true);
      refreshDots();
      bindRight();
      bindJournal();
      return;
    }

    if (phase === "turn") {
      pageLabelEl.textContent = entry.pageLabel;
      journalEl.innerHTML = ledgerJournalHtml(posted, viewingId, questEntryId());
      rightEl.innerHTML = ledgerRightHtml(entry, phase, true, false);
      refreshDots();
      bindRight();
      bindJournal();
      return;
    }

    if (viewingId && phase === "read") {
      const viewed = ledgerEntries.find((e) => e.id === viewingId) || entry;
      pageLabelEl.textContent = viewed.pageLabel;
      journalEl.innerHTML = ledgerJournalHtml(posted, viewingId, questEntryId());
      rightEl.innerHTML = ledgerRightHtml(viewed, "read", false, false);
      const nextBtn = rightEl.querySelector('[data-ledger-action="next"]');
      if (nextBtn && freeBrowse) {
        nextBtn.textContent = "Return to current progress →";
        nextBtn.disabled = false;
        nextBtn.dataset.ledgerAction = "resume";
      } else if (nextBtn && viewingId !== entry.id) {
        nextBtn.textContent = "Return to current voucher →";
        nextBtn.disabled = false;
      }
      refreshDots();
      bindRight();
      bindJournal();
      return;
    }

    pageLabelEl.textContent = entry.pageLabel;
    journalEl.innerHTML = ledgerJournalHtml(posted, entry.id, questEntryId());
    rightEl.innerHTML = ledgerRightHtml(entry, phase, false, false);
    refreshDots();
    bindRight();
    bindJournal();
  };

  render();
}
