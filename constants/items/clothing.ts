export type cloth_apparel =
  | 'Robe'
  | 'Shirt'
  | 'Shoes'
  | 'Gloves'
  | 'Hat'
  | 'Breeches'
  | 'Epaulets'
  | 'Sash';

export type leather_apparel =
  | 'Jack'
  | 'Boots'
  | 'Bracers'
  | 'Helmet'
  | 'Guards'
  | 'Arm Cops'
  | 'Belt';

export const CLOTH_APPAREL: cloth_apparel[] = [
  'Robe',
  'Shirt',
  'Shoes',
  'Gloves',
  'Hat',
  'Breeches',
  'Epaulets',
  'Sash',
];
export const LEATHER_APPAREL: leather_apparel[] = [
  'Jack',
  'Boots',
  'Bracers',
  'Helmet',
  'Guards',
  'Arm Cops',
  'Belt',
];

export interface clothing_items {
  CLOTH_APPAREL: cloth_apparel[];
  LEATHER_APPAREL: leather_apparel[];
}

export const CLOTHING_ITEMS: clothing_items = {
  CLOTH_APPAREL: CLOTH_APPAREL,
  LEATHER_APPAREL: LEATHER_APPAREL,
};

export type clothing_items_arr = cloth_apparel | leather_apparel;
export const CLOTHING_ITEMS_ARR: clothing_items_arr[] = [
  ...CLOTH_APPAREL,
  ...LEATHER_APPAREL,
];
