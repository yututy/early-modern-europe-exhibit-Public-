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
    title: "One family, many territories",
    teaser:
      "Spain, the Low Countries, Italy, and the Austrian core light up together under one name: Charles I of Spain, also Charles V of the Holy Roman Empire.",
    slides: [
      {
        title: "A European chessboard: one ruler, many institutions",
        paras: [
          "If “early modern state” means only the later textbook nation-state, Charles I’s map scarcely makes sense. Born in 1500 at Ghent in the Low Countries, he was linked through his mother to Castile and Aragon, and through his father to the Burgundian inheritance and Habsburg Austria. As a youth he grew up in Netherlandish noble etiquette, yet had to learn to speak Spanish with Castilians. From 1516 he inherited, in Spain as Charles I, the kingdoms left by the Catholic Monarchs: Castile, Aragon, and Aragon’s Mediterranean crowns such as Naples and Sicily. To Spanish subjects he was first “their king”—bound to respect local Cortes, urban privileges, and fiscal custom, not to treat Iberia as a blank map he could recolor at will.",
          "The same face later became Charles V of the Holy Roman Empire through the electors’ vote at Frankfurt. Stack the names and you see what welded them: not a shared language or national feeling, but dynastic inheritance, marriage contracts, and a court forever on the move. Wherever he arrived, he had to act as “king of this place alone”—one sovereignty, many laws, assemblies, and customs. The map’s shadows and hatchings are therefore not a conquest progress bar, but a visual roll call: the Spanish kingdoms, the Low Countries, the Italian zone, and the Austrian core kept their institutions while sharing one person. The film subtitle One family, many territories names this composite monarchy: “Charles’s empire” was never one continent painted a single color, but a European chessboard only loosely stitched by a family name.",
        ],
        src: "/politics/map_empire.png",
        alt: "Schematic map of Charles V’s composite European territories",
        caption: "Composite European territories at a glance",
      },
      {
        title: "Two faces in the seated portrait",
        paras: [
          "On the left, a seated likeness from Titian’s circle: black dress, the Order of the Golden Fleece, a slightly weary profile—closer to the “Charles I” Spanish courts knew, showing quiet and ceremony rather than armored force. On the right, a later “emperor” image: laurel, armor, the double eagle and trophies, rewriting the same man as a Roman-style triumphant Charles V. The exhibition pairs them not to invent two Charleses, but to show that a double title demanded two political languages from one person.",
          "To Castilian subjects he was a king who negotiated fiscal demands and soothed urban privileges; to imperial electors and German princes he was an emperor who had to preside over diets and face religious fracture. Portraiture itself was an early modern political medium: it made “supreme authority” hangable, reproducible, and visible. The composite empire still ended on a face that aged, decided, and could be resisted—governance on the left, imperial title on the right.",
        ],
        caption: "Paired contrast: one person, two political languages",
        images: [
          {
            src: "/politics/charles_i_spain_seated.jpg",
            alt: "Titian circle: seated portrait of Charles I of Spain",
            label: "Charles I of Spain",
          },
          {
            src: "/politics/charles_v_emperor.jpg",
            alt: "Emperor Charles V engraving: laurel, armor, and double eagle",
            label: "Charles V of the Holy Roman Empire",
          },
        ],
      },
      {
        title: "How the empire gathered",
        paras: [
          "This “empire” was not drawn by a single conquest, but stacked by generations of marriage and inheritance. Through the maternal line: after Joanna married Philip, the crowns, people, and taxes of Castile–Aragon—and Aragon’s Mediterranean routes to Naples and Sicily—passed to Charles, making him Charles I in Spain. Through the paternal line: the Burgundian ducal inheritance brought the cities, ports, and privilege networks of the Netherlandish provinces; Habsburg Austria’s hereditary lands fixed him on Central Europe’s frontier. Without the Iberian base, Low Country and Italian theaters were hard for one hand to hold at once; yet the base was not the whole—the Ghent-raised ruler always carried Low Country political memory.",
          "The 1519 imperial election raised family inheritance into an open contest for “leadership of Christendom”: electors’ votes needed money and promises, so Fugger credit entered highest politics directly. Only after election did he hold both titles—king of Spain and Holy Roman Emperor. Cutting Iberia out of the map alone reminds us of the order of acquisition: first mobilizable Spanish resources, then imperial title; contests over Milan and the like, and confrontation with Valois and Ottoman powers, all rested on this already gathered, never truly unified composite structure.",
        ],
        src: "/politics/piece_iberia.png",
        alt: "Iberian territories as a cut-out piece",
        caption: "Inheritance, marriage, and the 1519 imperial election",
      },
    ],
  },
  {
    id: "bodin",
    title: "Bodin’s sovereignty",
    teaser:
      "Sovereignty is called highest, absolute, and perpetual; it can make law and unmake law. Yet it is not lawlessness—divine and natural law still hold the monarch’s reins.",
    slides: [
      {
        title: "A “highest” that can be seen",
        paras: [
          "Sixteenth-century western European rulers liked to claim they were “subject to no one else’s command.” Court jurists in France, Spain, and England fished from Roman-law tradition maxims such as “what pleases the prince has the force of law.” In a France torn by religious war, Jean Bodin wrote the Six Books of the Commonwealth and arranged sovereignty into a near-geometric definition: the highest, absolute, and perpetual power in a commonwealth, whose core capacity is legislation—and the power to repeal or amend existing law. For this exhibition the point is not to memorize the formula, but to remind visitors: when taxation, coinage, war-making, final judgment, and standing force were drawn back from feudal fragments, princes needed a “supremacy” that could be seen and argued.",
          "Burgkmair’s 1508 equestrian woodcut of Maximilian I—with the double-headed eagle on banner and horse-cloth—is that visual language. Eagle, arms, and mounted prowess painted abstract imperial title into circulating images. What Charles I inherited was not only land and titles, but a propaganda tradition that wrote “empire” onto flags—stacked with the Spanish crown on one person, so that “highest” could be defined in law and seen by subjects.",
        ],
        src: "/politics/hre_maximilian.jpg",
        alt: "Equestrian woodcut of Maximilian I with double-headed eagle on the banner",
        caption: "Double eagle and imperial title",
      },
      {
        title: "How the royal will reached the localities",
        paras: [
          "If sovereignty stayed only in legal maxims and heraldry, it remained paper supremacy. Castile’s corregidor was a royal agent appointed and paid by the king: limited term, barred from serving in his home district, forbidden to collude with local factions, and subject to audit on leaving office. England’s justices of the peace offer a functional parallel—both were channels that carried the royal will into towns and counties. The deeper agents reached into localities, the more the monarch’s “highest” looked like real power, not a court declaration alone.",
          "A book of hours from Isabella’s age reminds us that Spanish kingship already had its own scribal and ceremonial traditions; authority was not invented with Charles I. Under him, the deeper the agents went, the louder the friction. The Castilian Comuneros revolt of 1520–1521 was cities’ and nobles’ fierce backlash against an “alien court” and fiscal demands. The rising was crushed, yet left a clear trail: composite-imperial claims of sovereignty were never decrees issued in a vacuum, but ongoing negotiation, surveillance, and repression.",
        ],
        src: "/politics/spain_isabella_hours.jpg",
        alt: "Manuscript page from Isabella of Castile’s book of hours",
        caption: "Writing, ceremony, and local channels",
      },
      {
        title: "Absolute—yet not a blank check",
        paras: [
          "Bodin also wrote the boundary often overlooked: absolute does not mean doing whatever one pleases. Divine and natural law still bind the monarch; he even cites agreements between the Spanish king and the Cortes—promises to remedy abuses in return for taxes—as binding. Strip early modern sovereignty of this religious and natural-law rein, and the story slides toward a later cartoon of tyranny.",
          "This heraldic roundel paints “highest” as crown, orb, and double eagle, yet packs local shields around the rim: power must be seen, and must land on concrete territories. A composite emperor needed to mobilize “highest” across many lands while bargaining among local diets, urban privileges, and religious opinion. This hall keeps the boundary in the narrative to avoid a stick-figure story: Bodin’s formula shows its weight and its limits only when set against real people and real territories.",
        ],
        src: "/politics/heraldic_zurich.jpg",
        alt: "Heraldic roundel: crown, double eagle, and surrounding local shields",
        caption: "Highest made visible—still landing on local shields",
      },
    ],
  },
  {
    id: "board",
    title: "Europe’s chessboard after 1494",
    teaser:
      "Charles VIII stepped into Italy and dragged the peninsula’s confederate autonomy into a larger European war; for the next half-century Habsburg, Valois, and Ottoman powers took turns at the table.",
    slides: [
      {
        title: "Royal war that used cannon",
        paras: [
          "In 1494 King Charles VIII of France crossed the Alps claiming the inheritance of Naples. For the Italian states this was not only an invasion but a structural break: Renaissance peninsula politics of mutual balance was forced into the great game among France, Spain, and the Empire. Milan, Venice, the Papal States, and Florence found they could no longer keep war inside the door marked “Italian affairs.” From that year Italy became an open stage where European sovereign states tested firepower, finance, and alliance.",
          "A woodcut of the Battle of Nancy from about 1512–1516 reminds us that cannon already stood in the distant view of royal war. When French armies re-entered Italy, the peninsula faced this cannon-using war machine, not the older frictions of a peninsula confederacy. Firearms, finance, and standing force thenceforward tangled with dynastic inheritance suits, lifting “local disputes” into a European-scale game.",
        ],
        src: "/politics/italy_french_king_war.jpg",
        alt: "Woodcut of royal war at the Battle of Nancy",
        caption: "The age when cannon entered the picture",
      },
      {
        title: "The Low Countries: the board’s other hand",
        paras: [
          "By 1519–1559 the board’s protagonists were Charles V, Francis I, and Süleyman. Two axes ran through it: Habsburg against Valois for Italian hegemony and European balance; Habsburg against Ottoman in an imperial confrontation across Central Europe and the Mediterranean. France could even join hands with the Ottomans to squeeze the Habsburgs from both sides—confessional slogans did not stop dynastic calculation. Pavia in 1525, when Francis I was captured, was the most dramatic scene on that axis.",
          "Antwerp’s skyline shows that Low Country trade, bills of exchange, and port taxes were the other hand that pushed the Spanish base onto Europe’s board. Lose a territory and you lose a muster roll and a credit network. Read the map only for crowns and battlefields, and you miss the quieter money and goods in the urban skyline that also decided who won.",
        ],
        src: "/politics/low_antwerp.jpg",
        alt: "Engraving of Antwerp’s Cathedral of Our Lady",
        caption: "Cities, bills of exchange, and ports",
      },
      {
        title: "Print threw argument into politics",
        paras: [
          "The easiest mistake in reading this board is to name sixteenth-century players with nineteenth-century nation-state vocabulary. Charles V contested family inheritance and an imagined leadership of Christendom; Francis I contested Valois honor and Italian footholds; Süleyman contested imperial frontiers and Mediterranean passages. Marriage, inheritance, ransom, and truce treaties were often closer to the actors’ own language than “national liberation.” The territories lit in the film are this game’s solid counters.",
          "Cranach’s 1521 woodcut facing pages turn a quarrel over ecclesiastical power into circulating images: Christ mocked on the left, the pope adored on the right. Print took argument off the pulpit and into markets and taverns. This hall does not open a Luther biography; it takes only a side note: confessional disputes quickly dragged into territorial politics and dynastic alliance—image war was never merely an illustration of theological debate.",
        ],
        src: "/politics/luther_print.jpg",
        alt: "Cranach printed woodcut facing pages",
        caption: "A side reminder of image war",
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
    hall: "Politics",
    title: "Seated portrait of Charles V",
    credit: "Usually attributed to Titian, 1548 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Titian_-_Portrait_of_Charles_V_Seated_-_WGA22964.jpg",
  },
  {
    hall: "Politics",
    title: "Holy Roman double-headed eagle arms",
    credit: "Vector after mid-16th-century style · CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Holy_Roman_Empire_Arms-double_head.svg",
  },
  {
    hall: "Politics",
    title: "Cover of The Babylonian Captivity of the Church",
    credit: "Luther, 1520 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Babylonian_captivity_of_the_church.jpg",
  },
  {
    hall: "Politics",
    title: "Map of Habsburg lands (1547)",
    credit: "Cambridge Modern History Atlas, 1912 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Habsburg_Map_1547.jpg",
  },
  {
    hall: "Economy",
    title: "Portrait of Fugger",
    credit: "Dürer, c.1519 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_080.jpg",
  },
  {
    hall: "Economy",
    title: "Bird’s-eye view of Antwerp",
    credit: "Braun & Hogenberg, 1572 · PD (comparison)",
    href: "https://commons.wikimedia.org/wiki/File:City_of_Antwerp,_1572.jpg",
  },
  {
    hall: "Economy",
    title: "Pump from De re metallica",
    credit: "Agricola 1556 / Wellcome · CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Agricola,_De_re_metallica_libri_XII._Wellcome_L0006609.jpg",
  },
  {
    hall: "Economy",
    title: "Cantino planisphere",
    credit: "Portuguese, 1502 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Cantino_planisphere_(1502).jpg",
  },
  {
    hall: "Economy",
    title: "Medici coat of arms",
    credit: "Vector after 16th-century style · PD-ineligible",
    href: "https://commons.wikimedia.org/wiki/File:Medici_coat_of_arms.svg",
  },
  {
    hall: "Military",
    title: "Battle of Calven",
    credit: "Schilling, 1513 · PD",
    href: "https://commons.wikimedia.org/wiki/File:Schlacht_an_der_Calven.jpg",
  },
  {
    hall: "Military",
    title: "Arquebus (object)",
    credit: "c.1510; Germanisches Nationalmuseum · CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Arquebus,_c._1510,_Germanisches_Nationalmuseum.jpg",
  },
  {
    hall: "Military",
    title: "Dürer’s Dulle Griet great bombard",
    credit: "Object first half of 15th c.; photograph 2014 · CC BY 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Dulle_Griet_Gent.JPG",
  },
  {
    hall: "Military",
    title: "Maximilian armor",
    credit: "German, c.1510–1520; Walters · object PD; photo CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:German_-_Maximilian_Armor_-_Walters_51584.jpg",
  },
  {
    hall: "Military",
    title: "Scene related to Morat",
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
    <main class="screen end" aria-label="End of the exhibition">
      <p class="eyebrow">Closing · Leaving the exhibition</p>
      <h1 class="display">A question to take with you</h1>
      <p class="lede end-question">
        When force, money, and the power to make law concentrate in the monarch’s hands, what room to negotiate remains for ordinary people?
      </p>

      <section class="end-block" aria-labelledby="end-thanks-title">
        <h2 id="end-thanks-title" class="end-block-title">Acknowledgements</h2>
        <p class="end-block-text">
          Historical spine: Eugene F. Rice Jr. and Anthony Grafton,
          <em>The Foundations of Early Modern Europe, 1460–1559</em>
          (Chinese ed. published by CITIC as <em>Modern European History</em>, vol. 1). This exhibition digs only into Volume I’s period; it does not extrapolate the whole series.
        </p>
        <p class="end-block-text">
          Politics Hall’s main visual is a web flashlight interaction; the TouchDesigner project remains available for live demos in person.
          Military Hall includes Clash and The King’s Ledger—two short layers of interaction, not scored by kills.
        </p>
      </section>

      <section class="end-block" aria-labelledby="end-images-title">
        <h2 id="end-images-title" class="end-block-title">Images and credits</h2>
        <p class="end-block-text">
          Below are verified Wikimedia Commons lead images (attribution licenses appear in the credit column).
          Military minigame character art is exhibition-made schematic imagery, not historical originals.
        </p>
        <ul class="end-credit-list">
          ${rows}
        </ul>
      </section>

      <div class="actions end-actions">
        <a class="btn" href="#/gate">Back to the Gate</a>
        <a class="btn btn-ghost" href="#/">Back to cover</a>
      </div>
      <p class="credit">The Foundations of Early Modern Europe · 1460–1559 · short online exhibition</p>
    </main>
  `;
}

function coverView() {
  return `
    <main class="screen cover" aria-label="Exhibition cover">
      <p class="eyebrow">Online Exhibition</p>
      <h1 class="display">The Foundations of Early Modern Europe · 1460–1559</h1>
      <p class="lede">Print, gunpowder, merchant capital, and the sovereign state arrive together—a short online exhibition you can walk in about fifteen minutes.</p>
      <div class="actions">
        <a class="btn" href="#/gate">Enter the Gate</a>
      </div>
      <p class="credit">Eugene F. Rice Jr. and Anthony Grafton, The Foundations of Early Modern Europe, 1460–1559</p>
    </main>
  `;
}

function gateView() {
  return `
    <main class="screen gate" aria-label="Exhibition gate">
      <p class="eyebrow">Gate · Three hall entrances</p>
      <h1 class="display">Choose a hall to enter</h1>
      <div class="doors">
        <a class="door" href="#/politics">
          <h2>Politics Hall</h2>
          <p>Charles V (Charles I)’s composite empire: how sovereignty was “seen” on a Spanish base and across many territories</p>
          <span class="meta">About 3–4 minutes</span>
        </a>
        <a class="door" href="#/economy">
          <h2>Economy Hall</h2>
          <p>How merchant-bankers wired mining and credit into the imperial election</p>
          <span class="meta">About 3–4 minutes</span>
        </a>
        <a class="door is-featured" href="#/military">
          <h2>Military Hall</h2>
          <p>How gunpowder and infantry made war the king’s business</p>
          <span class="meta">About 3–4 minutes · Clash + Ledger</span>
        </a>
      </div>
      <p class="gate-end-link">
        <a class="link-back" href="#/end">Finished all three halls? → Closing page · Acknowledgements & image credits</a>
      </p>
    </main>
  `;
}


function mediaHtml(slide) {
  if (Array.isArray(slide.images) && slide.images.length) {
    return `
      <div class="wall-slide-compare" role="group" aria-label="Paired images for comparison">
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
    "1460 · 1494 into Italy · 1519 Charles V elected · 1559 closing";
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
        <button type="button" class="wall-nav-btn" data-dir="-1" aria-label="Previous slide">‹</button>
        <div class="wall-dots" role="tablist" aria-label="Reading wall navigation">
          ${theme.slides
            .map(
              (_, i) =>
                `<button type="button" class="wall-dot${i === 0 ? " is-active" : ""}" data-goto="${i}" aria-label="Screen ${i + 1}"></button>`
            )
            .join("")}
        </div>
        <button type="button" class="wall-nav-btn" data-dir="1" aria-label="Next slide">›</button>
      </div>
      <p class="wall-carousel-hint">Swipe left or right: title, text, and image change together</p>
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
    title: "Iberia: the Castile–Aragon base",
    about:
      "Here is the core of the Spanish kingdoms: Castile supplied people and taxes; Aragon linked Mediterranean routes and Italian footholds. It was not one nation-state painted a single color, but many laws, Cortes, and customs stacked under one monarch’s name.",
    how:
      "Charles entered Spain through maternal inheritance: after Isabella and Ferdinand’s marriage, Joanna’s line carried the crowns of Castile and Aragon to him. Here he was Charles I of Spain—first learning to be “king of this place alone” in local language and institutions.",
  },
  low: {
    title: "The Low Countries: cities, ports, and the Burgundian inheritance",
    about:
      "The Netherlandish provinces were dense with cities; trade, bills of exchange, and port taxes around Antwerp were the other hand that pushed the Spanish base onto Europe’s board. Urban privileges were firm; a monarch could not treat this land as blank paper for arbitrary taxation.",
    how:
      "This territory came mainly through the paternal line: the Burgundian ducal inheritance Philip brought. Charles grew up in Ghent and was no stranger to Low Country etiquette and urban bargaining; when he later raised troops and money, he often had to return to this urban network.",
  },
  italy: {
    title: "Italy: Naples, Sicily, and the peninsula game",
    about:
      "Naples and Sicily were extensions of Aragon’s old crowns on the peninsula; places such as Milan dragged the Habsburgs onto an open stage of rivalry with the Valois. Italy was no longer only “internal peninsula business,” but a chessboard where European kingships tested firepower and finance.",
    how:
      "Southern Italian crowns largely came to Charles with the Aragonese inheritance; northern footholds were contested more by war, marriage, and treaty. For the exhibition the point is: he did not “conquer Italy” in one stroke, but acted as local monarch and party on several Italian territories separately.",
  },
  austria: {
    title: "Austrian core: Habsburg heredity and the door to imperial election",
    about:
      "The Austrian hereditary lands were the family’s Central European base and an entry into Holy Roman imperial politics. The Vienna region reminds visitors: the same face had to face Spanish assemblies and imperial electors and German princes alike.",
    how:
      "This came from the Habsburg inheritance of Maximilian I’s line. Only after the 1519 imperial election did he also become Charles V of the Holy Roman Empire—imperial title stacked on the Spanish crown, the composite structure complete.",
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
    progress.textContent = `Confirmed ${visited.size} / ${targets.length}`;
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
    { id: "iberia", label: "Iberia", hint: "Southwest · Spanish base", x: 17.9, y: 73.9 },
    { id: "low", label: "Low Countries", hint: "North Sea coast · cities & ports", x: 34.2, y: 33.3 },
    { id: "italy", label: "Italy", hint: "Peninsula · Naples region", x: 45.4, y: 74.3 },
    { id: "austria", label: "Austrian core", hint: "Central Europe · Vienna region", x: 48.7, y: 44.3 },
  ];

  const zoneBtns = zones
    .map(
      (z) => `
      <button
        type="button"
        class="flash-zone"
        data-zone="${z.id}"
        style="left:${z.x}%;top:${z.y}%"
        aria-label="Find: ${z.label}"
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
    <main class="screen politics" aria-label="Politics Hall">
      <div class="politics-top">
        <a class="link-back" href="#/gate">← Gate</a>
        <h1 class="display">Seeing Sovereignty</h1>
        <p class="hall-kicker">Charles V’s composite empire · Charles I of Spain</p>
      </div>
      <p class="hall-intro">
        Move the cursor to light four territories; each find opens a note—tap Confirm before you continue. When all four are confirmed, the central title slowly appears.
      </p>
      <div class="politics-layout">
        <section>
          <div
            class="stage flash-stage"
            id="empire-flash"
            role="application"
            aria-label="Flashlight map of the composite empire"
          >
            <img class="flash-dim" src="/politics/map_empire.png" alt="" draggable="false" />
            <img
              class="flash-lit"
              src="/politics/map_empire.png"
              alt="Schematic map of Charles V’s composite European territories"
              draggable="false"
            />
            <div class="flash-zones" aria-hidden="true">${zoneBtns}</div>
            <p class="flash-title" hidden>One family, many territories</p>
            <div class="flash-hud">
              <p class="flash-guide">Seek with the light · Confirm after reading</p>
              <ul class="flash-legend">${legend}</ul>
              <p class="flash-progress" id="flash-progress">Confirmed 0 / 4</p>
              <p class="flash-done" id="flash-done" hidden>Four territories named—one family, many territories.</p>
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
                <button type="button" class="empire-modal-x" data-close="x" aria-label="Close">×</button>
                <h3 id="empire-modal-title" class="empire-modal-title"></h3>
                <p class="empire-modal-label">In brief</p>
                <p id="empire-modal-about" class="empire-modal-body"></p>
                <p class="empire-modal-label">How Charles acquired it</p>
                <p id="empire-modal-how" class="empire-modal-body"></p>
                <button type="button" class="btn empire-modal-confirm" data-close="confirm">Confirm</button>
              </div>
            </div>
          </div>
          <p class="stage-note">
            Interaction thesis: how light finds power. The four sites are not a conquest progress bar, but a roll call of composite monarchy.
          </p>
        </section>
        <aside class="captions" aria-label="Side captions">
          <p class="aside-label">Select a caption · switch the reading wall</p>
          ${items}
        </aside>
      </div>
      <section class="wall" id="reading-wall" aria-live="polite" aria-label="Reading wall">
        ${wallHtml(themes[0])}
      </section>
      <footer class="politics-foot">
        <div class="hall-nav">
          <a class="btn btn-ghost" href="#/gate">← Gate</a>
          <a class="btn" href="#/economy">Next stop · Economy Hall →</a>
        </div>
        <p class="credit">Historical spine: Eugene F. Rice Jr. and Anthony Grafton, The Foundations of Early Modern Europe · flashlight interaction</p>
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
    title: "The art of war rewritten",
    teaser:
      "1450–1550: gunpowder artillery rewrote the art of war; its shock to political society was like that of print on the life of the mind.",
    timeline: "1450–1550 · gunpowder west · print in parallel",
    slides: [
      {
        title: "The same century: pages harden, battlefields harden",
        paras: [
          "From about 1450 to 1550, destructive technique advanced at unprecedented speed. Gunpowder and cannon rewrote what the authors call the “art of war”—not merely sharper weapons, but a change in how war was organized, who paid for it, and at what tempo victory was decided. Rice and Grafton cast the shock almost as an equation: the new warfare stood to political society as print stood to intellectual life. In the same century, knowledge could be copied sheet by sheet, and firepower could be trained, hired, and scaled; Europeans began to live with both “circulating books” and “mobilizable fire.”",
          "Gunpowder’s westward path can be traced to the thirteenth century. Roger Bacon already described mixtures of saltpeter, sulfur, and charcoal; what pushed it onto European battlefields was later capacity to cast guns, supply them, and finance them. Technique alone did not hatch the “modern state,” but it raised the threshold for war: whoever could keep supplying metal, powder, standing infantry, and transport looked more like war’s master. Thus “the new warfare” shares a timeline with later concentration of sovereignty and merchant capital—this hall asks the military end of that line: when knightly single combat no longer decided the larger game, who could still monopolize organized force?",
        ],
        src: "/military/armor.jpg",
        alt: "Maximilian-style fluted armor, c.1510–1515",
        caption: "Armor remains; battlefield rules have begun to loosen",
      },
      {
        title: "Old grammar: man and horse clad in steel together",
        paras: [
          "To see the grammar of war before it was rewritten, the fullest sentence is still man and horse in full plate: knight and destrier wrapped in steel, impact, blood honor, and costly gear bound as one. Almost only courts and high nobility could arm to such density. War thus looked like a privileged performance of the noble estate—victory narratives turned on personal prowess; banners, arms, and armor’s gleam outshone the pike square’s order.",
          "Volume I does not claim armor vanished overnight. What the new warfare rewrote was armor’s meaning on the field. When cannon forced stone walls to yield, pike squares stopped cavalry shock, and the arquebus still delivered within its brief loading window, single-combat on horseback ceased to be decisive grammar. Armor could still shine under museum light, even serve royal display; yet “who could take the field, who could afford the next war” had already changed hands. The old grammar’s splendor throws the new grammar’s coldness into relief: trainable, expandable infantry blocks began to outweigh the stage of noble single combat.",
        ],
        src: "/military/man_horse_armor.jpg",
        alt: "Full plate for knight and horse on display",
        caption: "Old grammar: prowess and blood written in steel",
      },
      {
        title: "New picture: a wall of pikes stops the knight’s charge",
        paras: [
          "Woodcuts in Burgkmair’s circle paint the new warfare as crowded squares: pikes like a forest, cavalry crashing into the wall, banners and tents sharing one horizon. The image refuses close-ups for individual heroes, yet leaves a whole field of upright shafts for disciplined infantry—what Machiavelli would soon call the army’s “substance and strength.” Victory no longer hung on whether one knight was braver, but on whether the square could stand under shock and turn training into repeatable order.",
          "Reading this image, shift your eye from fallen horses to those countable pikes. They stand for force that could be hired, bought in bulk by monarchs, and regrouped after defeat. The next theme lets cannon first rewrite siege clocks; what truly rewrote the open field was still this expandable infantry block. The knight’s charge in the old picture thenceforward faced a wall that no longer made way for blood.",
        ],
        src: "/military/burgkmair_battle.jpg",
        alt: "Early-16th-century woodcut: pike square meeting armored cavalry",
        caption: "New picture: the square decides, not the single rider",
      },
      {
        title: "Kit change: from full man-and-horse plate to expandable half-armor",
        paras: [
          "As forms of war changed, the equipment list changed with them. Full man-and-horse plate was a luxury grammar of “one man, one mount”: thorough protection, yet costly, heavy, and hard to supply. New infantry war needed another ledger—breastplate, helm, and tassets enough against blade and shaft, while arms and legs could yield to mobility and price. Half-armor was not “armor in decline,” but a shift in organizational logic: kit served people who could be trained, replaced, and fielded by the hundreds or thousands, not the stage gleam of a few nobles.",
          "Halberd, pike, and later the arquebus further broke “personal prowess” into teachable units of action. The halberd’s hook and axe-blade met armored cavalry; the pike traded depth for survival; firearms demanded loading discipline. After the opening military cards, these objects read more clearly: rewriting the art of war was rewriting both organization and kit.",
        ],
        caption: "Left: pikeman’s half-armor · Right: halberd, c.1520",
        images: [
          {
            src: "/military/pike_armor.jpg",
            alt: "Pikeman’s half-armor",
            label: "Half-armor: bulk and mobility first",
          },
          {
            src: "/military/halberd_1520.jpg",
            alt: "Halberd, c.1520",
            label: "Halberd: infantry tool against armored cavalry",
          },
        ],
      },
    ],
  },
  {
    id: "cannon",
    title: "Cannon and the failure of fortresses",
    teaser:
      "Fortresses fell at the sound of guns; sieges were retimed—yet the main cause of change in the open field remained infantry and its lighter weapons.",
    timeline: "1326 guns appear · 1453 walls breached · 1449–50 siege wave",
    slides: [
      {
        title: "Great guns enter the picture: firepower as part of the landscape",
        paras: [
          "In the early fourteenth century, Eurasia groped toward firearms. By about 1326, Florentine and English sources already mention cannon or fire-pots—still clumsy and rare, yet proof that gunpowder had entered Europeans’ vocabulary of war. At Constantinople in 1453, Mehmed II’s great guns broke the walls: a stone city long symbolic of the “unbreakable” shattered before firearms and shook Christendom. Siege no longer rested only on starvation and mining; metal and powder could be pushed to the foot of the wall.",
          "Dürer’s 1518 etching Landscape with a Cannon sets a heavy siege piece into an open horizon. Carriage, wheel rims, and onlookers show firearms were no longer odd rarities, but part of how Europeans pictured war. For readers the point is not virtuosity, but making visible that “sieges would be retimed”—Charles VII’s roughly sixty sieges in a single year, in the next panel, is that logic accelerated.",
        ],
        src: "/military/cannon.jpg",
        alt: "Dürer, Landscape with a Cannon, etching, 1518",
        caption: "1518: cannon enters Europeans’ landscape of war",
      },
      {
        title: "Fortresses on fire: medieval security cracks",
        paras: [
          "Charles VII completed some sixty sieges in about a year, 1449–1450. Fortresses fell at the sound of guns—medieval stone walls’ sense of security cracked with special clarity. Fortresses did not vanish overnight; they suddenly became costly, vulnerable, and in need of rebuilding: thicker walls, earthworks, and angled bastions were belated answers to cannon. War’s spatial grammar changed: the wall was no longer an absolute scale of “hold and win,” but an engineering and fiscal race against gunpowder.",
          "Yet the authors hit the brakes at once. Renaissance cannon was poorly mobile, inaccurate, and limited in firepower; blaming the whole “rewriting of the art of war” on great guns misses Volume I’s key turn. Cannon did rewrite sieges and ended the age of stone walls faster; the main cause of change in the open field was still not the gun, but infantry and its lighter weapons. See only burning strongholds and miss the people in the square, and you read military revolution as a great-gun solo.",
        ],
        src: "/military/siege_durer.jpg",
        alt: "Early modern battle scene: pike, guns, and a burning fortress",
        caption: "Sieges sped up; the open field still needs another cause",
      },
      {
        title: "Substance of the field: infantry, not a great-gun solo",
        paras: [
          "When Machiavelli spoke of armies, he put “substance and strength” on the infantry. Men with pike and arquebus decided open-field outcomes more than nobles on horseback. Half-armored infantry kit embodies the shift: it protects trunk and head without chasing the noble splendor of full man-and-horse plate—cost, mobility, and bulk equipment outweighed the knightly theater. War began to look like expandable organizational technique, not only a public display of blood.",
          "By about 1530 the trend could be stated in ratios: French cavalry about one-eleventh of the force, Spanish about one-twelfth. War looked more and more like commoners’ infantry fighting. Cannon made walls brittle; infantry changed who fought. The next theme breaks this “substance” into workable bite—pike lines stop cavalry, shot delivers within the loading window—and pushes it to the scale of Morat and Pavia, enough to rewrite political imagination.",
        ],
        src: "/military/pike_armor.jpg",
        alt: "Pikeman’s half-armor, early 17th c.: helm, breastplate, and tassets",
        caption: "Open-field lead: half-armored infantry that could be equipped in bulk",
      },
      {
        title: "Two forms of war: siege clocks and the open field",
        paras: [
          "The new warfare in fact ran two forms side by side. In siege war, heavy guns, transport, and time pressure rewrote castle politics: whoever could push great guns to the wall could shorten the long wait of starving a town. In the open field, the deciding factors were more often infantry discipline and lighter firearms—cannon could still appear, but rarely starred alone. Mixing both into one slogan—“the gun replaces everything”—misreads siege and field at once.",
          "Kit, too, must be read apart: siege swallowed metal in heavy barrels and steady carriages; the field ate mobility, loading, and interlocking formations. Dürer’s cannon recalls the siege landscape; half-armor and pike recall the field. In the opening game, “breach the wall” and “stop the charge” belong to two acts so these forms first separate in the hand.",
        ],
        src: "/military/cannon.jpg",
        alt: "Dürer, Landscape with a Cannon",
        caption: "Sieges timed by heavy guns; the field has another infantry grammar",
      },
    ],
  },
  {
    id: "pike",
    title: "Pike line, shot, and kingship",
    teaser:
      "After Morat: disciplined infantry outweighed the knightly charge; war became both more royal and more common.",
    timeline: "1476 Morat · 1525 Pavia · 1524 Bayard",
    slides: [
      {
        title: "1476 Morat: mocked peasants stop the knights",
        paras: [
          "Swiss pike could attack or hold. A Milanese envoy once scorned them as “coarse peasants who eat cheese and curds”—the sneer itself is evidence: old elites still tried to read victory in the language of blood and etiquette, and could not grasp disciplined infantry’s logic. Morat in 1476 was that misreading on the field: Burgundian knightly shock met the Swiss pike wall, and the mocked side won a structural victory. Morat was no “peasant miracle,” but training, formation, and weapon combination rewriting the grammar of noble charge.",
          "Halberd and pike belonged to the same infantry toolbox: hook, chop, and thrust against armored cavalry; square discipline bought survival. When cavalry found courage alone could no longer tear the pike forest, war’s lead slipped from horseback to the ground. Volume I places this scene mid-way through the new warfare so readers see: what replaced the knight was not abstract “progress,” but a reproducible infantry order.",
        ],
        src: "/military/morat.jpg",
        alt: "Early-16th-century woodcut: pike square stopping armored cavalry",
        caption: "Morat: the pike wall rewrites who can win",
      },
      {
        title: "Pike bites with shot: the loading window must be guarded",
        paras: [
          "The arquebus lengthened infantry’s killing range and brought new fragility: in the loading window, shot could scarcely face cavalry alone. Without pike cover, even high firepower could not stand. So pike line and shot had to bite together—high output and high risk were one coin. The halberd reminds us infantry weapons were already about “meeting armored cavalry”; firearms only pushed the same problem to longer range and demanded stricter formation.",
          "Around 1521 Spain improved firearms; at Pavia in 1525, the Marquis of Pescara and others coordinated infantry and guns, and King Francis I of France was captured. That a king could become a prisoner shows the new warfare had dragged “the monarch himself” into infantry and fire’s range—a tactical event and a political symbol. Bite on the field began to rewrite court imaginings of honor, courage, and royal safety.",
        ],
        caption: "Left: European wheellock · Right: halberd, c.1520",
        images: [
          {
            src: "/military/wheellock_rifle.jpg",
            alt: "German wheellock rifle, c.1618",
            label: "Firearms: high output, fragile loading window",
          },
          {
            src: "/military/halberd_1520.jpg",
            alt: "Halberd head, c.1520",
            label: "Infantry: hook and thrust against armored cavalry",
          },
        ],
      },
      {
        title: "Double consequence: to the king, and to commoners",
        paras: [
          "Casting guns swallowed metal. Techniques such as mine drainage and hydraulic blast underwrote a leap in iron output about 1460–1530—without that industrial base, the new warfare could scarcely last. New weapons thus favored rulers who could expand territory, tax continuously, and sustain standing force: war’s royalization helped monarchs monopolize organized force and consolidate the sovereign territorial state. Henry VIII–style royal armor could still parade majesty, but what underwrote “the next war” was finance and mining, not the splendor of a single suit.",
          "The same technique also made war more common. Nobles lamented that “cowards” could shoot down the brave; Ariosto cursed the gun for stealing honor; the knight Bayard died of a gunshot in 1524, used in the book as a symbolic end of the chivalric age. Weapons made war a tool of monarch and commoner alike, rewriting Europe’s power map. The reading wall closes here: cannon made walls brittle; pike and shot changed who fought; force concentrated toward the king and opened to common hands that held guns—the opening military cards already let you feel that structure.",
        ],
        src: "/military/armor_henry.jpg",
        alt: "Henry VIII’s field armor: royal plate still displays majesty",
        caption: "Closing: war becomes both more royal and more common",
      },
      {
        title: "Combined arms: how pike, shot, and gun become one war",
        paras: [
          "In the Italian Wars, victory looked less like “picking the strongest weapon” and more like “ordering several weapons so they did not undo each other.” Pike resisted shock; arquebus delivered under cover; cannon rewrote tempo in siege or on the flank—lose one link and the chain broke at some window. Pavia after Spanish firearm improvements pushed that synthesis to the scale of capturing a king—political drama of successful organization, not the myth of one gun.",
          "So the reading wall’s close returns to the opening game: first recognize “how to fight”; after kit and form, the advanced game asks “who can afford the next war”—casting, hire, and borrowing. Power that could keep guns and infantry combined tilted toward kingship; firearms themselves also put killing into more non-noble hands—the double consequence written in the same kit update.",
        ],
        src: "/military/armor_henry.jpg",
        alt: "Henry VIII’s field armor",
        caption: "After the kit update: who holds organization, whom the field opens to",
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
    <main class="screen economy military is-game-first" aria-label="Military Hall">
      <div class="politics-top mil-game-top">
        <a class="link-back" href="#/gate">← Gate</a>
        <h1 class="display">The New Warfare</h1>
      </div>
      ${militaryGameBayHtml()}
      <div id="mil-content" class="mil-content" hidden>
        <p class="aside-label mil-read-label" id="mil-read-anchor">Reading wall</p>
        <div class="econ-layout">
          <aside class="econ-path" aria-label="Military Hall theme path">
            <p class="aside-label">Themes</p>
            ${nodes}
            <p class="econ-progress" id="mil-progress" aria-live="polite">Visited 1 / ${total}</p>
          </aside>
          <section class="wall econ-wall" id="mil-wall" aria-live="polite" aria-label="Military Hall reading wall">
            ${wallHtml(militaryThemes[0])}
          </section>
        </div>
        <div class="econ-arrival" id="mil-arrival" hidden>
          <p class="econ-arrival-title">Arrival · 3 / 3</p>
          <p class="econ-arrival-text">Essay complete. You may enter Game II · War and Economy, or close the whole exhibition.</p>
          <div class="hall-nav">
            <button class="btn" type="button" data-open-ledger>Game II · War and Economy</button>
            <a class="btn" href="#/end">Close the exhibition →</a>
            <a class="btn btn-ghost" href="#/economy">← Economy Hall</a>
            <button class="btn btn-ghost" type="button" data-scroll-game>Back to Clash ↑</button>
            <a class="btn btn-ghost" href="#/gate">Back to the Gate</a>
          </div>
        </div>
        <section class="mil-ledger-bay" id="mil-ledger-bay" aria-label="Game II · War and Economy">
          <p class="aside-label mil-ledger-label">Game II · War and Economy</p>
          <h2 class="mil-ledger-title">The King's Ledger</h2>
          <p class="mil-ledger-lead">After Clash: five waves of organization and treasury. Enter from the button above once Clash is cleared.</p>
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
            <button type="button" class="mil-recommend-x" data-mil-rec-close aria-label="Close">×</button>
            <p class="aside-label">Reading wall complete</p>
            <h3 id="mil-recommend-title" class="mil-recommend-title">Open Game II?</h3>
            <p class="mil-recommend-text">The hall essay is done. You can play War and Economy and continue the new warfare with organization and treasury.</p>
            <div class="mil-recommend-actions">
              <button type="button" class="btn" data-mil-rec-ledger>Enter War and Economy</button>
              <button type="button" class="btn btn-ghost" data-mil-rec-close>Maybe later</button>
            </div>
          </div>
        </div>
        <footer class="politics-foot">
          <p class="credit">Historical spine: Eugene F. Rice Jr. and Anthony Grafton, The Foundations of Early Modern Europe · Chapter 1, “The New Warfare”</p>
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
      backLabel: "Back to Clash",
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
    if (progress) progress.textContent = `Visited ${visited.size} / ${total}`;
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
    <main class="screen ledger-review" aria-label="The King's Ledger">
      <div class="politics-top">
        <a class="link-back" href="#/military">← Military Hall</a>
        <p class="aside-label">Game II · also playable at the end of Military Hall</p>
        <h1 class="display">The King's Ledger</h1>
      </div>
      <section class="mil-play-stage led-review-stage" data-led-stage aria-live="polite"></section>
    </main>
  `;
}

function bindLedgerReview(root) {
  const stage = root.querySelector("[data-led-stage]");
  if (!stage) return;
  mountLedgerGame(stage, {
    backLabel: "Back to Military Hall",
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
