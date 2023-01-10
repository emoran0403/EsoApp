export type metal_weapons =
  | 'Axe'
  | 'Mace'
  | 'Sword'
  | 'Battle Axe'
  | 'Maul'
  | 'Greatsword'
  | 'Dagger';

export type metal_apparel =
  | 'Curaiss'
  | 'Sabatons'
  | 'Gauntlets'
  | 'Helm'
  | 'Greaves'
  | 'Pauldron'
  | 'Girdle';

export const METAL_WEAPONS: metal_weapons[] = [
  'Axe',
  'Mace',
  'Sword',
  'Battle Axe',
  'Maul',
  'Greatsword',
  'Dagger',
];
export const METAL_APPAREL: metal_apparel[] = [
  'Curaiss',
  'Sabatons',
  'Gauntlets',
  'Helm',
  'Greaves',
  'Pauldron',
  'Girdle',
];

export interface metal_items {
  METAL_WEAPONS: metal_weapons[];
  METAL_APPAREL: metal_apparel[];
}

export const METAL_ITEMS: metal_items = {
  METAL_WEAPONS,
  METAL_APPAREL,
};
