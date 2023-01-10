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

export interface wood_items {
  WOOD_WEAPONS: wood_weapons[];
  WOOD_APPAREL: wood_apparel[];
}

export const METAL_ITEMS: wood_items = {
  WOOD_WEAPONS: WOOD_WEAPONS,
  WOOD_APPAREL: WOOD_APPAREL,
};
