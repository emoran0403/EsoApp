export type weapon_trait_items =
  | 'Chysolite'
  | 'Amethyst'
  | 'Ruby'
  | 'Jade'
  | 'Turquoise'
  | 'Carnelian'
  | 'Fire'
  | 'Citrine'
  | 'Potent Nirncrux';
export type armor_trait_items =
  | 'Quartz'
  | 'Diamond'
  | 'Sardonyx'
  | 'Almandine'
  | 'Emerald'
  | 'Bloodstone'
  | 'Garnet'
  | 'Sapphire'
  | 'Fortified Nirncrux';
export type jewelry_trait_items =
  | 'Antimony'
  | 'Cobalt'
  | 'Zinc'
  | 'Slaughterstone'
  | 'Dibellium'
  | 'Aurbic Amber'
  | 'Dawn-Prism'
  | 'Titanium'
  | 'Gilding Wax';

export const WEAPON_TRAIT_ITEMS: weapon_trait_items[] = [
  'Chysolite',
  'Amethyst',
  'Ruby',
  'Jade',
  'Turquoise',
  'Carnelian',
  'Fire',
  'Citrine',
  'Potent Nirncrux',
];
export const ARMOR_TRAIT_ITEMS: armor_trait_items[] = [
  'Quartz',
  'Diamond',
  'Sardonyx',
  'Almandine',
  'Emerald',
  'Bloodstone',
  'Garnet',
  'Sapphire',
  'Fortified Nirncrux',
];
export const JEWELRY_TRAIT_ITEMS: jewelry_trait_items[] = [
  'Antimony',
  'Cobalt',
  'Zinc',
  'Slaughterstone',
  'Dibellium',
  'Aurbic Amber',
  'Dawn-Prism',
  'Titanium',
  'Gilding Wax',
];

export interface weapon_trait_items_info {
  Powered: weapon_trait_items;
  Charged: weapon_trait_items;
  Precise: weapon_trait_items;
  Infused: weapon_trait_items;
  Defending: weapon_trait_items;
  Training: weapon_trait_items;
  Sharpened: weapon_trait_items;
  Decisive: weapon_trait_items;
  Nirnhoned: weapon_trait_items;
}
export const WEAPON_TRAIT_ITEMS_INFO: weapon_trait_items_info = {
  Powered: 'Chysolite',
  Charged: 'Amethyst',
  Precise: 'Ruby',
  Infused: 'Jade',
  Defending: 'Turquoise',
  Training: 'Carnelian',
  Sharpened: 'Fire',
  Decisive: 'Citrine',
  Nirnhoned: 'Potent Nirncrux',
};

export interface armor_trait_items_info {
  Sturdy: armor_trait_items;
  Impenetrable: armor_trait_items;
  Reinforced: armor_trait_items;
  Well_fitted: armor_trait_items;
  Training: armor_trait_items;
  Infused: armor_trait_items;
  Invigorating: armor_trait_items;
  Divines: armor_trait_items;
  Nirnhoned: armor_trait_items;
}
export const ARMOR_TRAIT_ITEMS_INFO = {
  Sturdy: 'Quartz',
  Impenetrable: 'Diamond',
  Reinforced: 'Sardonyx',
  Well_fitted: 'Almandine',
  Training: 'Emerald',
  Infused: 'Bloodstone',
  Invigorating: 'Garnet',
  Divines: 'Sapphire',
  Nirnhoned: 'Fortified Nirncrux',
};

export interface jewelry_trait_items_info {
  Healthy: jewelry_trait_items;
  Arcane: jewelry_trait_items;
  Robust: jewelry_trait_items;
  Bloodthirsty: jewelry_trait_items;
  Harmony: jewelry_trait_items;
  Infused: jewelry_trait_items;
  Triune: jewelry_trait_items;
  Protective: jewelry_trait_items;
  Swift: jewelry_trait_items;
}
export const JEWELRY_TRAIT_ITEMS_INFO = {
  Healthy: 'Antimony',
  Arcane: 'Cobalt',
  Robust: 'Zinc',
  Bloodthirsty: 'Slaughterstone',
  Harmony: 'Dibellium',
  Infused: 'Aurbic Amber',
  Triune: 'Dawn-Prism',
  Protective: 'Titanium',
  Swift: 'Gilding Wax',
};

export interface trait_items {
  WEAPONS: weapon_trait_items[];
  ARMOR: armor_trait_items[];
  JEWELRY: jewelry_trait_items[];
}
export const TRAIT_ITEMS: trait_items = {
  WEAPONS: WEAPON_TRAIT_ITEMS,
  ARMOR: ARMOR_TRAIT_ITEMS,
  JEWELRY: JEWELRY_TRAIT_ITEMS,
};
