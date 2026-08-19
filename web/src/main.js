import { economyView, bindEconomy } from "./economy-ledger.js";
import { militaryGameBayHtml, bindMilitaryGame } from "./military-game.js";
import { mountLedgerGame } from "./military-ledger.js";

/**
 * 政治厅：右侧三点展签切换下方读墙。
 * 文案语气贴近 Rice & Grafton 卷一叙事；页面不标 § 出处。
 * 配图：本地 assets/politics（博物馆开放资源 / WGA）。
 */

const themes = [
  {
    id: "empire",
    title: "同一家族，多块领地",
    teaser:
      "成片点亮的西班牙、低地、意大利与奥地利核心，同属一人名下：西班牙的查理一世，也是神圣罗马帝国的查理五世。",
    slides: [
      {
        title: "欧洲棋盘：同一君主，多套制度",
        paras: [
          "若只把「早期现代国家」理解成后来教科书里的单一民族国家，查理一世的地图几乎无法读懂。他于 1500 年生于低地根特，母系连着卡斯蒂利亚与阿拉贡，父系连着勃艮第遗产与哈布斯堡奥地利；少年时已在尼德兰贵族礼仪中长大，却又必须学会用西班牙语与卡斯蒂利亚人说话。1516 年起，他在西班牙以查理一世之名继承天主教双王留下的诸王国：卡斯蒂利亚、阿拉贡，以及那不勒斯、西西里等阿拉贡在地中海的王冠。对西班牙臣民，他首先是「他们的国王」——要尊重各地议会（Cortes）、城市特权与财政习惯，而不能把整块伊比利亚当成一块可随意涂色的版图。",
          "同一张脸，稍后又在法兰克福的选侯票决中成为神圣罗马帝国的查理五世。把这些名字叠在一起，你会发现：把它们焊接起来的，不是共同语言或共同民族感情，而是家族继承、联姻契约，以及一台不断奔走的朝廷。他每到一处，都必须表现得像「只属于这里的国王」——同一主权，分属多套法律、议会与习惯。因此，地图上的阴影与线纹不是征服进度条，而是一次视觉上的点名：西班牙诸王国、低地、意大利地带、奥地利核心，各保制度，却共戴一人。成片字幕 One family, many territories，说的正是这种复合君主国：所谓「查理的帝国」，从来不是一块涂成同色的大陆，而是一张被家族名号勉强缝合的欧洲棋盘。",
        ],
        src: "/politics/map_empire.png",
        alt: "查理五世欧洲复合领地示意地图",
        caption: "欧洲复合领地总图",
      },
      {
        title: "坐像中的两张面孔",
        paras: [
          "左边是提香画室一系的坐像：黑衣、金羊毛项链、略显疲倦的侧脸——更接近西班牙宫廷所熟悉的「查理一世」形象，不以甲胄夸示武力，而以沉静与礼仪示人。右边是后世刻成的「皇帝」像：月桂、甲胄、双鹰与战利品环绕，把同一个人写成罗马式凯旋的查理五世。展览把两张图并置，不是说历史上真有两个查理，而是要让观众看见：双重名号要求同一个人用两套政治语言说话。",
          "对卡斯蒂利亚臣民，他是要谈判财政需索、安抚城市特权的国王；对神罗选侯与德意志诸侯，他是要主持帝国议会、应付宗教裂痕的皇帝。肖像本身就是早期现代政治的媒介：它让「最高权威」可以被悬挂、被复制、被看见。复合帝国最终仍要落到一张会衰老、会决断、也会被反抗的脸上——左边是治理的面孔，右边是帝国名义的面孔。",
        ],
        caption: "并置对照：同一人，两套政治语言",
        images: [
          {
            src: "/politics/charles_i_spain_seated.jpg",
            alt: "提香画室一系：西班牙查理一世坐像",
            label: "西班牙的查理一世",
          },
          {
            src: "/politics/charles_v_emperor.jpg",
            alt: "查理五世皇帝像版画：月桂、甲胄与双鹰",
            label: "神罗的查理五世",
          },
        ],
      },
      {
        title: "帝国如何聚拢",
        paras: [
          "这张「帝国」并非一次征服画出来的，而是几代联姻与继承叠出来的。母系：胡安娜与腓力联姻之后，卡斯蒂利亚—阿拉贡的王冠、人口与税收，连同阿拉贡在那不勒斯、西西里的地中海航线，落到查理名下，使他在西班牙成为查理一世。父系：勃艮第公爵遗产带来尼德兰诸省的城市、港口与特权网络；哈布斯堡奥地利世袭领地则把他钉在中欧边疆。没有伊比利亚这块基座，低地与意大利战场很难被同一只手同时握住；但基座也不等于全部——根特长大的君主，始终带着低地政治的记忆。",
          "1519 年的帝选，把家族遗产抬成「基督教世界领导权」的公开竞争：选侯票决需要金钱与承诺，富格尔信贷因此直接进入最高政治。当选之后，他才同时拥有西班牙国王与神圣罗马帝国皇帝两套名号。把伊比利亚从地图上单独切开，是为了提醒获得顺序：先有可动员的西班牙资源，再有帝国名义；而米兰等地的争夺、与瓦卢瓦和奥斯曼的对峙，都建立在这套已经聚拢、却从未真正合一的复合结构之上。",
        ],
        src: "/politics/piece_iberia.png",
        alt: "伊比利亚领地切块",
        caption: "继承、联姻与 1519 帝选",
      },
    ],
  },
  {
    id: "bodin",
    title: "博丹的主权",
    teaser:
      "主权被说成最高、绝对且持久；可立法、可废法。但它并非无法无天——神法与自然法仍勒住君主的缰绳。",
    slides: [
      {
        title: "可被看见的「最高」",
        paras: [
          "16 世纪的西欧君主喜欢自称「不受他人之令」。法国、西班牙与英格兰的宫廷法学家，纷纷从罗马法传统里打捞出「君主所悦即具法律效力」一类的说法。让·博丹在宗教战争撕裂的法兰西写出《共和六书》，把主权整理成近乎几何学的定义：它是共同体中最高、绝对且持久的权力，核心权能是立法，并且可以废改既有法律。对展览而言，这句话的用处不在背诵定义，而在提醒观众：当征税、铸币、宣战、终审与常备武力从封建碎片中收回时，君主需要一套能够被看见、被论证的「最高性」。",
          "1508 年布尔克迈尔为马克西米利安一世所作马上像，旗面与马衣上的双头鹰，正是这种视觉语言。鹰徽、纹章与马上英姿，把抽象的帝国名义画进可流传的图像。查理一世继承的，不只是土地与头衔，还有一套把「帝国」写进旗帜的宣传传统——它与西班牙王冠叠在同一人身上，使「最高」既能被法理定义，也能被臣民看见。",
        ],
        src: "/politics/hre_maximilian.jpg",
        alt: "马克西米利安一世马上像木刻，旗上双头鹰",
        caption: "双头鹰与帝国名义",
      },
      {
        title: "王意如何落到地方",
        paras: [
          "主权若只停留在法谚与纹章上，仍是纸面的最高。卡斯蒂利亚的 corregidor 是国王任命并发薪的地方代理人：任期有限，回避本籍，禁止与地方派系勾结，卸任还要接受考绩。英格兰的治安法官在功能上可与之对照——都是把王意送进城市与郡的管道。代理人越深入地方，君主的「最高」才越像真实权力，而不只是宫廷里的宣言。",
          "伊莎贝拉时代留下的时辰书提醒我们：西班牙王权早有自己的书写与礼仪传统，权威并不从查理一世才开始发明。到他治下，代理人越深入，摩擦也越响。1520–1521 年卡斯蒂利亚公社起义，正是城市与贵族对「外来朝廷」与财政需索的激烈反弹。起义最终被压下，却留下清晰线索：复合帝国的主权主张，从来不是在真空里颁布的法令，而是一场持续的谈判、监视与镇压。",
        ],
        src: "/politics/spain_isabella_hours.jpg",
        alt: "卡斯蒂利亚伊莎贝拉时辰书手稿页",
        caption: "书写、礼仪与地方管道",
      },
      {
        title: "绝对，却不是空白支票",
        paras: [
          "博丹同时写下那道常被忽略的边界：绝对，并不等于为所欲为。神法与自然法仍约束君主；他甚至举西班牙国王与议会（Cortes）之间的约定为例——为换取税收而承诺纠正弊政的契约，在他看来具有约束力。换言之，早期现代的主权叙事若删掉这道宗教与自然法的缰绳，就会滑向后世漫画式的暴君肖像。",
          "这面纹章圆窗把「最高」画成王冠、宝球与双头鹰，外圈却密布各地盾徽：权力要被看见，也必须落到一块块具体领地上。复合帝国的君主既需要调度多块领地的「最高」，也必须在各地议会、城市特权与宗教舆论之间折冲。本厅坚持把边界写进叙事，是为了避免简笔画：主权公式对着真人与真领地时，才显出它的分量与限度。",
        ],
        src: "/politics/heraldic_zurich.jpg",
        alt: "纹章圆窗：王冠、双头鹰与环绕的各地盾徽",
        caption: "最高可见，却仍落到各地盾徽上",
      },
    ],
  },
  {
    id: "board",
    title: "1494 之后的欧洲棋盘",
    teaser:
      "查理八世一脚踏进意大利，半岛的邦联式自主被拖进更大的欧洲战争；此后半个世纪，哈布斯堡、瓦卢瓦与奥斯曼轮番坐庄。",
    slides: [
      {
        title: "会用炮的王权战争",
        paras: [
          "1494 年，法王查理八世率军翻越阿尔卑斯，宣称对那不勒斯的继承权。对意大利各邦而言，这不只是一次外敌入侵，更是一次结构断裂：文艺复兴时期彼此制衡的半岛政治，被强行并入法兰西、西班牙与帝国之间的大博弈。米兰、威尼斯、教皇国与佛罗伦萨发现，自己再也无法把战争关在「意大利事务」的门内。从这一年起，意大利变成欧洲主权国家互相试验火力、财政与同盟的露天舞台。",
          "约 1512–1516 年木刻所绘的南锡战役提醒我们：王权战争的远景里已出现火炮。当法军再次进入意大利时，半岛面对的正是这种会用炮的战争机器，而不再是邦联内部的旧式摩擦。火器、财政与常备军力，从此与王朝继承诉讼缠在一起，把「地方争端」抬升为欧洲级的棋局。",
        ],
        src: "/politics/italy_french_king_war.jpg",
        alt: "南锡战役木刻中的王权战争",
        caption: "火炮进入画面的时代",
      },
      {
        title: "低地：棋盘另一只手",
        paras: [
          "到了 1519–1559，棋盘上的主角换成查理五世、弗朗索瓦一世与苏莱曼。主轴有两条：哈布斯堡对瓦卢瓦，争夺意大利霸权与欧洲均势；哈布斯堡对奥斯曼，在中欧与地中海形成帝国级对峙。法国甚至可以与奥斯曼联手，从两侧挤压哈布斯堡——教派口号挡不住王朝利益的计算。1525 年帕维亚之战，弗朗索瓦一世被俘，是这条主轴上最戏剧性的一幕。",
          "安特卫普的天际线说明：低地城市的贸易、汇票与港口税收，是哈布斯堡把西班牙基座推上欧洲棋盘的另一只手。丢一块领地，就少一份征兵名册与信贷网络。读地图时若只盯着王冠与战场，容易漏掉城市天际线里那套更安静、却同样决定胜负的钱与货。",
        ],
        src: "/politics/low_antwerp.jpg",
        alt: "安特卫普圣母大教堂版画",
        caption: "城市、汇票与港口",
      },
      {
        title: "印刷把争论甩进政治",
        paras: [
          "读这盘棋，最容易犯的错，是用 19 世纪民族国家的词汇去命名 16 世纪的玩家。查理五世争的是家族遗产与基督教世界的领导权想象；弗朗索瓦一世争的是瓦卢瓦荣誉与意大利据点；苏莱曼争的是帝国边疆与地中海通道。联姻、继承、赎俘与停战条约，往往比「民族解放」更接近当事人的语言。成片里那些被点亮的领地，正是这盘棋的实体筹码。",
          "1521 年克拉纳赫的木刻对页，把教权争论做成可流通的图像：左边受嘲弄的基督，右边受朝拜的教皇。印刷术让争论离开讲坛，进入市集与酒馆。本厅不展开路德传记，只取一句旁支：改宗争端会迅速拖进领地政治与王朝结盟——图像战争，从来不只是神学辩论的插图。",
        ],
        src: "/politics/luther_print.jpg",
        alt: "克拉纳赫印刷木刻对页",
        caption: "图像战争的旁支提醒",
      },
    ],
  },
];

