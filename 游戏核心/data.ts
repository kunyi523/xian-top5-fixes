export const RARITY = ["凡人", "炼气", "筑基", "金丹", "元婴", "化神", "合体", "仙人"] as const;
export const RARITY_COLOR = [
  "#8a8478", // 凡人 · gray ink
  "#4a6b66", // 炼气 · teal-ink
  "#3a5278", // 筑基 · blue-ink
  "#a63d32", // 金丹 · cinnabar
  "#6b3a7a", // 元婴 · purple-ink
  "#1c1914", // 化神 · near-black
  "#5c4820", // 合体 · dark gold-brown
  "#2a2410", // 仙人 · near-black gold tint
] as const;

export type BonusKind = "dps" | "click" | "jade" | "crit" | "explore" | "sword" | "offline" | "dao" | "startQi";

export type BuildingDef = {
  id: string;
  name: string;
  sprite: string;
  flavor: string;
  perk: string;
  tiers: [string, string, string];
  baseCost: number;
  costScale: number;
  baseDps: number;
  color: string;
  projectile: "orb" | "sword" | "bolt" | "spark";
};

export const BUILDINGS: BuildingDef[] = [
  {
    id: "hall",
    name: "宗门大殿",
    sprite: "hall",
    flavor: "开山立派。香火越旺，满山建筑越强。",
    perk: "香火：全宗伤害随等级提升",
    tiers: ["草堂", "山门", "仙殿"],
    baseCost: 15,
    costScale: 1.15,
    baseDps: 0.5,
    color: "#1c1914",
    projectile: "orb",
  },
  {
    id: "house",
    name: "外门院",
    sprite: "house",
    flavor: "水边那片外院。灯亮了，杂役就会自己点化。",
    perk: "人海：缓慢自动点化，并多开秘境槽",
    tiers: ["茅屋", "外院", "万弟子"],
    baseCost: 100,
    costScale: 1.14,
    baseDps: 3,
    color: "#3a3630",
    projectile: "spark",
  },
  {
    id: "sword",
    name: "飞剑阁",
    sprite: "sword",
    flavor: "右峰那座剑亭。剑修好了，就会自己飞。",
    perk: "剑雨：飞剑阁、诛仙阵额外增伤",
    tiers: ["剑冢", "剑阁", "万剑"],
    baseCost: 1100,
    costScale: 1.13,
    baseDps: 18,
    color: "#2a2622",
    projectile: "sword",
  },
  {
    id: "array",
    name: "诛仙阵",
    sprite: "array",
    flavor: "山左那片残阵。先修复阵纹，再一层层加持。",
    perk: "阵眼：对天道层额外增伤",
    tiers: ["残纹", "诛仙", "伐天"],
    baseCost: 12000,
    costScale: 1.13,
    baseDps: 92,
    color: "#a63d32",
    projectile: "sword",
  },
  {
    id: "mine",
    name: "灵矿洞",
    sprite: "mine",
    flavor: "山腹那口矿洞。疏通龙脉，矿自己往外渗。",
    perk: "灵晶：挂机产出灵矿",
    tiers: ["矿眼", "龙脉", "灵渊"],
    baseCost: 130000,
    costScale: 1.12,
    baseDps: 480,
    color: "#4a453e",
    projectile: "orb",
  },
  {
    id: "tower",
    name: "神霄塔",
    sprite: "tower",
    flavor: "右峰那座古塔。雷纹接上，点化带神雷。",
    perk: "神雷：强化点击劫核",
    tiers: ["木塔", "神霄", "九天"],
    baseCost: 1.4e6,
    costScale: 1.12,
    baseDps: 2600,
    color: "#1c1914",
    projectile: "bolt",
  },
  {
    id: "mirror",
    name: "聚灵镜",
    sprite: "mirror",
    flavor: "崖上那面旧镜。擦亮了，仙果来得勤。",
    perk: "聚灵：点化增强，仙果更频",
    tiers: ["铜镜", "聚灵", "星河"],
    baseCost: 2.0e7,
    costScale: 1.12,
    baseDps: 14000,
    color: "#6e2a24",
    projectile: "orb",
  },
  {
    id: "alchemy",
    name: "太乙丹阁",
    sprite: "alchemy",
    flavor: "瀑侧那座旧丹房。炉火一亮，就开始滴草。",
    perk: "丹火：挂机产出灵草",
    tiers: ["土炉", "丹阁", "太乙"],
    baseCost: 3.3e8,
    costScale: 1.11,
    baseDps: 78000,
    color: "#a63d32",
    projectile: "spark",
  },
];

