export interface all_traits {
  WEAPONS: weapon_traits[];
  ARMOR: armor_traits[];
  JEWELRY: jewelry_traits[];
}
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

export const All_TRAITS: all_traits = {
  WEAPONS: WEAPON_TRAITS,
  ARMOR: ARMOR_TRAITS,
  JEWELRY: JEWELRY_TRAITS,
};