function route() {
  const hash = (location.hash || "#/").replace(/^#/, "") || "/";
  const path = hash.startsWith("/") ? hash : `/${hash}`;
  if (path.startsWith("/gate")) return "gate";
  if (path.startsWith("/politics")) return "politics";
  if (path.startsWith("/economy")) return "economy";
  if (path.startsWith("/military")) return "military";
  if (path.startsWith("/ledger-review")) return "ledger-review";
  if (path.startsWith("/end")) return "end";
  return "cover";
}

/** 图像版权总表（docs/图像版权总表.md）已验 14 张 · 结束页图注 */
const IMAGE_CREDITS = [
  {
    hall: "政治",
    title: "查理五世坐像",
    credit: "常归于提香，1548 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Titian_-_Portrait_of_Charles_V_Seated_-_WGA22964.jpg",
  },
  {
    hall: "政治",
    title: "神罗双头鹰纹章",
    credit: "矢量据约 16 世纪中样式 · CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Holy_Roman_Empire_Arms-double_head.svg",
  },
  {
    hall: "政治",
    title: "《教会的巴比伦之囚》封面",
    credit: "Luther, 1520 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Babylonian_captivity_of_the_church.jpg",
  },
  {
    hall: "政治",
    title: "哈布斯堡领地图（1547）",
    credit: "Cambridge Modern History Atlas, 1912 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Habsburg_Map_1547.jpg",
  },
  {
    hall: "经济",
    title: "富格尔肖像",
    credit: "Dürer, c.1519 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_080.jpg",
  },
  {
    hall: "经济",
    title: "安特卫普鸟瞰",
    credit: "Braun & Hogenberg, 1572 · PD（对照）",
    href: "https://commons.wikimedia.org/wiki/File:City_of_Antwerp,_1572.jpg",
  },
  {
    hall: "经济",
    title: "《论矿冶》抽水泵",
    credit: "Agricola 1556 / Wellcome · CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Agricola,_De_re_metallica_libri_XII._Wellcome_L0006609.jpg",
  },
  {
    hall: "经济",
    title: "坎蒂诺平面图",
    credit: "葡萄牙, 1502 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Cantino_planisphere_(1502).jpg",
  },
  {
    hall: "经济",
    title: "美第奇纹章",
    credit: "矢量据 16 世纪样式 · PD-ineligible",
    href: "https://commons.wikimedia.org/wiki/File:Medici_coat_of_arms.svg",
  },
  {
    hall: "军事",
    title: "卡尔文战役",
    credit: "Schilling, 1513 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Schlacht_an_der_Calven.jpg",
  },
  {
    hall: "军事",
    title: "火绳枪实物",
    credit: "c.1510；德意志国家博物馆 · CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Arquebus,_c._1510,_Germanisches_Nationalmuseum.jpg",
  },
  {
    hall: "军事",
    title: "杜勒·格里特巨炮",
    credit: "器物 15 世纪前半；2014 摄影 · CC BY 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Dulle_Griet_Gent.JPG",
  },
  {
    hall: "军事",
    title: "马克西米利安甲",
    credit: "德, c.1510–1520；Walters · 器物 PD；照片 CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:German_-_Maximilian_Armor_-_Walters_51584.jpg",
  },
  {
    hall: "军事",
    title: "莫拉特相关场面",
    credit: "Schilling, 1513 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Schilling_battle_morat.jpg",
  },
];

function endView() {
  const rows = IMAGE_CREDITS.map(
    (item) => `
      <li class="end-credit-row">
        <span class="end-credit-hall">${item.hall}</span>
        <a class="end-credit-title" href="${item.href}" target="_blank" rel="noopener noreferrer">${item.title}</a>
        <span class="end-credit-meta">${item.credit}</span>
      </li>`
  ).join("");

  return `
    <main class="screen end" aria-label="展览结束">
      <p class="eyebrow">Closing · 离开展览</p>
      <h1 class="display">带走的问题</h1>
      <p class="lede end-question">
        当武力、金钱与立法权同时集中到君主手里，普通人还剩下什么谈判空间？
      </p>

      <section class="end-block" aria-labelledby="end-thanks-title">
        <h2 id="end-thanks-title" class="end-block-title">致谢</h2>
        <p class="end-block-text">
          史实脊柱：Rice &amp; Grafton,
          <em>The Foundations of Early Modern Europe, 1460–1559</em>
          （中信《现代欧洲史》卷一）。本展只深挖卷一时段，不外推全书。
        </p>
        <p class="end-block-text">
          政治厅主视觉为网页探光交互；TouchDesigner 工程仍可用于当面实时演示。
          军事厅含对撞局与「王国的账本」两层短交互，不以杀敌计分。
        </p>
      </section>

      <section class="end-block" aria-labelledby="end-images-title">
        <h2 id="end-images-title" class="end-block-title">图像与署名</h2>
        <p class="end-block-text">
          下列为已验链的 Wikimedia Commons 主图（须署名许可已标在出处栏）。
          军事小游戏立绘为展览自制示意图，非历史原件。
        </p>
        <ul class="end-credit-list">
          ${rows}
        </ul>
      </section>

      <div class="actions end-actions">
        <a class="btn" href="#/gate">回大门</a>
        <a class="btn btn-ghost" href="#/">回封面</a>
      </div>
      <p class="credit">早期现代欧洲的建立 · 1460–1559 · 线上短展</p>
    </main>
  `;
}

function coverView() {
  return `
    <main class="screen cover" aria-label="展览封面">
      <p class="eyebrow">Online Exhibition</p>
      <h1 class="display">早期现代欧洲的建立 · 1460–1559</h1>
      <p class="lede">印刷、火药、商人资本与主权国家同时到场——一场可在一刻钟内走完的线上短展。</p>
      <div class="actions">
        <a class="btn" href="#/gate">进入大门</a>
      </div>
      <p class="credit">尤金·赖斯、安东尼·格拉夫顿《现代欧洲史 01》</p>
    </main>
  `;
}

function gateView() {
  return `
    <main class="screen gate" aria-label="展览大门">
      <p class="eyebrow">Gate · 三厅入口</p>
      <h1 class="display">选择一厅进入</h1>
      <div class="doors">
        <a class="door" href="#/politics">
          <h2>政治厅</h2>
          <p>查理五世（查理一世）的复合帝国：主权如何在西班牙基座与多块领地上被「看见」</p>
          <span class="meta">约 3–4 分钟</span>
        </a>
        <a class="door" href="#/economy">
          <h2>经济厅</h2>
          <p>商人—银行家如何把矿冶与信贷接到帝选</p>
          <span class="meta">约 3–4 分钟</span>
        </a>
        <a class="door is-featured" href="#/military">
          <h2>军事厅</h2>
          <p>火药与步兵如何让战争归国王</p>
          <span class="meta">约 3–4 分钟 · 对撞 + 账本</span>
        </a>
      </div>
      <p class="gate-end-link">
        <a class="link-back" href="#/end">三厅看完了？→ 结束页 · 致谢与图注</a>
      </p>
    </main>
  `;
}


function mediaHtml(slide) {
  if (Array.isArray(slide.images) && slide.images.length) {
    return `
      <div class="wall-slide-compare" role="group" aria-label="双像对照">
        ${slide.images
          .map(
            (img) => `
          <figure class="wall-compare-item">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" />
            <figcaption>${img.label}</figcaption>
          </figure>`
          )
          .join("")}
      </div>
    `;
  }
  const fallbackAttr = slide.fallback
    ? ` onerror="this.onerror=null;this.src='${slide.fallback}'"`
    : "";
  return `
    <figure class="wall-slide-media">
      <img src="${slide.src}" alt="${slide.alt}" loading="lazy"${fallbackAttr} />
    </figure>
  `;
}

function slideHtml(slide, index, total, timeline) {
  const compareClass = Array.isArray(slide.images) && slide.images.length > 1 ? " is-compare" : "";
  const line =
    timeline ||
    slide.timeline ||
    "1460 · 1494 入意 · 1519 查理五世当选 · 1559 收束";
  return `
    <article class="wall-slide${index === 0 ? " is-active" : ""}${compareClass}" data-slide="${index}" ${index === 0 ? "" : "hidden"}>
      <div class="wall-slide-top">
        <div class="wall-head">
          <h2 class="wall-title">${slide.title}</h2>
          <p class="timeline">${line}</p>
        </div>
        <div class="wall-prose">
          ${slide.paras.map((p) => `<p>${p}</p>`).join("")}
        </div>
      </div>
      <div class="wall-slide-bottom">
        <div class="wall-slide-copy">
          <p class="wall-slide-index">${index + 1} / ${total}</p>
          <p class="wall-slide-text">${slide.caption}</p>
        </div>
        ${mediaHtml(slide)}
      </div>
    </article>
  `;
}


function wallHtml(theme) {
  const slides = theme.slides
    .map((slide, i) => slideHtml(slide, i, theme.slides.length, theme.timeline))
    .join("");
  return `
    <div class="wall-carousel" data-index="0">
      <div class="wall-carousel-viewport">
        ${slides}
      </div>
      <div class="wall-carousel-nav">
        <button type="button" class="wall-nav-btn" data-dir="-1" aria-label="上一张">‹</button>
        <div class="wall-dots" role="tablist" aria-label="读墙切换">
          ${theme.slides
            .map(
              (_, i) =>
                `<button type="button" class="wall-dot${i === 0 ? " is-active" : ""}" data-goto="${i}" aria-label="第 ${i + 1} 屏"></button>`
            )
            .join("")}
        </div>
        <button type="button" class="wall-nav-btn" data-dir="1" aria-label="下一张">›</button>
      </div>
      <p class="wall-carousel-hint">左右滑动：标题、正文与配图整屏切换</p>
    </div>
  `;
}

function setCarouselIndex(carousel, next) {
  const slides = [...carousel.querySelectorAll(".wall-slide")];
  if (!slides.length) return;
  const total = slides.length;
  const index = ((next % total) + total) % total;
  carousel.dataset.index = String(index);
  slides.forEach((slide, i) => {
    const on = i === index;
    slide.classList.toggle("is-active", on);
    if (on) slide.removeAttribute("hidden");
    else slide.setAttribute("hidden", "");
  });
  carousel.querySelectorAll(".wall-dot").forEach((dot, i) => {
    dot.classList.toggle("is-active", i === index);
  });
}

function bindCarousel(wall) {
  const carousel = wall.querySelector(".wall-carousel");
  if (!carousel) return;

  carousel.querySelectorAll(".wall-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = Number(btn.dataset.dir || 0);
      const cur = Number(carousel.dataset.index || 0);
      setCarouselIndex(carousel, cur + dir);
    });
  });

  carousel.querySelectorAll(".wall-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      setCarouselIndex(carousel, Number(dot.dataset.goto || 0));
    });
  });

  let startX = 0;
  let tracking = false;
  const viewport = carousel.querySelector(".wall-carousel-viewport");
  if (!viewport) return;

  const onStart = (x) => {
    tracking = true;
    startX = x;
  };
  const onEnd = (x) => {
    if (!tracking) return;
    tracking = false;
    const dx = x - startX;
    if (Math.abs(dx) < 40) return;
    const cur = Number(carousel.dataset.index || 0);
    setCarouselIndex(carousel, cur + (dx < 0 ? 1 : -1));
  };

  viewport.addEventListener("touchstart", (e) => onStart(e.changedTouches[0].clientX), {
    passive: true,
  });
  viewport.addEventListener("touchend", (e) => onEnd(e.changedTouches[0].clientX), {
    passive: true,
  });
  viewport.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") onStart(e.clientX);
  });
  viewport.addEventListener("pointerup", (e) => {
    if (e.pointerType === "mouse") onEnd(e.clientX);
  });
}

