import { armor_sets } from 'constants/armor_sets';
import { all_items_list, item_quality } from 'constants/items';
import { styles } from 'constants/styles/styles';
import { all_traits_list } from 'constants/traits/traits';

export interface writ {
  item: all_items_list;
  quality: item_quality;
  trait: all_traits_list;
  set: armor_sets;
  style: styles;
  reward: number;
}
