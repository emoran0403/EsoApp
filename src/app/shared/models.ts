export type skill = 'blacksmithing' | 'clothing' | 'woodworking' | 'jewelery';
export type item_class = 'armor' | 'weapons' | 'jewelery';
export type all_traits = weapon_traits[] | armor_traits[] | jewelery_traits[];

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
export type jewelery_traits =
  | 'Healthy'
  | 'Arcane'
  | 'Robust'
  | 'Bloodthirsty'
  | 'Harmony'
  | 'Infused'
  | 'Triune'
  | 'Protective'
  | 'Swift';
