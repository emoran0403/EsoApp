import { metal_items_obj, METAL_ITEMS_OBJ } from './blacksmithing';
import { clothing_items, CLOTHING_ITEMS } from './clothing';
import { wood_items, WOOD_ITEMS } from './woodworking';

export interface all_items_obj {
  METAL_ITEMS_OBJ: metal_items_obj;
  CLOTHING_ITEMS: clothing_items;
  WOOD_ITEMS: wood_items;
}

export const ALL_ITEMS_OBJ: all_items_obj = {
  METAL_ITEMS_OBJ,
  CLOTHING_ITEMS,
  WOOD_ITEMS,
};
export type Jewelery_items_arr = 'Necklace' | 'Ring';

export const JEWELERY_ITEMS_ARR: Jewelery_items_arr[] = ['Necklace', 'Ring'];

export const ALL_WEAPONS_LIST: all_weapons_list[] = [
  'Axe',
  'Mace',
  'Sword',
  'Battle Axe',
  'Maul',
  'Greatsword',
  'Dagger',
  'Bow',
  'Inferno Staff',
  'Ice Staff',
  'Lightning Staff',
  'Restoration Staff',
];

export type all_weapons_list =
  | 'Axe'
  | 'Mace'
  | 'Sword'
  | 'Battle Axe'
  | 'Maul'
  | 'Greatsword'
  | 'Dagger'
  | 'Bow'
  | 'Inferno Staff'
  | 'Ice Staff'
  | 'Lightning Staff'
  | 'Restoration Staff';

export const ALL_APPAREL_LIST: all_apparel_list[] = [
  'Shield',
  'Robe',
  'Shirt',
  'Shoes',
  'Gloves',
  'Hat',
  'Breeches',
  'Epaulets',
  'Sash',
  'Jack',
  'Boots',
  'Bracers',
  'Helmet',
  'Guards',
  'Arm Cops',
  'Belt',
  'Curaiss',
  'Sabatons',
  'Gauntlets',
  'Helm',
  'Greaves',
  'Pauldron',
  'Girdle',
];

export type all_apparel_list =
  | 'Shield'
  | 'Robe'
  | 'Shirt'
  | 'Shoes'
  | 'Gloves'
  | 'Hat'
  | 'Breeches'
  | 'Epaulets'
  | 'Sash'
  | 'Jack'
  | 'Boots'
  | 'Bracers'
  | 'Helmet'
  | 'Guards'
  | 'Arm Cops'
  | 'Belt'
  | 'Curaiss'
  | 'Sabatons'
  | 'Gauntlets'
  | 'Helm'
  | 'Greaves'
  | 'Pauldron'
  | 'Girdle';

export type all_items_list =
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

export const ALL_ITEMS_LIST: all_items_list[] = [
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

export interface unlocks_obj {
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

export const UNLOCKS_OBJ: unlocks_obj = {
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

export type unlocks_list =
  | 'AXES'
  | 'BELTS'
  | 'BOOTS'
  | 'BOWS'
  | 'CHESTS'
  | 'DAGGERS'
  | 'GLOVES'
  | 'HELMETS'
  | 'LEGS'
  | 'MACES'
  | 'SHIELDS'
  | 'SHOULDERS'
  | 'STAVES'
  | 'SWORDS';

export type unlocks_list_for_display =
  | 'Axes'
  | 'Belts'
  | 'Boots'
  | 'Bows'
  | 'Chests'
  | 'Daggers'
  | 'Gloves'
  | 'Helmets'
  | 'Legs'
  | 'Maces'
  | 'Shields'
  | 'Shoulders'
  | 'Staves'
  | 'Swords';

export const UNLOCKS_LIST: unlocks_list[] = [
  'AXES',
  'BELTS',
  'BOOTS',
  'BOWS',
  'CHESTS',
  'DAGGERS',
  'GLOVES',
  'HELMETS',
  'LEGS',
  'MACES',
  'SHIELDS',
  'SHOULDERS',
  'STAVES',
  'SWORDS',
];

export const UNLOCKS_LIST_FOR_DISPLAY: unlocks_list_for_display[] = [
  'Axes',
  'Belts',
  'Boots',
  'Bows',
  'Chests',
  'Daggers',
  'Gloves',
  'Helmets',
  'Legs',
  'Maces',
  'Shields',
  'Shoulders',
  'Staves',
  'Swords',
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

export type item_quality = 'Epic' | 'Legendary';