function bindPolitics(root) {
  const wall = root.querySelector("#reading-wall");
  if (!wall) return;
  bindCarousel(wall);
  bindEmpireFlash(root);

  root.querySelectorAll(".caption").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.theme;
      const theme = themes.find((t) => t.id === id);
      if (!theme) return;

      root.querySelectorAll(".caption").forEach((other) => {
        const on = other === btn;
        other.classList.toggle("is-open", on);
        other.setAttribute("aria-pressed", on ? "true" : "false");
        const mark = other.querySelector(".caption-mark");
        if (mark) mark.textContent = on ? "●" : "○";
      });

      wall.innerHTML = wallHtml(theme);
      bindCarousel(wall);
      wall.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/** 政治厅探光：四领地卡片文案（基本情况 + 查理如何得到） */
const empireCards = {
  iberia: {
    title: "伊比利亚：卡斯蒂利亚—阿拉贡基座",
    about:
      "这里是西班牙诸王国的核心：卡斯蒂利亚提供人口与税收，阿拉贡连接地中海航线与意大利据点。它不是一块涂成同色的「民族国家」，而是多套法律、议会（Cortes）与习惯叠在同一君主名下。",
    how:
      "查理通过母系继承进入西班牙：外祖母伊莎贝拉与外祖父斐迪南联姻之后，胡安娜一系把卡斯蒂利亚与阿拉贡的王冠传到他手里。他在此称西班牙的查理一世——先要学会用当地语言与制度做「只属于这里的国王」。",
  },
  low: {
    title: "低地：城市、港口与勃艮第遗产",
    about:
      "尼德兰诸省城市密集，安特卫普一带的贸易、汇票与港口税收，是把西班牙基座推上欧洲棋盘的另一只手。城市特权牢固，君主不能把这里当成随便征税的空白纸。",
    how:
      "这块领地主要来自父系：腓力带来的勃艮第公爵遗产。查理在根特长大，对低地礼仪与城市谈判并不陌生；日后他调兵筹饷，也常常要回到这张城市网络上来。",
  },
  italy: {
    title: "意大利：那不勒斯、西西里与半岛棋局",
    about:
      "那不勒斯与西西里是阿拉贡旧王冠在半岛的延伸；米兰等地则把哈布斯堡拖进与瓦卢瓦争霸的露天舞台。意大利不再只是「半岛内部事务」，而成了欧洲王权试验火力与财政的棋盘。",
    how:
      "南意王冠多随阿拉贡继承落到查理名下；北意据点则更多靠战争、联姻与条约争夺。对展览而言，重点是：他不是「征服了意大利」一笔勾销，而是在多块意大利领地上分别做当地的君主与当事人。",
  },
  austria: {
    title: "奥地利核心：哈布斯堡世袭与帝选门口",
    about:
      "奥地利世袭领地是家族在中欧的老家底，也是神圣罗马帝国政治的入口。维也纳一带提醒观众：同一张脸既要应付西班牙议会，也要应付帝国选侯与德意志诸侯。",
    how:
      "这块来自祖父马克西米利安一世一系的哈布斯堡继承。1519 年帝选之后，他才同时成为神罗的查理五世——帝国名义叠在西班牙王冠之上，复合结构至此完整。",
  },
};

/** 政治厅：鼠标手电筒 + 四领地打卡（弹窗确认）→ 标题解锁 */
function bindEmpireFlash(root) {
  const stage = root.querySelector("#empire-flash");
  const modal = root.querySelector("#empire-modal");
  if (!stage || !modal) return;

  const lit = stage.querySelector(".flash-lit");
  const title = stage.querySelector(".flash-title");
  const progress = stage.querySelector("#flash-progress");
  const doneNote = stage.querySelector("#flash-done");
  const modalTitle = modal.querySelector("#empire-modal-title");
  const modalAbout = modal.querySelector("#empire-modal-about");
  const modalHow = modal.querySelector("#empire-modal-how");
  const visited = new Set();
  let unlocked = false;
  let modalOpen = false;
  let pendingId = null;

  const targets = [
    { id: "iberia", nx: 0.179, ny: 0.739, r: 0.095 },
    { id: "low", nx: 0.342, ny: 0.333, r: 0.08 },
    { id: "italy", nx: 0.454, ny: 0.743, r: 0.1 },
    { id: "austria", nx: 0.487, ny: 0.443, r: 0.09 },
  ];

  const refreshProgress = () => {
    progress.textContent = `已确认 ${visited.size} / ${targets.length}`;
  };

  const tryUnlockTitle = () => {
    if (unlocked || visited.size < targets.length) return;
    unlocked = true;
    title.hidden = false;
    window.setTimeout(() => title.classList.add("is-on"), 280);
    doneNote.hidden = false;
    stage.classList.add("is-complete");
  };

  const openCard = (id) => {
    const card = empireCards[id];
    if (!card || modalOpen || visited.has(id)) return;
    modalOpen = true;
    pendingId = id;
    modalTitle.textContent = card.title;
    modalAbout.textContent = card.about;
    modalHow.textContent = card.how;
    modal.hidden = false;
    stage.classList.add("is-paused");
    modal.querySelector(".empire-modal-confirm")?.focus();
  };

  const closeCard = (confirmed) => {
    if (!modalOpen) return;
    const id = pendingId;
    modalOpen = false;
    pendingId = null;
    modal.hidden = true;
    stage.classList.remove("is-paused");

    if (confirmed && id) {
      visited.add(id);
      const item = stage.querySelector(`.flash-legend li[data-zone="${id}"]`);
      if (item) item.classList.add("is-found");
      refreshProgress();
      tryUnlockTitle();
    }
  };

  modal.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      // 叉号与确认都算读完，才能继续探下一处
      closeCard(true);
    });
  });

  const setLight = (clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    const nx = (clientX - rect.left) / rect.width;
    const ny = (clientY - rect.top) / rect.height;
    const cx = Math.max(0, Math.min(1, nx)) * 100;
    const cy = Math.max(0, Math.min(1, ny)) * 100;
    lit.style.setProperty(
      "--flash-mask",
      `radial-gradient(circle 8rem at ${cx}% ${cy}%, #000 0%, #000 38%, transparent 72%)`
    );

    if (modalOpen || nx < 0 || ny < 0 || nx > 1 || ny > 1) return;
    targets.forEach((t) => {
      if (visited.has(t.id)) return;
      const dx = nx - t.nx;
      const dy = ny - t.ny;
      if (dx * dx + dy * dy <= t.r * t.r) openCard(t.id);
    });
  };

  stage.addEventListener("pointermove", (e) => setLight(e.clientX, e.clientY), {
    passive: true,
  });
  stage.addEventListener(
    "pointerdown",
    (e) => {
      if (modalOpen) return;
      stage.setPointerCapture?.(e.pointerId);
      setLight(e.clientX, e.clientY);
    },
    { passive: true }
  );

  refreshProgress();

  const boot = () => {
    const rect = stage.getBoundingClientRect();
    if (rect.width < 1) return;
    const t = targets[0];
    lit.style.setProperty(
      "--flash-mask",
      `radial-gradient(circle 8rem at ${t.nx * 100}% ${t.ny * 100}%, #000 0%, #000 38%, transparent 72%)`
    );
  };

  if (lit.complete) boot();
  else lit.addEventListener("load", boot, { once: true });
}