export type DiscipleDef = {
  id: string;
  name: string;
  title: string;
  rarity: number;
  bonus: { kind: BonusKind; value: number };
  flavor: string;
  sprite: "mascot" | "outer" | "elder" | "sword" | "immortal";
  portrait: string;
};

export const DISCIPLES: DiscipleDef[] = [
  { id: "ago", name: "阿狗", title: "外门杂役", rarity: 0, bonus: { kind: "dps", value: 0.012 }, flavor: "宗门扫地的。据说扫着扫着扫出了大道。", sprite: "outer", portrait: "ago" },
  { id: "xiaohua", name: "小花", title: "药园童子", rarity: 0, bonus: { kind: "explore", value: 0.03 }, flavor: "认得三百种能吃的草，其中十二种真能吃。", sprite: "mascot", portrait: "xiaohua" },
  { id: "linzhou", name: "林小舟", title: "外门弟子", rarity: 1, bonus: { kind: "click", value: 0.04 }, flavor: "每天打坐到腿麻，腿麻即是悟道。", sprite: "outer", portrait: "ago" },
  { id: "qinghe", name: "清荷", title: "记名弟子", rarity: 1, bonus: { kind: "dps", value: 0.03 }, flavor: "话很少，剑很快。", sprite: "mascot", portrait: "qinghe" },
  { id: "suqing", name: "苏清寒", title: "内门执事", rarity: 2, bonus: { kind: "jade", value: 0.08 }, flavor: "账房出身，把灵石算成了气运。", sprite: "elder", portrait: "chiyun" },
  { id: "tiewei", name: "铁卫", title: "护山执事", rarity: 2, bonus: { kind: "dps", value: 0.05 }, flavor: "一块会走路的盾。", sprite: "elder", portrait: "tiewei" },
  { id: "mowuchen", name: "墨无尘", title: "金丹长老", rarity: 3, bonus: { kind: "sword", value: 0.12 }, flavor: "一剑从东边的云里来。金丹以上可御剑伐劫。", sprite: "elder", portrait: "jianjiu" },
  { id: "chiyun", name: "赤云真人", title: "丹堂主事", rarity: 3, bonus: { kind: "click", value: 0.1 }, flavor: "炼丹炼到炉鼎认他当师傅。金丹以上可御剑伐劫。", sprite: "elder", portrait: "chiyun" },
  { id: "yunjun", name: "云中君", title: "元婴真君", rarity: 4, bonus: { kind: "dps", value: 0.12 }, flavor: "人在阁中，神在云上。御剑绕劫核而斩。", sprite: "sword", portrait: "xuantian" },
  { id: "luohua", name: "落花神君", title: "元婴神君", rarity: 4, bonus: { kind: "explore", value: 0.18 }, flavor: "专挖别人挖不到的秘境。御剑绕劫核而斩。", sprite: "mascot", portrait: "xiaohua" },
  { id: "jianjiu", name: "剑九", title: "化神剑仙", rarity: 5, bonus: { kind: "sword", value: 0.22 }, flavor: "第九剑从未出鞘。据说出鞘那天，天道要让路。", sprite: "sword", portrait: "jianjiu" },
  { id: "mingyue", name: "明月尊者", title: "化神尊者", rarity: 5, bonus: { kind: "crit", value: 0.08 }, flavor: "一瞥即是暴击。御剑绕劫核而斩。", sprite: "sword", portrait: "qinghe" },
  { id: "xuantian", name: "玄天老祖", title: "合体老祖", rarity: 6, bonus: { kind: "dps", value: 0.22 }, flavor: "闭关三千年，出来发现宗门改名了。", sprite: "immortal", portrait: "xuantian" },
  { id: "wangji", name: "太上忘机", title: "散仙", rarity: 6, bonus: { kind: "offline", value: 0.35 }, flavor: "睡着都在修炼。令人羡慕。", sprite: "immortal", portrait: "xuantian" },
  { id: "tiandao", name: "无名", title: "仙人", rarity: 7, bonus: { kind: "dps", value: 0.4 }, flavor: "没有名字。天道记得他就够了。", sprite: "immortal", portrait: "chuchen" },
  { id: "chuchen", name: "初尘", title: "仙人", rarity: 7, bonus: { kind: "click", value: 0.45 }, flavor: "第一缕灵气凝成的人。点一下，世界亮一下。", sprite: "immortal", portrait: "chuchen" },
];

