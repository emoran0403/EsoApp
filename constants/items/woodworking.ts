export type wood_weapons =
  | 'Bow'
  | 'Inferno Staff'
  | 'Ice Staff'
  | 'Lightning Staff'
  | 'Restoration Staff';

export type wood_apparel = 'Shield';

export const WOOD_WEAPONS: wood_weapons[] = [
  'Bow',
  'Inferno Staff',
  'Ice Staff',
  'Lightning Staff',
  'Restoration Staff',
];
export const WOOD_APPAREL: wood_apparel[] = ['Shield'];

export const WOOD_ITEMS: wood_items = {
  WOOD_WEAPONS,
  WOOD_APPAREL,
};

export interface wood_items {
  WOOD_WEAPONS: wood_weapons[];
  WOOD_APPAREL: wood_apparel[];
}

export type wood_items_arr = wood_weapons | wood_apparel;
export const WOOD_ITEMS_ARR: wood_items_arr[] = [
  ...WOOD_WEAPONS,
  ...WOOD_APPAREL,
];
