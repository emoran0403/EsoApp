export type weapon_traits =
  | 'Powered'
  | 'Charged'
  | 'Precise'
  | 'Infused'
  | 'Defending'
  | 'Training'
  | 'Sharpened'
  | 'Decisive'
  | 'Nirnhoned';
export type armor_traits =
  | 'Sturdy'
  | 'Impenetrable'
  | 'Reinforced'
  | 'Well-fitted'
  | 'Training'
  | 'Infused'
  | 'Invigorating'
  | 'Divines'
  | 'Nirnhoned';
export type Jewelery_traits =
  | 'Healthy'
  | 'Arcane'
  | 'Robust'
  | 'Bloodthirsty'
  | 'Harmony'
  | 'Infused'
  | 'Triune'
  | 'Protective'
  | 'Swift';

export const WEAPON_TRAITS: weapon_traits[] = [
  'Powered',
  'Charged',
  'Precise',
  'Infused',
  'Defending',
  'Training',
  'Sharpened',
  'Decisive',
  'Nirnhoned',
];

export const ARMOR_TRAITS: armor_traits[] = [
  'Sturdy',
  'Impenetrable',
  'Reinforced',
  'Well-fitted',
  'Training',
  'Infused',
  'Invigorating',
  'Divines',
  'Nirnhoned',
];

export const JEWELERY_TRAITS: Jewelery_traits[] = [
  'Healthy',
  'Arcane',
  'Robust',
  'Bloodthirsty',
  'Harmony',
  'Infused',
  'Triune',
  'Protective',
  'Swift',
];

export interface all_traits_obj {
  WEAPONS: weapon_traits[];
  ARMOR: armor_traits[];
  JEWELERY: Jewelery_traits[];
}

export const All_TRAITS: all_traits_obj = {
  WEAPONS: WEAPON_TRAITS,
  ARMOR: ARMOR_TRAITS,
  JEWELERY: JEWELERY_TRAITS,
};

export type all_traits_list = weapon_traits | armor_traits | Jewelery_traits;
