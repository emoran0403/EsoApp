export const UNLOCKS: unlocks = {
  AXES: ['Battle Axe', 'Axe'],
  BELTS: ['Belt', 'Sash', 'Girdle'],
  BOOTS: ['Sabatons', 'Shoes', 'Boots'],
  BOWS: ['Bow'],
  CHESTS: ['Robe', 'Shirt', 'Jack', 'Curaiss'],
  DAGGERS: ['Dagger'],
  GLOVES: ['Gauntlets', 'Gloves', 'Bracers'],
  HELMETS: ['Helm', 'Hat', 'Helmet'],
  LEGS: ['Greaves', 'Breeches', 'Guards'],
  MACES: ['Maul', 'Mace'],
  SHIELDS: ['Shield'],
  SHOULDERS: ['Arm Cops', 'Pauldron', 'Epaulets'],
  STAVES: [
    'Inferno Staff',
    'Ice Staff',
    'Lightning Staff',
    'Restoration Staff',
  ],
  SWORDS: ['Sword', 'Greatsword'],
};

export type all_items =
  | 'Battle Axe'
  | 'Axe'
  | 'Belt'
  | 'Sash'
  | 'Girdle'
  | 'Sabatons'
  | 'Shoes'
  | 'Boots'
  | 'Bow'
  | 'Robe'
  | 'Shirt'
  | 'Jack'
  | 'Curaiss'
  | 'Dagger'
  | 'Gauntlets'
  | 'Gloves'
  | 'Bracers'
  | 'Helm'
  | 'Hat'
  | 'Helmet'
  | 'Greaves'
  | 'Breeches'
  | 'Guards'
  | 'Maul'
  | 'Mace'
  | 'Shield'
  | 'Arm Cops'
  | 'Pauldron'
  | 'Epaulets'
  | 'Inferno Staff'
  | 'Ice Staff'
  | 'Lightning Staff'
  | 'Restoration Staff'
  | 'Sword'
  | 'Greatsword';

export const ALL_ITEMS = [
  'Battle Axe',
  'Axe',
  'Belt',
  'Sash',
  'Girdle',
  'Sabatons',
  'Shoes',
  'Boots',
  'Bow',
  'Robe',
  'Shirt',
  'Jack',
  'Curaiss',
  'Dagger',
  'Gauntlets',
  'Gloves',
  'Bracers',
  'Helm',
  'Hat',
  'Helmet',
  'Greaves',
  'Breeches',
  'Guards',
  'Maul',
  'Mace',
  'Shield',
  'Arm Cops',
  'Pauldron',
  'Epaulets',
  'Inferno Staff',
  'Ice Staff',
  'Lightning Staff',
  'Restoration Staff',
  'Sword',
  'Greatsword',
];

export type axes = 'Battle Axe' | 'Axe';
export type belts = 'Belt' | 'Sash' | 'Girdle';
export type boots = 'Sabatons' | 'Shoes' | 'Boots';
export type bows = 'Bow';
export type chests = 'Robe' | 'Shirt' | 'Jack' | 'Curaiss';
export type daggers = 'Dagger';
export type gloves = 'Gauntlets' | 'Gloves' | 'Bracers';
export type helmets = 'Helm' | 'Hat' | 'Helmet';
export type legs = 'Greaves' | 'Breeches' | 'Guards';
export type maces = 'Maul' | 'Mace';
export type shields = 'Shield';
export type shoulders = 'Arm Cops' | 'Pauldron' | 'Epaulets';
export type staves =
  | 'Inferno Staff'
  | 'Ice Staff'
  | 'Lightning Staff'
  | 'Restoration Staff';

export type swords = 'Sword' | 'Greatsword';

export interface unlocks {
  AXES: axes[];
  BELTS: belts[];
  BOOTS: boots[];
  BOWS: bows[];
  CHESTS: chests[];
  DAGGERS: daggers[];
  GLOVES: gloves[];
  HELMETS: helmets[];
  LEGS: legs[];
  MACES: maces[];
  SHIELDS: shields[];
  SHOULDERS: shoulders[];
  STAVES: staves[];
  SWORDS: swords[];
}
