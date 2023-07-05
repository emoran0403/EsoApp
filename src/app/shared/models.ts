export type skill = 'blacksmithing' | 'clothing' | 'woodworking' | 'jewelery';
export type item_class = 'armor' | 'weapons' | 'jewelery';
export type crafting_types =
  | 'Blacksmithing - Weapons'
  | 'Blacksmithing - Armor'
  | 'Woodworking - Weapons'
  | 'Woodworking - Armor'
  | 'Clothing'
  | 'Jewelery';

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

export type all_trait_options =
  | weapon_traits[]
  | armor_traits[]
  | jewelery_traits[];

export type any_trait = weapon_traits | armor_traits | jewelery_traits;

export type weaponTraitedItem = {
  item: string;
  powered: boolean;
  charged: boolean;
  precise: boolean;
  infused: boolean;
  defending: boolean;
  training: boolean;
  sharpened: boolean;
  decisive: boolean;
  nirnhoned: boolean;
};

export type armorTraitedItem = {
  item: string;
  sturdy: boolean;
  impenetrable: boolean;
  reinforced: boolean;
  wellfitted: boolean;
  training: boolean;
  infused: boolean;
  invigorating: boolean;
  divines: boolean;
  nirnhoned: boolean;
};

export type jewelryTraitedItem = {
  item: string;
  healthy: boolean;
  arcane: boolean;
  robust: boolean;
  bloodthirsty: boolean;
  harmony: boolean;
  infused: boolean;
  triune: boolean;
  protective: boolean;
  swift: boolean;
};

export type item = weaponTraitedItem | armorTraitedItem | jewelryTraitedItem;

export type metal_weapons =
  | 'Axe'
  | 'Mace'
  | 'Sword'
  | 'Battle Axe'
  | 'Maul'
  | 'Greatsword'
  | 'Dagger';

export type metal_apparel =
  | 'Cuirass'
  | 'Sabatons'
  | 'Gauntlets'
  | 'Helm'
  | 'Greaves'
  | 'Pauldron'
  | 'Girdle';

export type metal_items = metal_weapons | metal_apparel;

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

export type clothing_items = cloth_apparel | leather_apparel;

export type wood_weapons =
  | 'Bow'
  | 'Inferno Staff'
  | 'Ice Staff'
  | 'Lightning Staff'
  | 'Restoration Staff';

export type wood_apparel = 'Shield';

export type wood_items = wood_weapons | wood_apparel;

export type jewelery_items = 'Necklace' | 'Ring';

export type all_items_list =
  | metal_items
  | clothing_items
  | wood_items
  | jewelery_items;