function politicsView() {
  const marks = ["①", "②", "③"];
  const items = themes
    .map(
      (t, i) => `
      <button class="caption${i === 0 ? " is-open" : ""}" type="button" data-theme="${t.id}" aria-pressed="${i === 0}">
        <div class="caption-title">
          <span>${marks[i]} ${t.title}</span>
          <span class="caption-mark" aria-hidden="true">${i === 0 ? "●" : "○"}</span>
        </div>
        <p class="caption-summary">${t.teaser}</p>
      </button>
    `
    )
    .join("");

  const zones = [
    { id: "iberia", label: "伊比利亚", hint: "西南 · 西班牙基座", x: 17.9, y: 73.9 },
    { id: "low", label: "低地", hint: "北海沿岸 · 城市与港口", x: 34.2, y: 33.3 },
    { id: "italy", label: "意大利", hint: "半岛 · 那不勒斯一带", x: 45.4, y: 74.3 },
    { id: "austria", label: "奥地利核心", hint: "中欧 · 维也纳一带", x: 48.7, y: 44.3 },
  ];

  const zoneBtns = zones
    .map(
      (z) => `
      <button
        type="button"
        class="flash-zone"
        data-zone="${z.id}"
        style="left:${z.x}%;top:${z.y}%"
        aria-label="寻找：${z.label}"
        aria-pressed="false"
      ></button>`
    )
    .join("");

  const legend = zones
    .map(
      (z) => `
      <li data-zone="${z.id}">
        <span class="flash-dot" aria-hidden="true"></span>
        <span><strong>${z.label}</strong><em>${z.hint}</em></span>
      </li>`
    )
    .join("");

  return `
    <main class="screen politics" aria-label="政治厅">
      <div class="politics-top">
        <a class="link-back" href="#/gate">← 大门</a>
        <h1 class="display">看见主权</h1>
        <p class="hall-kicker">查理五世的复合帝国 · 西班牙的查理一世</p>
      </div>
      <p class="hall-intro">
        移动光标探亮四处领地；每照到一处会弹出说明，点「确认」后才能继续。四处都确认后，中央标题缓慢浮现。
      </p>
      <div class="politics-layout">
        <section>
          <div
            class="stage flash-stage"
            id="empire-flash"
            role="application"
            aria-label="复合帝国探光地图"
          >
            <img class="flash-dim" src="/politics/map_empire.png" alt="" draggable="false" />
            <img
              class="flash-lit"
              src="/politics/map_empire.png"
              alt="查理五世欧洲复合领地示意地图"
              draggable="false"
            />
            <div class="flash-zones" aria-hidden="true">${zoneBtns}</div>
            <p class="flash-title" hidden>One family, many territories</p>
            <div class="flash-hud">
              <p class="flash-guide">探光寻找 · 读完点确认</p>
              <ul class="flash-legend">${legend}</ul>
              <p class="flash-progress" id="flash-progress">已确认 0 / 4</p>
              <p class="flash-done" id="flash-done" hidden>四处领地已点名——同一家族，多块领地。</p>
            </div>
            <div
              class="empire-modal"
              id="empire-modal"
              hidden
              role="dialog"
              aria-modal="true"
              aria-labelledby="empire-modal-title"
            >
              <div class="empire-modal-card">
                <button type="button" class="empire-modal-x" data-close="x" aria-label="关闭">×</button>
                <h3 id="empire-modal-title" class="empire-modal-title"></h3>
                <p class="empire-modal-label">基本情况</p>
                <p id="empire-modal-about" class="empire-modal-body"></p>
                <p class="empire-modal-label">查理如何得到它</p>
                <p id="empire-modal-how" class="empire-modal-body"></p>
                <button type="button" class="btn empire-modal-confirm" data-close="confirm">确认</button>
              </div>
            </div>
          </div>
          <p class="stage-note">
            交互命题：光如何找到权力。四处不是征服进度条，而是复合君主国的点名。
          </p>
        </section>
        <aside class="captions" aria-label="旁侧展签">
          <p class="aside-label">点选展签 · 切换读墙</p>
          ${items}
        </aside>
      </div>
      <section class="wall" id="reading-wall" aria-live="polite" aria-label="读墙">
        ${wallHtml(themes[0])}
      </section>
      <footer class="politics-foot">
        <div class="hall-nav">
          <a class="btn btn-ghost" href="#/gate">← 大门</a>
          <a class="btn" href="#/economy">下一站 · 经济厅 →</a>
        </div>
        <p class="credit">史实脊柱：尤金·赖斯、安东尼·格拉夫顿《现代欧洲史 01》· 探光交互</p>
      </footer>
    </main>
  `;
}

