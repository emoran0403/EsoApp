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
export type jewelry_traits =
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

export const JEWELRY_TRAITS: jewelry_traits[] = [
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
  JEWELRY: jewelry_traits[];
}

export const All_TRAITS: all_traits_obj = {
  WEAPONS: WEAPON_TRAITS,
  ARMOR: ARMOR_TRAITS,
  JEWELRY: JEWELRY_TRAITS,
};

export type all_traits_list = weapon_traits | armor_traits | jewelry_traits;
