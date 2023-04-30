import { Component, OnInit } from '@angular/core';
import { ALL_SETS, armor_sets } from 'constants/armor_sets';
import {
  ALL_WEAPONS_LIST,
  JEWELERY_ITEMS_ARR,
  all_weapons_list,
  item_quality,
  Jewelery_items_arr,
  all_items_list,
} from 'constants/items';
import {
  METAL_ITEMS_ARR,
  metal_items_arr,
} from 'constants/items/blacksmithing';
import {
  CLOTHING_ITEMS_ARR,
  clothing_items_arr,
} from 'constants/items/clothing';
import { WOOD_ITEMS_ARR, wood_items_arr } from 'constants/items/woodworking';
import { STYLES, styles } from 'constants/styles/styles';
import { WEAPON_TRAITS_ARR, weapon_traits } from 'constants/traits/trait_items';
import {
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
  armor_traits,
  Jewelery_traits,
  all_traits_list,
} from 'constants/traits/traits';
import { QUALITY, WRIT_TYPE, writ_type_options } from 'constants/writs';

@Component({
  selector: 'new-writ',
  templateUrl: 'new-writ.component.html',
  styleUrls: ['new-writ.component.scss'],
})
export class NewWritComponent implements OnInit {
  constructor() {}

  readonly writTypeOptions: writ_type_options[] = WRIT_TYPE;
  readonly qualities: item_quality[] = QUALITY;
  readonly blacksmithingItems: metal_items_arr[] = METAL_ITEMS_ARR;
  readonly clothingItems: clothing_items_arr[] = CLOTHING_ITEMS_ARR;
  readonly woodItems: wood_items_arr[] = WOOD_ITEMS_ARR;
  readonly jeweleryItems: Jewelery_items_arr[] = JEWELERY_ITEMS_ARR;
  readonly weaponTraits: weapon_traits[] = WEAPON_TRAITS_ARR;
  readonly weapons: all_weapons_list[] = ALL_WEAPONS_LIST;
  readonly armorTraits: armor_traits[] = ARMOR_TRAITS;
  readonly JeweleryTraits: Jewelery_traits[] = JEWELERY_TRAITS;
  readonly armorSets: armor_sets[] = ALL_SETS.sort();
  readonly styles: styles[] = STYLES.sort();

  writType: writ_type_options;
  quality: item_quality;
  item: all_items_list | null;
  trait: all_traits_list | null;
  armorSet: armor_sets | null;
  style: styles | null;
  reward: number = 0;

  showWeaponTraits: boolean = false;
  showArmorTraits: boolean = false;
  showJeweleryTraits: boolean = false;
  showStyle: boolean = false;

  writTypeChange(event: any): void {
    // console.log(event.target.value);
    switch (event.target.value) {
      case 'Jewelery':
        this.clearWritInfo();
        this.showJeweleryTraits = true;
        this.showStyle = false;
        break;
      case 'Blacksmithing':
        this.clearWritInfo();
        this.showStyle = true;

        break;
      case 'Woodworking':
        this.clearWritInfo();
        this.showStyle = true;

        break;
      case 'Clothing':
        this.clearWritInfo();
        this.showStyle = true;

        break;
    }
  }

  clearWritInfo(): void {
    this.setTraitDisplayToFalse();
    this.resetItemsAndTraits();
    this.resetArmorSet();
    this.resetStyle();
  }

  setTraitDisplayToFalse(): void {
    this.showWeaponTraits = false;
    this.showArmorTraits = false;
    this.showJeweleryTraits = false;
  }

  resetItemsAndTraits(): void {
    this.item = null;
    this.resetTrait();
  }

  resetTrait(): void {
    this.trait = null;
  }

  resetArmorSet(): void {
    this.armorSet = null;
  }

  resetStyle(): void {
    this.style = null;
  }

  resetReward(): void {
    this.reward = 0;
  }

  qualityChange(event: any): void {
    this.quality = event.target.value;
  }

  traitChanged(event: any): void {
    this.trait = event.target.value;
  }

  armorSetChange(event: any): void {
    this.armorSet = event.target.value;
  }

  styleChange(event: any): void {
    this.style = event.target.value;
  }

  rewardChanged(event: any): void {
    console.log('event - ', event);
    console.log('value - ', event.target.value);

    if (event.charCode >= 48) {
      this.reward = event.target.value;
    }
  }

  itemChange(event: any): void {
    this.resetTrait();
    console.log(event.target.value);
    const isWeapon = this.weapons.includes(event.target.value);
    const isJwelery = this.jeweleryItems.includes(event.target.value);

    if (isJwelery) {
      this.showJeweleryTraits = true;
      this.showWeaponTraits = false;
      this.showArmorTraits = false;
    } else {
      if (isWeapon) {
        this.showWeaponTraits = true;
        this.showArmorTraits = false;
      } else {
        this.showWeaponTraits = false;
        this.showArmorTraits = true;
      }
    }
  }

  ngOnInit() {
    return;
  }
}