/**
 * 军事厅：左三主题签 + 右读墙轮播（对齐政治厅体量）。
 * 文案语气贴近 Rice & Grafton 卷一「新型战争」；页面不标 § 出处。
 * 进厅对撞局 → 读墙 → 第二局「王国的账本」。
 */
const militaryThemes = [
  {
    id: "art",
    title: "战争艺术改写",
    teaser:
      "1450–1550：火药火炮改写战争艺术；其对政治社会的冲击，犹如印刷之于知识生活。",
    timeline: "1450–1550 · 火药西传 · 印刷并行",
    slides: [
      {
        title: "同一百年：书页变硬，战场也变硬",
        paras: [
          "约 1450 至 1550 这一个世纪，毁灭性技术以前所未有的速度推进。火药与火炮改写了作者所谓的「战争艺术」——不是换几件更锋利的兵器那么简单，而是改变战争如何组织、由谁负担、以何种节奏决定胜负。赖斯与格拉夫顿把这一冲击写得几乎像一条等式：新战争之于政治社会，犹如印刷之于知识生活。同一百年里，知识可以按印张复制，火力也可以被训练、被雇佣、被编成规模；欧洲人开始同时习惯「可流通的书」与「可动员的火」。",
          "火药西传的线索可溯至 13 世纪。罗吉尔·培根已描述硝石、硫磺与木炭的混合物；真正把它推上欧洲战场的，却是更晚的铸炮、补给与财政能力。技术本身并不自动孵化「现代国家」，但它抬高了开战门槛：谁能持续供应金属、火药、常备步兵与运输，谁才更像战争的主人。于是，「新型战争」与后文的主权集中、商人资本，落在同一条时间线上——本厅要追问的，正是这条线的军事一端：当骑士独斗不再决定大局，谁还能垄断有组织的武力？",
        ],
        src: "/military/armor.jpg",
        alt: "约 1510–1515 马克西米利安式凹槽甲胄",
        caption: "甲胄仍在；战场规则已开始松动",
      },
      {
        title: "旧语法：人与马一起穿上钢铁",
        paras: [
          "若要看见被改写之前的战争语法，最完整的句子仍是人马合甲：骑士与战马同时裹进钢板，冲击力、血统荣誉与昂贵装备绑成一体。能把这一套武装到如此密度的，几乎只能是宫廷与高贵族。战争因此看起来像一场贵族阶层的特权表演——胜负叙事围绕个人武勇展开，旗帜、纹章与甲胄的反光，比方阵的整齐更抢眼。",
          "卷一并不宣称甲胄一夜消失。新型战争改写的，是甲胄在战场上的意义。当火炮逼降石墙、长矛方阵挡住骑兵冲击、火绳枪在短暂的装填窗外仍能输出时，单骑决斗不再是决定性语法。甲胄可以仍在博物馆的光里闪光，甚至仍被王室用来夸示威仪；可「谁上得了战场、谁付得起下一场仗」已经换人。旧语法的华丽，恰恰反衬出新语法的冷酷：可训练、可扩编的步兵块，开始压过贵族独斗的舞台。",
        ],
        src: "/military/man_horse_armor.jpg",
        alt: "骑士与战马全套板甲陈列",
        caption: "旧语法：武勇与血统写在钢铁上",
      },
      {
        title: "新画面：矛墙挡住骑士冲锋",
        paras: [
          "布尔克迈尔一系木刻把新型战争画成拥挤的方阵：长矛如林，骑兵撞进矛墙，旗帜与帐篷挤在同一条地平线上。画面拒绝给个人英雄留特写，却给纪律化步兵留出整片竖直的矛杆——那正是马基雅维利稍后称作军队「实质与力量」的东西。胜负不再取决于某位骑士是否更勇敢，而取决于方阵能否在冲击下站稳、能否把训练变成可重复的秩序。",
          "读这张图时，请把视线从倒地的马匹移到那些可被计数的矛。它们代表一种可以被雇佣、被君主批量购买、也可以在失败后重新编组的武力。下一主题会先让火炮改写围攻的时间表；真正改写野战的，仍是这种可扩编的步兵块。旧画面里的骑士冲锋，从此必须面对一道不再为血统让路的墙。",
        ],
        src: "/military/burgkmair_battle.jpg",
        alt: "16 世纪初木刻：长矛方阵与甲骑对冲",
        caption: "新画面：决定胜负的是方阵，不是单骑",
      },
      {
        title: "装备换代：从人马全甲到可扩编的半甲",
        paras: [
          "战争形式一变，装备清单也跟着变。人马合甲是「一人一骑」的奢侈语法：保护周全，却贵、重、难补给。新型步兵战争需要的是另一套账——胸甲、盔、裙甲足以挡刃与矢，手臂与小腿可以让位给机动与造价。半甲不是「甲胄退化」，而是编制逻辑换主：装备要服务于可训练、可替换、可成百上千地上场的人，而不是少数贵族的舞台反光。",
          "戟、长矛与稍后的火绳枪，进一步把「个人武勇」拆成可传授的动作单元。戟的钩与斧刃对付甲骑，长矛用纵深换生存，火器则要求装填纪律。读完开场军制卡后再看这些物件，会更清楚：所谓战争艺术改写，同时是编制改写与装备改写。",
        ],
        caption: "左：矛兵半甲 · 右：约 1520 戟",
        images: [
          {
            src: "/military/pike_armor.jpg",
            alt: "矛兵半甲",
            label: "半甲：批量与机动优先",
          },
          {
            src: "/military/halberd_1520.jpg",
            alt: "约 1520 戟",
            label: "戟：步兵对付甲骑的工具",
          },
        ],
      },
    ],
  },
  {
    id: "cannon",
    title: "炮与要塞失效",
    teaser:
      "堡垒闻炮即降，围攻被重新计时；但野战改变的主因，仍是步兵及其轻便武器。",
    timeline: "1326 见炮 · 1453 破城 · 1449–50 围攻潮",
    slides: [
      {
        title: "巨炮入画：火力成为风景的一部分",
        paras: [
          "14 世纪初，欧亚各自摸索火器。约 1326 年，佛罗伦萨与英格兰的文献里已出现火炮或火罐——它们还笨重、还罕见，却证明火药已进入欧洲人的战争词汇。1453 年君士坦丁堡，穆罕默德二世的巨炮轰开城墙：那座长期象征「不可破」的石城在火器面前碎裂，给整个基督教世界留下震动。围攻不再只靠围困与挖掘，也可以靠把金属与火药推到墙根。",
          "丢勒 1518 年的蚀刻《有大炮的风景》，把一门笨重的攻城炮摆进开阔地平线。炮架、轮辐与旁观人群说明：火器不再是偶发奇物，而已进入欧洲人观看战争的日常图像。对读者而言，这张图的用处不是炫技，而是让「围攻将被重新计时」这件事变得可见——下一帖里，查理七世几乎一年六十次的围攻，正是同一逻辑的加速版。",
        ],
        src: "/military/cannon.jpg",
        alt: "丢勒 1518《有大炮的风景》蚀刻",
        caption: "1518：大炮进入欧洲人的战争风景",
      },
      {
        title: "堡垒失火：中世纪安全感碎裂",
        paras: [
          "查理七世在 1449 至 1450 约一年内完成约六十次围攻。堡垒闻炮即降——中世纪石墙给人的安全感，在此碎裂得格外具体。要塞并非一夜消失，而是突然变得昂贵、易伤、必须改建：更厚的墙、土坡、削角的棱堡，都是对火炮的迟到回应。战争的空间语法变了：城墙不再是「扛得住就赢」的绝对尺度，而变成一场与火药赛跑的工程与财政竞赛。",
          "可是作者立刻按下刹车。文艺复兴火炮机动差、不准、火力有限；把「战争艺术改写」全部归给巨炮，会漏掉卷一的关键转折。炮确实改写了围攻，使石墙的时代结束得更快；野战改变的主因，却仍不是炮，而是步兵及其轻便武器。若只看见燃烧的城塞，看不见方阵里的人，就会把军事革命读成一门巨炮的独角戏。",
        ],
        src: "/military/siege_durer.jpg",
        alt: "早期近代战图：矛阵、炮列与燃烧的要塞",
        caption: "围攻变快；野战仍要另找主因",
      },
      {
        title: "野战的实质：步兵，而非巨炮独角戏",
        paras: [
          "马基雅维利谈论军队时，把「实质与力量」落到步兵身上。持矛与火绳枪的人，比贵族马背更能决定一场野战的走向。半甲步兵的装备正体现这种转变：它保护躯干与头，却不再追求人马全甲的贵族华丽——造价、机动与批量装备，压过了骑士剧场。战争开始像一门可以扩编的组织技术，而不只是血统的公开演示。",
          "至约 1530 年，这一趋势已能用比例说出来：法军骑兵约仅十一分之一，西军约十二分之一。战争越来越像平民步兵的搏斗。炮让城墙变脆；步兵让战场换人。下一主题将把这种「实质」拆成可操作的咬合——矛线挡住骑兵，火枪在装填窗外输出——并把它推到莫拉特与帕维亚那样足以改写政治想象的尺度。",
        ],
        src: "/military/pike_armor.jpg",
        alt: "约 17 世纪初矛兵半甲：盔、胸甲与裙甲",
        caption: "野战主角：可批量装备的半甲步兵",
      },
      {
        title: "两种战争形式：围攻时钟与野战场",
        paras: [
          "新型战争其实并排跑着两套形式。围攻战里，重炮、运输与时间压力改写城堡政治：谁能把巨炮推到墙根，谁就能缩短「饿城」的漫长等待。野战里，决定因素却更常是步兵块的纪律与轻便火器——炮仍可出场，却很难单独扮演主角。把两种形式混成一句「火枪取代一切」，会同时看错围攻与野战。",
          "装备上也要分开看：攻城需要吞金属的重管与稳固炮架；野战更吃机动、装填与阵型咬合。丢勒画中的大炮提醒围攻风景；半甲与长矛提醒野战风景。开场小游戏里「轰墙」与「挡冲」分属两幕，正是为了让这两种形式先在手里分开。",
        ],
        src: "/military/cannon.jpg",
        alt: "丢勒《有大炮的风景》",
        caption: "围攻靠重炮计时；野战另有步兵语法",
      },
    ],
  },
  {
    id: "pike",
    title: "矛线、火枪与王权",
    teaser:
      "莫拉特之后：纪律化步兵压过骑士冲击；战争同时王权化与平民化。",
    timeline: "1476 莫拉特 · 1525 帕维亚 · 1524 巴亚尔",
    slides: [
      {
        title: "1476 莫拉特：被讥讽的农民挡住骑士",
        paras: [
          "瑞士长矛阵可攻可守。米兰使节曾轻蔑称这些人为「吃奶酪与酸奶的粗鄙农民」——讥讽本身就是史料：旧精英仍想用血统与礼仪语言理解胜负，却读不懂纪律化步兵的逻辑。1476 年莫拉特，正是这种误读的战场版：勃艮第骑士的冲击撞上瑞士矛墙，被讥讽的一方赢得了结构性胜利。莫拉特不是「农民奇迹」，而是训练、阵型与武器组合对贵族冲锋语法的改写。",
          "戟与长矛同属这套步兵工具箱：钩、劈、刺用来对付甲骑，方阵纪律用来换取存活。当骑兵发现自己再也无法单凭勇气撕开矛林，战争的主角便从马背滑向地面。卷一把这一幕写进新型战争的中段，是为了让读者看见：取代骑士的，不是抽象的「进步」，而是一种可以被复制的步兵秩序。",
        ],
        src: "/military/morat.jpg",
        alt: "16 世纪初木刻：长矛方阵挡住甲骑冲锋",
        caption: "莫拉特：矛墙改写谁能赢",
      },
      {
        title: "矛线咬合火枪：装填窗必须被保护",
        paras: [
          "火绳枪提高了步兵的杀伤距离，也带来新的脆弱：装填窗口里，火枪手几乎无法独自面对骑兵冲击。没有长矛保护，火力再高也站不稳。于是矛线与火枪必须咬合——高输出与高风险是同一枚硬币。戟提醒我们，步兵武器本就在「对付甲骑」；火器只是把同一问题推到更远的射程，并要求更严格的阵型配合。",
          "约 1521 年，西班牙改进火器；1525 年帕维亚，佩斯卡拉侯爵等步炮协同作战，法兰西国王弗朗索瓦一世被俘。国王可以成为俘虏，说明新型战争已把「君主本人」拖进步兵与火力的射程——这既是战术事件，也是政治象征。战场上的咬合，开始改写宫廷里对荣誉、勇气与王权安全的想象。",
        ],
        caption: "左：欧洲轮簧枪 · 右：约 1520 戟",
        images: [
          {
            src: "/military/wheellock_rifle.jpg",
            alt: "约 1618 德意志轮簧步枪",
            label: "火器：高输出，装填窗脆弱",
          },
          {
            src: "/military/halberd_1520.jpg",
            alt: "约 1520 戟头",
            label: "步兵：对付甲骑的钩与刺",
          },
        ],
      },
      {
        title: "双重后果：归国王，也归平民",
        paras: [
          "铸炮吞金属。矿冶排水、水力鼓风等技术，支撑约 1460 至 1530 年间铁产量的跃升——没有这套工业底座，新型战争很难持续。新武器因而利于能扩张领土、能持续征税、能供养常备武力的统治者：战争王权化，帮助君主垄断有组织武力，巩固主权领土国家。亨利八世式的王室甲胄仍可炫耀威仪，但支撑「下一场仗」的，是财政与矿冶，而非单套甲的华丽。",
          "同一套技术也让战争平民化。贵族感叹「懦夫」可射杀勇士；阿里奥斯托诅咒火枪夺去荣誉；巴亚尔骑士于 1524 年死于枪伤，被书中用作骑士时代象征性的终结。武器使战争成为君主与平民的工具，从而改写欧洲权力格局。读墙到此收束：炮让城墙变脆，矛与火枪让战场换人；武力既向国王集中，也向持枪的平民敞开——开场军制卡已让你先摸过这套结构。",
        ],
        src: "/military/armor_henry.jpg",
        alt: "亨利八世战甲：王室甲胄仍炫耀威仪",
        caption: "收束：战争同时王权化与平民化",
      },
      {
        title: "编制合成：矛、火、炮如何变成一套战争",
        paras: [
          "到意大利战争语境里，胜负越来越不像「选出一种最强兵器」，而像「把几种兵器编成不会互相拆台的顺序」。长矛负责抗冲击，火绳枪负责在保护下输出，炮在围攻或侧翼改写节奏；缺一环，整条链会在某个窗口崩掉。西班牙改进火器之后的帕维亚，把这种合成推到俘虏国王的尺度——那是编制成功的政治戏剧，不是某支枪的神话。",
          "因此读墙收束处要回到开场小游戏：初局先认「怎么打」；读完装备与形式后，进阶局改问「谁付得起下一仗」——铸炮、雇佣与借贷。能把炮与步兵持续编起来的力量，最终偏向王权；而火器本身又把杀伤交给更多非贵族的手——双重后果，写在同一套装备更新里。",
        ],
        src: "/military/armor_henry.jpg",
        alt: "亨利八世战甲",
        caption: "装备更新之后：编制权归谁，战场向谁敞开",
      },
    ],
  },
];

