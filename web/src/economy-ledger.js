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
    title: "繁荣的底盘",
    teaser: "人口、矿冶与贸易城市同步抬头——扩张首先是可计数的背景板。",
    pageLabel: "第 I 册 · 底盘",
    slides: [
      {
        title: "一个世纪的人口与城市",
        paras: [
          "16 世纪上半叶，欧洲多地人口广泛增长，势头往往可延至约 1620。人口把更多人推进可征税、可雇佣、可借贷的货币关系：粮食、房租、工资与债务彼此咬合。城市数字最容易被写成「繁荣」的证据。",
          "折线图并置罗马（卷一）与安特卫普（城市史通行估计）的量级轨迹。口径不同会差数千人；展览读的是「跃升」结构，不是户口册。",
        ],
        src: "/economy/antwerp_birdseye.jpg",
        alt: "安特卫普城市历史鸟瞰",
        caption: "城市数字：繁荣最先被写成可统计的人口与吞吐",
        voucher: "市集与教区册送来的人口节略到账。是否记入「繁荣底盘」？",
        journal: "借：城市人口与消费 · 贷：可征税、可雇佣的货币关系",
        seal: "人口",
        interact: "popChart",
      },
      {
        title: "矿冶、冶炼与印刷配套",
        paras: [
          "约 1460–1530，铁、铜、银产量大幅上升。矿石很少直接变成货币：先要选矿与破碎，再经焙烧去硫，进入鼓风炉靠木炭与水力鼓风维持高温，炉渣与金属分离后，还要精炼、铸锭。排水机械与坑道支护同样吞进资本——矿冶本身就是一场工业扩张。",
          "阿格里科拉《论矿冶》把抽水机、炉况与坑道画进印刷书，使技术可复制传播。印刷又拉动造纸与眼镜；城市拉动建筑。下面三步按「备矿→熔炼→出锭」工作流程推进（示意节奏，非真实工艺仿真）。",
        ],
        src: "/economy/mining.jpg",
        alt: "阿格里科拉《论矿冶》矿井器械木刻",
        caption: "矿冶器械进入印刷书：实业扩张的技术面孔",
        voucher: "矿冶与冶炼产出节略到账：金属进入可调度的产业底盘？",
        journal: "借：铁铜银与印刷配套 · 贷：可调度的产业底盘",
        seal: "矿冶",
        interact: "smelt",
      },
      {
        title: "安特卫普：可被看见的枢纽",
        paras: [
          "16 世纪上半叶，安特卫普是北欧最便于「点名」的贸易与金融枢纽。港区与交易所是看得见的地理落点；汇票与行情书信则是看不见的跨城信用工具——两者叠在一起，才把吞吐写成接口。",
          "在鸟瞰图上点选港区、交易所；再点开两张信用工具卡读说明。四处齐亮后本册可翻页。佛罗伦萨与奥格斯堡的账房，正是接到这类城市网络上，地方财富才变成可调动的欧洲力量。",
        ],
        src: "/economy/antwerp_birdseye.jpg",
        alt: "安特卫普 1572 年鸟瞰图（Braun & Hogenberg）",
        caption: "安特卫普：地理落点 + 跨城信用工具",
        voucher: "安特卫普枢纽图已开卷。四处确认后可开新页。",
        journal: "借：北海枢纽吞吐 · 贷：跨城信用接口",
        seal: "枢纽",
        interact: "antwerpMap",
      },
    ],
  },
  {
    id: "merchant",
    title: "商人—银行家",
    teaser: "美第奇给出尺度；办公室与出差制改写「商人」一词。",
    pageLabel: "第 II 册 · 账房",
    slides: [
      {
        title: "美第奇：多分支的尺度",
        paras: [
          "美第奇起于佛罗伦萨呢绒与汇兑。14 世纪末至 15 世纪，乔瓦尼·迪·比奇一系把银行做成可跨城复制的企业：罗马承接教廷相关收付，威尼斯、日内瓦、布鲁日等处分行处理贸易结算与政治贷款。到约 1460 年，它仍是欧洲最有影响力的商业—金融复合体之一。",
          "1451 年前后资产约在九万弗罗林量级——对意大利城邦与教皇财政已足以施压。科西莫把利润转投赞助与城邦联盟；洛伦佐一代继续以信用维持「第一公民」式影响。纹章圆球象征可分行复制的名号信用。",
          "高风险放贷也会反噬：布吕日分行对勃艮第公爵一类大人物的借贷，是网络后来收缩的因素之一。把美第奇放在富格尔之前，是立对照尺——同一种商人—银行家角色，半个多世纪后会被矿冶帝国推到更大尺度。",
        ],
        src: "/economy/medici_arms.jpg",
        alt: "美第奇纹章：家族信用的可视标识",
        caption: "美第奇纹章：工商、信贷与城邦政治叠在同一名号上",
        voucher: "佛罗伦萨来函：多分支资产约九万弗罗林。记为对照尺。",
        journal: "借：多分支工商信贷 · 贷：可跨城复制的家族信用",
        seal: "尺度",
        interact: null,
      },
      {
        title: "从行商到办公室",
        paras: [
          "16 世纪初，成功商人越来越像坐办公室的人：阿拉伯数字簿记、商法与保险、书信里的价格与汇兑情报，以及评估政局对市场的冲击。长途行商仍在，上层精英的日常却在账桌与信函里完成调度。",
          "点击账房罗盘上的行业印记，阅读各面向的展开说明——兑换、国际银行、保险、实业与地产。早期现代资本的面孔，常常是墨水、印章与利率。",
        ],
        src: "/economy/antwerp_bourse.jpg",
        alt: "安特卫普交易所：坐办公室的资本日常",
        caption: "账房与交易所：坐办公室的资本日常",
        voucher: "办公室规程：商人一词是否从零售扩成职业名册？",
        journal: "借：簿记与汇兑情报 · 贷：坐办公室的资本形态",
        seal: "簿记",
        interact: "trades",
      },
      {
        title: "出差制：资本伸进农户",
        paras: [
          "出差制（putting-out）：商人发料，农户家内加工，再交回成品。资本不必拥有每台织机，却能用原料、订单与收购把家庭劳动编进可计算的节奏。",
          "下方「线轴」交互把分包链写成可绕行的劳动回路；点亮一周后对照利弊。能组织矿冶与信贷的人，在战争与帝选需要银两时，又会站在君主对面谈判利率。",
        ],
        src: "/economy/mining.jpg",
        alt: "矿冶与家内劳动相关技术图像",
        caption: "出差制与矿冶书：资本如何组织劳动与技术",
        voucher: "出差制发包单到账。封章后开第 III 册。",
        journal: "借：家内加工与矿冶发包 · 贷：可计算的劳动链条",
        seal: "发包",
        interact: "chain",
      },
    ],
  },
  {
    id: "fugger",
    title: "矿冶接到帝选",
    teaser: "雅各布·富格尔的生平；1519 弗罗林进入最高政治。",
    pageLabel: "第 III 册 · 帝选",
    slides: [
      {
        title: "雅各布·富格尔：生平与企业",
        paras: [
          "雅各布·富格尔（1459–1525）生于奥格斯堡商人家庭。1478 年前后约十九岁正式从商，先在家族纺织与贸易网络中学习调度，后把重心转向矿冶承揽、金属销售与跨境放贷，使「富格尔」成为可同时看见矿井产量与宫廷现金缺口的复合企业名号。",
          "他与哈布斯堡长期往来：为马克西米利安等垫付军政开销，换取矿权、还款安排与市场准入。企业利益涉及蒂罗尔银、匈牙利铜、西班牙汞等；到其后人盛期，分支约达二十五处。1525 年雅各布去世时，已是欧洲最富有的商人—银行家之一。",
        ],
        src: "/economy/fugger.jpg",
        alt: "雅各布·富格尔相关肖像",
        caption: "雅各布·富格尔：矿冶—信贷企业的人格化面孔",
        voucher: "奥格斯堡人事档：雅各布生平与企业节略入册。",
        journal: "借：矿冶帝国与分支网 · 贷：可持续的大额放贷能力",
        seal: "富格尔",
        interact: null,
      },
      {
        title: "1519：约 54.3 万弗罗林",
        paras: [
          "1519 年帝选，雅各布向哈布斯堡候选人（查理）一侧提供约 54.3 万弗罗林量级支持。细数常见写作约 543,385，约占整场选侯现金安排（约 85 万量级）的三分之二。",
          "数字会过时，结构不会：私人信贷直接进入最高政治。",
        ],
        src: "/economy/charles_medal.jpg",
        alt: "查理五世奖章：帝选现金所托起的公共权力象征",
        caption: "帝选计量：私人信贷如何写成公共权力",
        voucher: "帝选专档：约 54.3 万弗罗林待分支入账、点亮。",
        journal: "借：选侯所需现金与承诺 · 贷：1519 帝选政治杠杆",
        seal: "1519",
        interact: "florins",
      },
      {
        title: "私人信贷，公共权力",
        paras: [
          "经济厅走到这里：人口与城市给出可计数的底盘，商人—银行家把信用做成可跨城调度的企业，富格尔则证明大额私人信贷能改写谁坐上帝国的位子。",
          "「有钱」在此不等于市集喧哗，而等于能持续供养矿冶、汇票与选侯现金的那一套账房能力。扩张的引擎，响在利率与印章之间——下一站军事厅，会从火药与步兵再问一遍：谁付得起、谁垄断得了有组织的武力。",
        ],
        src: "/economy/merchant_andorfer.jpg",
        alt: "塞巴斯蒂安·安多费尔肖像（1517）：文艺复兴时期的富商面孔",
        caption: "到站：富商肖像——私人财富与公共权力交汇的社会面孔",
        voucher: "总账收束页：三册已齐。盖章锁册。",
        journal: "借：私人信贷网络 · 贷：公共权力的现金条件",
        seal: "接合",
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
    <svg class="pop-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="罗马与安特卫普人口量级折线图">
      ${gridY}${gridX}
      <line x1="${pad.l}" y1="${h - pad.b}" x2="${w - pad.r}" y2="${h - pad.b}" stroke="rgba(196,165,116,0.4)" />
      <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${h - pad.b}" stroke="rgba(196,165,116,0.4)" />
      ${popTicks
        .map((v) => {
          const y = yPop(v);
          return `<line x1="${pad.l - 4}" y1="${y}" x2="${pad.l}" y2="${y}" stroke="rgba(196,165,116,0.45)" />
            <text x="6" y="${y + 3}" fill="#a69e90" font-size="9">${v}万</text>`;
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
      <text x="${w - pad.r}" y="16" fill="#d4bc94" font-size="11" text-anchor="end">罗马</text>
      <text x="${w - pad.r}" y="32" fill="#8fa88a" font-size="11" text-anchor="end">安特卫普</text>
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
    "阿格里科拉木刻：矿井备矿与器械",
    "阿格里科拉木刻：焙烧与炉群工序全景",
    "阿格里科拉木刻：炉前作业与金属汇聚",
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
        <p class="ledger-x-label">折线图 · 横轴年代 · 纵轴人口（万）</p>
        ${popChartSvg()}
        <p class="ledger-x-note">罗马据卷一精读；安特卫普取通行城市史量级中值。用于看见跃升，而非精确普查。</p>
      </div>`;
  }

  if (type === "smelt") {
    const steps = [
      {
        t: "1. 备矿",
        d: "矿石很少能直接入炉。先要分选、破碎，去掉脉石与杂质，再备妥木炭与熔剂。没有这一步，炉温与炉渣无法被控制，后续熔炼只会把问题带进金属。",
        vis: "木刻示意：坑道、排水与备料器械——实业扩张的第一环。",
      },
      {
        t: "2. 鼓风熔炼",
        d: "装炉之后靠水力或风箱鼓风，把炉温推到金属可汇聚的区间。硫与脉石进入炉渣被撇出，液态金属在炉底与前床聚集——这是把「矿」改写成「可调度材料」的关键工序。",
        vis: "木刻示意：焙烧坑、炉群与烟道——鼓风把温度与杂质分开。",
      },
      {
        t: "3. 出金属",
        d: "出炉后浇入锭模，冷却脱模成锭。锭可进铸币厂，也可进铸炮与器械作坊——金属第一次成为可记账、可抵押、可跨城调配的产业底盘单元。",
        vis: "木刻示意：炉前作业——金属汇聚，准备成锭进入产业底盘。",
      },
    ];
    return `
      <div class="ledger-x" data-interact="smelt" data-step="0">
        <p class="ledger-x-label">工作流程 · 冶炼三步（阿格里科拉木刻）</p>
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
            <button type="button" class="btn" data-smelt-next>进入鼓风熔炼 →</button>
          </div>
        </div>
        <p class="ledger-x-note smelt-done" hidden>冶炼流程走完：金属进入可调度的产业底盘。可继续下一笔。</p>
      </div>`;
  }

  if (type === "antwerpMap") {
    const places = [
      {
        id: "port",
        label: "港区货栈",
        x: 24,
        y: 36,
        d: "斯海尔德河一侧的码头与货栈，是内陆货物出海、海外货物上岸的交接面。装卸节奏决定城市吞吐：没有港区，后面的交易所与汇票只是空转的纸面信用。吞吐本身，就是枢纽的第一张脸。",
      },
      {
        id: "bourse",
        label: "交易所",
        x: 51,
        y: 44,
        d: "商人在此比价、议汇、交换票据与消息。交易所把分散的买卖收成可被看见的舞台——价格、信誉与政局传闻，都在同一屋檐下被重新定价。它是现金与承诺相遇的房间。",
      },
    ];
    const billIcon = `<svg class="antwerp-tool-svg" viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 12h16M12 17h16M12 22h12" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="28" cy="28" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M26.5 28h3M28 26.5v3" stroke="currentColor" stroke-width="1.2"/></svg>`;
    const letterIcon = `<svg class="antwerp-tool-svg" viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="10" width="28" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 12l14 10L34 12" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 26l6-4M30 26l-6-4" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/></svg>`;
    const tools = [
      {
        id: "bill",
        label: "汇票网络",
        icon: billIcon,
        tag: "跨城信用",
        d: "汇票不是某栋楼，而是可携带的承诺：不必随身运整箱现金，信用可以提前到达下一座城市。安特卫普成为枢纽，不只因为船多，更因为这类票据把北海与内陆账房缝成一张网。",
      },
      {
        id: "news",
        label: "行情书信",
        icon: letterIcon,
        tag: "情报通道",
        d: "书信不是地图上的地标，而是流动的行情与政局评估。谁先读到可靠消息，谁就能在兑换与放贷里抢到时间差——情报本身，也是可计价的资产。",
      },
    ];
    return `
      <div class="ledger-x ledger-x-map" data-interact="antwerpMap">
        <p class="ledger-x-label">交互 · 地理落点 + 跨城信用工具</p>
        <div class="antwerp-stage" id="antwerp-stage">
          <img class="antwerp-map" src="/economy/antwerp_birdseye.jpg" alt="安特卫普 1572 鸟瞰图" draggable="false" />
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
              <li data-hub="${z.id}"><span class="flash-dot"></span><strong>${z.label}</strong><em>地理</em></li>`
              )
              .join("")}
          </ul>
        </div>
        <p class="antwerp-tools-label">信用工具（不落在地图坐标上）</p>
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
        <p class="hub-detail" data-hub-detail>先点地图上的港区/交易所，再点两张信用工具卡。</p>
        <p class="ledger-x-note">已确认 <span data-antwerp-n>0</span> / 4</p>
        <div class="antwerp-modal antwerp-modal-inline" data-antwerp-modal hidden>
          <h4 data-antwerp-title></h4>
          <p data-antwerp-body></p>
        </div>
      </div>`;
  }

  if (type === "trades") {
    const trades = [
      {
        t: "兑换",
        icon: "⇄",
        angle: -90,
        d: "不同货币与汇票的即时兑换，是跨城贸易的入口。账房要同时盯住成色、汇费与城际价差，才能把「地方钱」换成「路上钱」。没有兑换这一环，分行网络只是空架子。",
      },
      {
        t: "国际银行",
        icon: "▦",
        angle: -18,
        d: "多分行放贷与清算，把地方存款变成远程支付能力。美第奇与富格尔的力量，很大程度来自分行网络能否在正确的城市兑现承诺。一张名号，要能在多城同时被相信。",
      },
      {
        t: "保险",
        icon: "◈",
        angle: 54,
        d: "为船货与契约定价风险，让远距生意算得过来。保险把海难与违约从个人厄运，改写成可分摊的成本条目。风险一旦可计价，资本才敢把触角伸得更远。",
      },
      {
        t: "实业",
        icon: "⚒",
        angle: 126,
        d: "矿冶、纺织等实业承接信贷，也产出可抵押的现金流。没有实业底盘，大额政治贷很难持续滚动。利息最终要靠炉火与织机来偿还，而不是靠口号。",
      },
      {
        t: "地产",
        icon: "⌂",
        angle: 198,
        d: "城乡地产既是资产配置，也是信用的抵押物。商人—银行家的资产负债表里，常同时写着利息与地租。地契让纸面承诺落到可扣押的实物上。",
      },
    ];
    return `
      <div class="ledger-x" data-interact="trades">
        <p class="ledger-x-label">交互 · 账房罗盘（点印记展开）</p>
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
            <span data-trade-core-name>点周围印记</span>
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
        <p class="trade-detail" data-trade-detail>点击罗盘上的行业印记，阅读展开介绍。</p>
      </div>`;
  }

  if (type === "chain") {
    const nodes = [
      {
        t: "商人发料",
        icon: "发",
        d: "商人预付原料与规格，锁定交期与验收标准。资本先出手，把农户编进订单节奏：谁发料，谁就暂时握住整条链的节拍器。",
      },
      {
        t: "家内加工",
        icon: "织",
        d: "农户用家内时间加工，工具多属自家。资本省下厂房与常雇工，却把质量与工期风险推到家户——闲时劳动被写成可计算的工时。",
      },
      {
        t: "成品交回",
        icon: "验",
        d: "成品验收、结算尾款；延误与瑕疵在此计价。议价权往往不在农户一边：交回这一刻，决定谁承担损耗、谁拿走差额。",
      },
      {
        t: "市集出口",
        icon: "市",
        d: "进入市集或出口通道，资本完成一轮周转，再准备下一包原料。回路合上，信用与货物一起离开村庄，朝更大的价格场走去。",
      },
    ];
    return `
      <div class="ledger-x" data-interact="chain">
        <p class="ledger-x-label">线轴回路 · 按序绕行点亮</p>
        <p class="chain-guide">引导：从左侧「商人发料」起，按箭头顺时针依次点亮四节点；中心会显示当前步骤。全圈点亮后，下方展开利弊对照。</p>
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
            <text x="140" y="134" text-anchor="middle" class="chain-hub-icon" data-chain-hub-icon>轴</text>
            <text x="140" y="152" text-anchor="middle" class="chain-hub-sub" data-chain-hub-name>出差制</text>
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
        <p class="chain-detail" data-chain-detail>下一步：点「商人发料」开始绕行。</p>
        <div class="chain-proscons" hidden data-chain-done>
          <div class="chain-pro">
            <h4>利</h4>
            <ul>
              <li>资本无需置办全部工具与厂房，扩张可以更快铺开；订单来了就发包，订单少了就收缩。</li>
              <li>把农村闲时劳动编进货币链条，家内时间变成可计价的工时单位。</li>
              <li>产量与交期可按市集与出口订单调节，资本握住节拍，而不必日日盯着每一台织机。</li>
            </ul>
          </div>
          <div class="chain-con">
            <h4>弊</h4>
            <ul>
              <li>农户议价弱，质量与工期风险被外推到家户；验收标准往往由发料方单方面解释。</li>
              <li>依赖中间商传递规格与消息，信息不对称让利润差落在链条缝隙里。</li>
              <li>危机时订单骤停，家内劳动首当其冲：没有厂房可关，只有停活与空闲的织具。</li>
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
        title: "选侯现金主通道",
        src: "约为富格尔承担份额中，直接用于打通关键选侯现金与承诺的大宗。展览拆成便于点选的整数档，便于看见「主通道」如何先到位。没有这一档，后面的加码只是空话。",
      },
      {
        id: "b",
        amt: 200000,
        title: "竞标对冲与加码",
        src: "面对法兰西等对手加码，哈布斯堡一侧需要持续输血。此档对应「把票决拖过危险区」的加码部分，是用现金买来的政治时间。",
      },
      {
        id: "c",
        amt: 143385,
        title: "余额凑齐 543,385",
        src: "细数常见写作约 543,385（约占总额约 85 万的三分之二；其余韦尔瑟等分摊）。本档补齐零头，锁住富格尔份额，使私人信贷写成完整的一笔帝选账。",
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
        <p class="ledger-x-label">弗罗林点亮 · 三钱袋分支</p>
        <p class="ledger-x-note">点钱袋点亮金币；说明出现在袋下。</p>
        <div class="florin-stack">
          <div class="florin-coin-wrap" aria-label="可点亮的弗罗林">
            <div class="florin-photo" data-florin-photo>
              <img class="florin-photo-base" src="/economy/florin_coin.jpg" alt="" />
              <div class="florin-photo-lit" data-florin-lit style="--lit:0%">
                <img src="/economy/florin_coin.jpg" alt="弗罗林金币点亮" />
              </div>
            </div>
            <p class="florin-sum">已点亮 <strong data-florin-sum>0</strong> / 543,385</p>
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
        <p class="florin-done" hidden>三袋齐亮：整枚弗罗林点亮，富格尔帝选份额入账。</p>
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
    return `<p class="ledger-empty">过账推进后，左侧会逐笔出现条目；已出现的可点回看。</p>`;
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
    <p class="ledger-side-hint">随过账一步步出现；点已出现的条目可回看。</p>
  `;
}

function ledgerRightHtml(entry, phase, chapterDone, allDone) {
  if (allDone) {
    return `
      <div class="ledger-finale">
        <p class="ledger-finale-kicker">总账锁册</p>
        <h2 class="ledger-finale-title">Private credit, public power</h2>
        <p class="ledger-finale-text">
          底盘、账房与帝选三册已齐。私人信贷在此不再是市集噪音，而是公共权力得以运转的现金条件——下一站，军事厅会继续追问谁付得起有组织的武力。
        </p>
        <figure class="ledger-finale-fig">
          <img src="/economy/macro_empire.jpg" alt="查理五世宫廷寓意浮雕：私人信贷进入帝国政治的宏观场面" />
        </figure>
        <div class="hall-nav">
          <a class="btn" href="#/military">下一站 · 军事厅 →</a>
          <a class="btn btn-ghost" href="#/politics">← 政治厅</a>
        </div>
      </div>
    `;
  }

  if (chapterDone) {
    const next = economyThemes[entry.chapterIndex + 1];
    return `
      <div class="ledger-turn">
        <p class="ledger-turn-kicker">${entry.pageLabel} · 三笔已齐</p>
        <h2 class="ledger-turn-title">开新页</h2>
        <p class="ledger-turn-text">本章分录已盖章入账。翻到${next ? next.pageLabel : "下一册"}，继续过账。</p>
        <button type="button" class="btn" data-ledger-action="turn">开新页 →</button>
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
          <p class="ledger-ref-lg">${entry.ref} · 已入账</p>
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
        <button type="button" class="btn" data-ledger-action="next"${needsGate ? " disabled" : ""}>继续下一笔 →</button>
      </div>
    `;
  }

  if (phase === "stamp") {
    return `
      <div class="ledger-voucher is-posted">
        <p class="ledger-voucher-label">已过账 · 待盖章</p>
        <p class="ledger-journal-line is-write">${entry.journal}</p>
        <p class="ledger-voucher-text">${entry.voucher}</p>
        <div class="ledger-stamp-row">
          <span class="ledger-seal" aria-hidden="true">${entry.seal}</span>
          <button type="button" class="btn" data-ledger-action="stamp">盖章确认</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="ledger-voucher">
      <p class="ledger-voucher-label">待过账单 · ${entry.pageLabel}</p>
      <h2 class="ledger-voucher-title">${entry.title}</h2>
      <p class="ledger-voucher-text">${entry.voucher}</p>
      <p class="ledger-hint">过账后分录写入左页；盖章后展开本帖正文与交互。</p>
      <button type="button" class="btn" data-ledger-action="post">过账入册</button>
    </div>
  `;
}

export function economyView() {
  return `
    <main class="screen economy" aria-label="经济厅">
      <header class="econ-mast">
        <a class="link-back" href="#/gate">← 大门</a>
        <p class="econ-mast-label">Ledger · 总账过账</p>
        <h1 class="display">扩张的引擎</h1>
        <p class="hall-kicker">九笔贯穿全厅 · 过账 → 盖章 → 开新页</p>
        <p class="hall-intro">
          整厅是一本总账：右页待办，左页流水；盖章后展开正文与专项交互。册与册之间为书卷翻页。
        </p>
      </header>

      <div class="ledger-progress-bar" aria-live="polite">
        <p id="ledger-progress">已入账 0 / 9</p>
        <ol class="ledger-chapter-dots" id="ledger-chapter-dots">
          ${economyThemes
            .map(
              (t, i) =>
                `<li data-chapter="${i}" class="${i === 0 ? "is-current" : ""}"><span>${["I", "II", "III"][i]}</span>${t.title}</li>`
            )
            .join("")}
        </ol>
      </div>

      <div class="ledger-book" id="ledger-book" aria-label="经济厅总账">
        <div class="ledger-spine" aria-hidden="true"></div>
        <div class="ledger-flip-sheet" aria-hidden="true"></div>
        <section class="ledger-page ledger-page-left">
          <header class="ledger-page-head">
            <p>章节目录 · 已出现可回看</p>
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
          <a class="btn btn-ghost" href="#/politics">← 政治厅</a>
          <a class="btn btn-ghost" href="#/gate">回大门</a>
        </div>
        <p class="credit">史实脊柱：尤金·赖斯、安东尼·格拉夫顿《现代欧洲史 01》· 第二章</p>
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
        "木刻示意：坑道、排水与备料器械——实业扩张的第一环。",
        "木刻示意：焙烧坑、炉群与烟道——鼓风把温度与杂质分开。",
        "木刻示意：炉前作业——金属汇聚，准备成锭进入产业底盘。",
      ];
      const labels = ["进入鼓风熔炼 →", "进入出锭工序 →", "完成"];
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
        if (btn) btn.textContent = labels[step] || "完成";
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
        if (detail) detail.textContent = `已确认：${label}（${seen.size}/4）`;
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
      const labels = ["商人发料", "家内加工", "成品交回", "市集出口"];
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
          if (hubIcon) hubIcon.textContent = btn.dataset.chainIcon || "轴";
          if (hubName) hubName.textContent = btn.dataset.chainName || "";
          i += 1;
          const next = box.querySelector(`.chain-bead[data-chain-i="${i}"]`);
          if (next) {
            next.disabled = false;
            next.classList.add("is-hint");
            if (detail && i < 4) {
              detail.textContent = `${btn.dataset.chainText || ""}\n→ 下一步：点「${labels[i]}」`;
            }
          }
          if (i >= 4) {
            if (detail) detail.textContent = "全圈已点亮。下方对照利弊，然后可继续下一笔。";
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
        nextBtn.textContent = "回到当前进度 →";
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
      progressEl.textContent = "总账锁册 · 9 / 9";
    } else if (freeBrowse) {
      progressEl.textContent = `回看 ${entry?.ref || "—"} · 主线进度 ${questRef}（已入账 ${postedCount}/9）`;
    } else {
      progressEl.textContent = `已入账 ${postedCount} / 9 · 当前 ${entry?.ref || "—"}`;
    }

    if (phase === "finale") {
      freeBrowse = false;
      pageLabelEl.textContent = "锁册";
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
        nextBtn.textContent = "回到当前进度 →";
        nextBtn.disabled = false;
        nextBtn.dataset.ledgerAction = "resume";
      } else if (nextBtn && viewingId !== entry.id) {
        nextBtn.textContent = "回到当前待办 →";
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
