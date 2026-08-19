/**
 * Military hall game · opening four acts (situation clash)
 * Advanced: War and Economy (separate; not a clash)
 */

/** @typedef {{ id: string, title: string, blurb: string, src: string, alt: string }} DoctrineCard */

/** @type {DoctrineCard[]} */
export const DOCTRINES = [
  {
    id: "knight",
    title: "Armoured cavalry charge",
    blurb: "Horse and rider in plate, driven in a straight line to tear a gap.",
    src: "/military/doctrine_knight.jpg",
    alt: "Fully armoured knight and warhorse",
  },
  {
    id: "thin_levy",
    title: "Scratch militia line",
    blurb: "Infantry raised in haste: thinly ranked, barely drilled.",
    src: "/military/doctrine_levy.jpg",
    alt: "A thin infantry line",
  },
  {
    id: "cannon",
    title: "Siege cannon",
    blurb: "Bring the guns to the foot of the wall and punch a breach in the stone.",
    src: "/military/doctrine_cannon.jpg",
    alt: "Siege cannon",
  },
  {
    id: "swiss_pike",
    title: "Swiss pike square",
    blurb: "Pikes packed into a dense block, built to stop a cavalry charge.",
    src: "/military/doctrine_pike.jpg",
    alt: "Half-armoured pikemen and the gear of the square",
  },
  {
    id: "pure_pike",
    title: "Pike square, steady advance",
    blurb: "All pikes, pushing forward; first, do not break.",
    src: "/military/doctrine_pike.jpg",
    alt: "Pike square",
  },
  {
    id: "pure_shot",
    title: "Front-rank volley",
    blurb: "Place the shot in the front rank and fire first.",
    src: "/military/doctrine_shot.jpg",
    alt: "Front rank of shot",
  },
  {
    id: "pike_shot",
    title: "Pike and shot",
    blurb: "Pikes hold the charge; shot fire and reload under that cover.",
    src: "/military/doctrine_pike_shot.jpg",
    alt: "Pike and shot",
  },
  {
    id: "cavalry_screen",
    title: "Flanking cavalry strike",
    blurb: "Send horse to tear the flank, then bring the infantry on.",
    src: "/military/doctrine_knight.jpg",
    alt: "Flanking cavalry",
  },
];

/** @type {import('./military-game-data.js').RoundDef[] | any[]} */
export const ROUNDS = [
  {
    id: "old_charge",
    act: 1,
    title: "Open ground, thin militia",
    yearHint: "Contrast · when the knight still worked",
    briefing: "On open ground the militia stand thinly ranked. How do you fight this?",
    enemyLabel: "Scratch militia",
    enemyShape: "levy",
    enemyCard: {
      title: "Scratch militia",
      blurb: "Infantry raised in haste: thinly ranked, barely drilled.",
      src: "/military/doctrine_levy.jpg",
      alt: "Scratch militia line",
    },
    options: ["knight", "thin_levy", "pure_shot"],
    correctId: "knight",
    trapExplain: {
      thin_levy: "Two thin lines of foot crash together; neither opens a gap. At this date the breach still belongs to armoured cavalry.",
      pure_shot: "Shot are not yet decisive. Uncovered, they cannot stop the first cavalry charge.",
    },
    winExplain:
      "Armoured cavalry tear through the thin militia. Until gunpowder and disciplined pikes fully arrive, the charge remains the working method.",
  },
  {
    id: "cannon_siege",
    act: 2,
    title: "A stone fortress in the way",
    yearHint: "c. 1450 · Siege",
    briefing: "High stone walls block the way. How do you take this?",
    enemyLabel: "High stone fortress",
    enemyShape: "wall",
    enemyCard: {
      title: "High stone fortress",
      blurb: "Medieval walls are thick. Men cannot ram them; climbing is slow.",
      src: "/military/enemy_stone_fort.jpg",
      alt: "High stone fortress",
    },
    options: ["cannon", "knight", "thin_levy"],
    correctId: "cannon",
    trapExplain: {
      knight: "Cavalry hit stone, not men. The charge breaks at the foot of the wall; the siege barely moves.",
      thin_levy: "A human wave against the wall is slow and costly. Without heavy guns, the stone can still hold.",
    },
    winExplain: "Cannon punch a breach at the foot of the wall. Stone does not vanish overnight, but it is suddenly expensive and brittle.",
  },
  {
    id: "morat",
    act: 3,
    title: "The armoured horse is coming",
    yearHint: "1476 · Morat",
    briefing: "Burgundian armoured cavalry charge in a straight line. How do you stop them?",
    enemyLabel: "Armoured cavalry charge",
    enemyShape: "knight",
    enemyCard: {
      title: "Armoured cavalry charge",
      blurb: "Horse and rider in full plate, driven in a straight line.",
      src: "/military/doctrine_knight.jpg",
      alt: "Armoured cavalry charge",
    },
    options: ["swiss_pike", "knight", "pure_shot"],
    correctId: "swiss_pike",
    trapExplain: {
      knight: "Knight against knight never meets the Swiss pike wall. The charge shatters in the forest of spears.",
      pure_shot: "The reload window is too wide; cavalry will break the shot first. Without pikes to hold, the fire cannot stand.",
    },
    winExplain:
      "The pike square holds the charge. The mocked Swiss infantry rewrite who can win; cavalry is no longer the default answer.",
  },
  {
    id: "pike_shot",
    act: 4,
    title: "Horse circling the flank",
    yearHint: "Early 16th century · Italian field",
    briefing: "Shot grow more numerous, yet cavalry still haunt the flanks. How do you form?",
    enemyLabel: "Flanking cavalry",
    enemyShape: "knight",
    enemyCard: {
      title: "Flanking cavalry",
      blurb: "They will not trade fire with you. They wait for a gap in the formation.",
      src: "/military/doctrine_knight.jpg",
      alt: "Flanking cavalry",
    },
    options: ["pike_shot", "pure_pike", "cavalry_screen"],
    correctId: "pike_shot",
    trapExplain: {
      pure_pike: "Pikes can stop a charge, but they cannot reach far. Enemy shot will nibble you down; you grow more passive.",
      cavalry_screen: "A flanking cavalry strike still leaves the reload window open. Once the formation breaks, enemy horse come through just the same.",
    },
    winExplain:
      "Pikes hold the charge; shot fire and reload under that cover: reach and shock, both.",
  },
];

export const GEARS = [];

export const GAME_META = {
  title: "How to fight · The new warfare",
  closing:
    "Morat, 1476: the Swiss pike square, mocked as cheese-eating peasants, defeats the Burgundian knights. Weapons make war both more dependent on royal supply and more open to common men.",
  storageIntro: "mil_intro_cleared_v1",
};