function militaryView() {
  const total = militaryThemes.length;
  const nodes = militaryThemes
    .map(
      (n, i) => `
      <button
        class="econ-node${i === 0 ? " is-active is-visited" : ""}"
        type="button"
        data-node="${n.id}"
        data-index="${i}"
        aria-pressed="${i === 0 ? "true" : "false"}"
      >
        <span class="econ-node-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="econ-node-body">
          <strong>${n.title}</strong>
          <em>${n.teaser}</em>
        </span>
      </button>`
    )
    .join("");

  return `
    <main class="screen economy military is-game-first" aria-label="军事厅">
      <div class="politics-top mil-game-top">
        <a class="link-back" href="#/gate">← 大门</a>
        <h1 class="display">新型战争</h1>
      </div>
      ${militaryGameBayHtml()}
      <div id="mil-content" class="mil-content" hidden>
        <p class="aside-label mil-read-label" id="mil-read-anchor">读墙</p>
        <div class="econ-layout">
          <aside class="econ-path" aria-label="军事厅主题路径">
            <p class="aside-label">主题</p>
            ${nodes}
            <p class="econ-progress" id="mil-progress" aria-live="polite">已探访 1 / ${total}</p>
          </aside>
          <section class="wall econ-wall" id="mil-wall" aria-live="polite" aria-label="军事厅读墙">
            ${wallHtml(militaryThemes[0])}
          </section>
        </div>
        <div class="econ-arrival" id="mil-arrival" hidden>
          <p class="econ-arrival-title">到站 · 3 / 3</p>
          <p class="econ-arrival-text">长文读完。可进入第二局「战争与经济」，或结束整场展览。</p>
          <div class="hall-nav">
            <button class="btn" type="button" data-open-ledger>第二局 · 战争与经济</button>
            <a class="btn" href="#/end">结束展览 →</a>
            <a class="btn btn-ghost" href="#/economy">← 经济厅</a>
            <button class="btn btn-ghost" type="button" data-scroll-game>回对撞局 ↑</button>
            <a class="btn btn-ghost" href="#/gate">回大门</a>
          </div>
        </div>
        <section class="mil-ledger-bay" id="mil-ledger-bay" aria-label="第二局 · 战争与经济">
          <p class="aside-label mil-ledger-label">第二局 · 战争与经济</p>
          <h2 class="mil-ledger-title">王国的账本</h2>
          <p class="mil-ledger-lead">对撞局之后：五波编制与国库。通关对撞局后可从上方按钮进入。</p>
          <div class="mil-play-stage led-review-stage" data-led-stage aria-live="polite"></div>
        </section>
        <div
          class="mil-recommend"
          id="mil-recommend"
          hidden
          role="dialog"
          aria-modal="true"
          aria-labelledby="mil-recommend-title"
        >
          <div class="mil-recommend-card">
            <button type="button" class="mil-recommend-x" data-mil-rec-close aria-label="关闭">×</button>
            <p class="aside-label">读墙完成</p>
            <h3 id="mil-recommend-title" class="mil-recommend-title">要不要开第二局？</h3>
            <p class="mil-recommend-text">厅内长文已看完。可玩「战争与经济」，用编制与国库续写新型战争。</p>
            <div class="mil-recommend-actions">
              <button type="button" class="btn" data-mil-rec-ledger>进入战争与经济</button>
              <button type="button" class="btn btn-ghost" data-mil-rec-close>稍后再说</button>
            </div>
          </div>
        </div>
        <footer class="politics-foot">
          <p class="credit">史实脊柱：尤金·赖斯、安东尼·格拉夫顿《现代欧洲史 01》· 第一章「新型战争」</p>
        </footer>
      </div>
    </main>
  `;
}