export const GACHA_WEIGHTS = [46, 26, 14, 8, 4, 1.4, 0.45, 0.15];

export type SkillDef = {
  id: string;
  name: string;
  desc: string;
  max: number;
  cost: number;
  costScale: number;
  kind: BonusKind;
  value: number;
};

export const SKILLS: SkillDef[] = [
  { id: "breath", name: "吐纳诀", desc: "全宗伤害", max: 20, cost: 1, costScale: 1.45, kind: "dps", value: 0.08 },
  { id: "mind", name: "神识篇", desc: "点化灵气", max: 20, cost: 1, costScale: 1.45, kind: "click", value: 0.08 },
  { id: "swordheart", name: "剑心", desc: "剑系建筑增伤", max: 15, cost: 2, costScale: 1.5, kind: "sword", value: 0.1 },
  { id: "luck", name: "气运", desc: "仙玉与暴击", max: 12, cost: 2, costScale: 1.55, kind: "jade", value: 0.06 },
  { id: "cave", name: "洞府", desc: "离线收益", max: 12, cost: 2, costScale: 1.5, kind: "offline", value: 0.12 },
  { id: "seed", name: "道种", desc: "渡劫后起步灵气", max: 8, cost: 3, costScale: 1.65, kind: "startQi", value: 1 },
  { id: "senseDao", name: "天道感应", desc: "渡劫道果与双倍机率", max: 10, cost: 2, costScale: 1.55, kind: "dao", value: 0.05 },
];

export type ClickUpgradeDef = {
  id: string;
  name: string;
  desc: string;
  baseCost: number;
  scale: number;
  max?: number;
  needSense?: number;
};

export const CLICK_UPGRADES: ClickUpgradeDef[] = [
  { id: "sense", name: "神识凝聚", desc: "每一次点化更重", baseCost: 20, scale: 1.18 },
  { id: "critC", name: "天机", desc: "提高暴击率", baseCost: 80, scale: 1.22, max: 20 },
  { id: "critD", name: "灵犀", desc: "提高暴击伤害", baseCost: 120, scale: 1.24, max: 16 },
  { id: "auto", name: "无为", desc: "自动点化。需神识凝聚 5 级", baseCost: 400, scale: 1.28, max: 25, needSense: 5 },
];

export type CraftDef = {
  id: string;
  name: string;
  desc: string;
  max: number;
  herbs: number;
  ore: number;
  jade: number;
  kind: BonusKind;
  value: number;
};

export const CRAFTS: CraftDef[] = [
  { id: "talisman", name: "聚灵符", desc: "点化增强", max: 10, herbs: 8, ore: 2, jade: 2, kind: "click", value: 0.06 },
  { id: "swordblank", name: "剑胚", desc: "剑系增伤", max: 10, herbs: 4, ore: 10, jade: 3, kind: "sword", value: 0.08 },
  { id: "pill", name: "培元丹", desc: "全宗伤害", max: 10, herbs: 12, ore: 4, jade: 2, kind: "dps", value: 0.07 },
  { id: "mirrorbit", name: "镜屑", desc: "暴击", max: 8, herbs: 6, ore: 8, jade: 4, kind: "crit", value: 0.02 },
];

export type RealmDef = {
  id: string;
  name: string;
  duration: number;
  unlockLayer: number;
  jade: [number, number];
  herbs: [number, number];
  ore: [number, number];
  qi: number;
};

export const REALMS: RealmDef[] = [
  { id: "backhill", name: "后山", duration: 20, unlockLayer: 0, jade: [1, 2], herbs: [1, 3], ore: [0, 1], qi: 40 },
  { id: "mist", name: "紫霞涧", duration: 45, unlockLayer: 2, jade: [2, 4], herbs: [3, 6], ore: [1, 2], qi: 180 },
  { id: "swordtomb", name: "古剑冢", duration: 90, unlockLayer: 6, jade: [3, 6], herbs: [2, 5], ore: [3, 6], qi: 700 },
  { id: "ascend", name: "登仙台", duration: 150, unlockLayer: 12, jade: [5, 10], herbs: [4, 8], ore: [4, 8], qi: 2400 },
];
