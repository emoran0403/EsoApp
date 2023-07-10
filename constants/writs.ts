import { armor_sets } from 'constants/armor_sets';
import { all_items_list, item_quality } from 'constants/items';
import { styles } from 'constants/styles/styles';
import { all_traits_list } from 'constants/traits/traits';

export interface writ {
  is_jewelery: boolean;
  item: all_items_list;
  quality: item_quality;
  trait: all_traits_list;
  set: armor_sets;
  style?: styles;
  reward: number;
}

export interface fe_writ extends writ {
  hasTrait: boolean;
  hasArmorSet: boolean;
  hasStyle: boolean;
}
export type writ_type_options =
  | 'Blacksmithing'
  | 'Woodworking'
  | 'Clothing'
  | 'Jewelery';

export const WRIT_TYPE: writ_type_options[] = [
  'Blacksmithing',
  'Woodworking',
  'Clothing',
  'Jewelery',
];

export const QUALITY: item_quality[] = ['Epic', 'Legendary'];