function bindMilitary(root) {
  const wall = root.querySelector("#mil-wall");
  const progress = root.querySelector("#mil-progress");
  const arrival = root.querySelector("#mil-arrival");
  const content = root.querySelector("#mil-content");
  const recommend = root.querySelector("#mil-recommend");
  const ledgerBay = root.querySelector("#mil-ledger-bay");
  const ledgerStage = root.querySelector("[data-led-stage]");
  const visited = new Set([militaryThemes[0].id]);
  const total = militaryThemes.length;
  const recKey = "mil_war_econ_prompted_v1";
  let ledgerMounted = false;
  /** @type {ReturnType<typeof bindMilitaryGame> | undefined} */
  let gameApi;

  const revealContent = () => {
    root.classList.remove("is-game-first");
    if (content) content.hidden = false;
  };

  const ensureLedgerMounted = () => {
    if (!ledgerStage || ledgerMounted) return;
    mountLedgerGame(ledgerStage, {
      backLabel: "回对撞局",
      onBack: () => {
        root.querySelector("#mil-game-bay")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      },
    });
    ledgerMounted = true;
  };

  const openLedger = () => {
    if (!gameApi?.hasIntroCleared?.()) return;
    revealContent();
    ensureLedgerMounted();
    ledgerBay?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  gameApi = bindMilitaryGame(root, {
    unlocked: true,
    onIntroCleared: () => {
      revealContent();
      ensureLedgerMounted();
    },
    onOpenLedger: openLedger,
  });

  if (gameApi?.hasIntroCleared?.()) {
    revealContent();
    ensureLedgerMounted();
  }

  if (wall) bindCarousel(wall);

  const recShown = () => {
    try {
      return sessionStorage.getItem(recKey) === "1";
    } catch {
      return false;
    }
  };

  const markRecShown = () => {
    try {
      sessionStorage.setItem(recKey, "1");
    } catch {
      /* ignore */
    }
  };

  const closeRecommend = () => {
    if (!recommend) return;
    recommend.hidden = true;
    markRecShown();
  };

  const openRecommend = () => {
    if (!recommend || recShown()) return;
    if (!gameApi?.hasIntroCleared?.()) return;
    recommend.hidden = false;
    recommend.querySelector("[data-mil-rec-ledger]")?.focus();
  };

  const refresh = () => {
    if (progress) progress.textContent = `已探访 ${visited.size} / ${total}`;
    if (visited.size >= total) {
      arrival?.removeAttribute("hidden");
      openRecommend();
    }
    gameApi?.refreshUnlocks?.();
  };

  root.querySelectorAll(".econ-node").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.node;
      const index = Number(btn.dataset.index || 0);
      const theme = militaryThemes[index];
      if (!theme || !wall) return;

      visited.add(id);
      root.querySelectorAll(".econ-node").forEach((other) => {
        const on = other === btn;
        other.classList.toggle("is-active", on);
        other.setAttribute("aria-pressed", on ? "true" : "false");
        if (visited.has(other.dataset.node)) other.classList.add("is-visited");
      });

      wall.innerHTML = wallHtml(theme);
      bindCarousel(wall);
      refresh();
      wall.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  root.querySelector("[data-scroll-game]")?.addEventListener("click", () => {
    root.querySelector("#mil-game-bay")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  root.querySelector("[data-open-ledger]")?.addEventListener("click", () => openLedger());

  recommend?.querySelectorAll("[data-mil-rec-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeRecommend());
  });
  recommend?.querySelector("[data-mil-rec-ledger]")?.addEventListener("click", () => {
    closeRecommend();
    openLedger();
  });
  recommend?.addEventListener("click", (e) => {
    if (e.target === recommend) closeRecommend();
  });

  refresh();
}

function ledgerReviewView() {
  return `
    <main class="screen ledger-review" aria-label="王国的账本">
      <div class="politics-top">
        <a class="link-back" href="#/military">← 军事厅</a>
        <p class="aside-label">第二局 · 亦可在军事厅末尾游玩</p>
        <h1 class="display">王国的账本</h1>
      </div>
      <section class="mil-play-stage led-review-stage" data-led-stage aria-live="polite"></section>
    </main>
  `;
}

function bindLedgerReview(root) {
  const stage = root.querySelector("[data-led-stage]");
  if (!stage) return;
  mountLedgerGame(stage, {
    backLabel: "回军事厅",
    onBack: () => {
      location.hash = "#/military";
    },
  });
}

function render() {
  const app = document.querySelector("#app");
  const view = route();
  if (view === "gate") {
    app.innerHTML = gateView();
  } else if (view === "politics") {
    app.innerHTML = politicsView();
    bindPolitics(app);
  } else if (view === "economy") {
    app.innerHTML = economyView();
    bindEconomy(app);
  } else if (view === "military") {
    app.innerHTML = militaryView();
    bindMilitary(app);
  } else if (view === "ledger-review") {
    app.innerHTML = ledgerReviewView();
    bindLedgerReview(app);
  } else if (view === "end") {
    app.innerHTML = endView();
  } else {
    app.innerHTML = coverView();
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
