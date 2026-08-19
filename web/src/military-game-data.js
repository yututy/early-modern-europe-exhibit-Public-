/**
 * 军事厅小游戏 · 初局四幕（情境对碰）
 * 进阶：战争与经济（另案，不对碰）
 */

/** @typedef {{ id: string, title: string, blurb: string, src: string, alt: string }} DoctrineCard */

/** @type {DoctrineCard[]} */
export const DOCTRINES = [
  {
    id: "knight",
    title: "铁甲骑兵冲锋",
    blurb: "人马都穿铁甲，直线撞过去撕开口子。",
    src: "/military/doctrine_knight.jpg",
    alt: "全装骑士与战马",
  },
  {
    id: "thin_levy",
    title: "临时民兵横队",
    blurb: "刚拉来的步兵，站得稀，练得少。",
    src: "/military/doctrine_levy.jpg",
    alt: "稀薄步兵横队",
  },
  {
    id: "cannon",
    title: "攻城大炮",
    blurb: "把大炮推到墙根，专打石墙缺口。",
    src: "/military/doctrine_cannon.jpg",
    alt: "攻城大炮",
  },
  {
    id: "swiss_pike",
    title: "瑞士长矛方阵",
    blurb: "长矛排成厚厚一块，专门顶住骑兵冲锋。",
    src: "/military/doctrine_pike.jpg",
    alt: "矛兵半甲与方阵装备",
  },
  {
    id: "pure_pike",
    title: "长矛方阵稳步推进",
    blurb: "全员长矛往前推，先求不被冲散。",
    src: "/military/doctrine_pike.jpg",
    alt: "长矛方阵",
  },
  {
    id: "pure_shot",
    title: "火枪前列齐射",
    blurb: "火枪顶到最前排，先打一轮火力。",
    src: "/military/doctrine_shot.jpg",
    alt: "火枪前列",
  },
  {
    id: "pike_shot",
    title: "长矛兵与火枪兵组合方阵",
    blurb: "长矛兵挡住冲锋，火枪兵在掩护下射击、换药。",
    src: "/military/doctrine_pike_shot.jpg",
    alt: "长矛兵与火枪兵组合方阵",
  },
  {
    id: "cavalry_screen",
    title: "侧翼骑兵突击",
    blurb: "先派骑兵撕开侧翼，再让步兵跟进。",
    src: "/military/doctrine_knight.jpg",
    alt: "侧翼骑兵",
  },
];

/** @type {import('./military-game-data.js').RoundDef[] | any[]} */
export const ROUNDS = [
  {
    id: "old_charge",
    act: 1,
    title: "开阔地撞上民兵",
    yearHint: "对照 · 骑士还管用的时候",
    briefing: "开阔地上，对面民兵站得稀稀拉拉。这一仗怎么打？",
    enemyLabel: "临时民兵",
    enemyShape: "levy",
    enemyCard: {
      title: "临时民兵",
      blurb: "刚拉来的步兵，站得稀，练得少。",
      src: "/military/doctrine_levy.jpg",
      alt: "临时民兵横队",
    },
    options: ["knight", "thin_levy", "pure_shot"],
    correctId: "knight",
    trapExplain: {
      thin_levy: "两边都是稀薄步兵硬撞，谁也冲不开。这会儿开口还得靠铁甲骑兵。",
      pure_shot: "火枪还没成气候；没人罩着，也挡不住骑兵第一波冲锋。",
    },
    winExplain:
      "铁甲骑兵撕开稀薄民兵。火药和纪律长矛还没全面上场前，骑兵冲锋仍是最管用的打法。",
  },
  {
    id: "cannon_siege",
    act: 2,
    title: "石堡堵在眼前",
    yearHint: "约 1450 · 围城",
    briefing: "高墙石堡堵在眼前。这一仗怎么拿下？",
    enemyLabel: "高墙石堡",
    enemyShape: "wall",
    enemyCard: {
      title: "高墙石堡",
      blurb: "中世纪高墙厚实，人撞不开，爬也慢。",
      src: "/military/enemy_stone_fort.jpg",
      alt: "高墙石堡",
    },
    options: ["cannon", "knight", "thin_levy"],
    correctId: "cannon",
    trapExplain: {
      knight: "骑兵撞的是石头，不是人。冲劲在墙根折断，围城几乎不动。",
      thin_levy: "人海贴墙又慢又贵。没有重炮，石墙还能硬撑。",
    },
    winExplain: "大炮在墙根打出缺口。石墙没一夜消失，但突然又贵又脆。",
  },
  {
    id: "morat",
    act: 3,
    title: "甲骑冲过来了",
    yearHint: "1476 · 莫拉特",
    briefing: "勃艮第铁甲骑兵直线冲过来。你怎么挡？",
    enemyLabel: "铁甲骑兵冲锋",
    enemyShape: "knight",
    enemyCard: {
      title: "铁甲骑兵冲锋",
      blurb: "人马全甲，直线撞过来。",
      src: "/military/doctrine_knight.jpg",
      alt: "铁甲骑兵冲锋",
    },
    options: ["swiss_pike", "knight", "pure_shot"],
    correctId: "swiss_pike",
    trapExplain: {
      knight: "骑士对骑士对冲，撞不上瑞士那道长矛墙——冲锋在矛林里碎掉。",
      pure_shot: "火枪换药装弹时空档太大，骑兵会先冲垮枪手。没有长矛挡着，火力站不住。",
    },
    winExplain:
      "长矛方阵把冲锋顶住了。被笑话的瑞士步兵改写了谁能赢，骑兵不再是默认答案。",
  },
  {
    id: "pike_shot",
    act: 4,
    title: "侧翼有骑兵游动",
    yearHint: "16 世纪初 · 意大利战场",
    briefing: "火枪越来越多，侧翼却一直有骑兵游着。这一仗你怎么摆阵？",
    enemyLabel: "侧翼骑兵",
    enemyShape: "knight",
    enemyCard: {
      title: "侧翼骑兵",
      blurb: "不跟你硬拼火力，专等阵型露空档。",
      src: "/military/doctrine_knight.jpg",
      alt: "侧翼骑兵",
    },
    options: ["pike_shot", "pure_pike", "cavalry_screen"],
    correctId: "pike_shot",
    trapExplain: {
      pure_pike: "长矛能挡冲锋，却打不远。对面用火枪慢慢咬，你会越来越被动。",
      cavalry_screen: "侧翼再派骑兵突击，换药装弹的空档还在；阵型一乱，对面骑兵照样钻进来。",
    },
    winExplain:
      "长矛兵挡住冲锋，火枪兵在掩护下射击、换药：既打得远，也扛得住冲击。",
  },
];

export const GEARS = [];

export const GAME_META = {
  title: "怎么打 · 新型战争",
  closing:
    "1476 莫拉特：被讥为「吃奶酪的农民」的瑞士长矛阵，击败勃艮第骑士。武器让战争既更靠国王供养，也更向平民敞开。",
  storageIntro: "mil_intro_cleared_v1",
};
