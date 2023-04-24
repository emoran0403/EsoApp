import { Component, OnInit } from '@angular/core';
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
  readonly JeweleryItems: Jewelery_items_arr[] = JEWELERY_ITEMS_ARR;
  readonly weaponTraits: weapon_traits[] = WEAPON_TRAITS_ARR;
  readonly weapons: all_weapons_list[] = ALL_WEAPONS_LIST;
  readonly armorTraits: armor_traits[] = ARMOR_TRAITS;
  readonly JeweleryTraits: Jewelery_traits[] = JEWELERY_TRAITS;

  writType: writ_type_options;
  quality: item_quality;
  item: all_items_list | null;
  trait: all_traits_list | null;

  showWeaponTraits: boolean = false;
  showArmorTraits: boolean = false;
  showJeweleryTraits: boolean = false;

  writTypeChange(event: any): void {
    // console.log(event.target.value);
    switch (event.target.value) {
      case 'Jewelery':
        this.showJeweleryTraits = true;
        break;
      case 'Blacksmithing':
        this.setTraitDisplayToFalse();
        this.resetItemsAndTraits();
        break;
      case 'Woodworking':
        this.setTraitDisplayToFalse();
        this.resetItemsAndTraits();
        break;
      case 'Clothing':
        this.setTraitDisplayToFalse();
        this.resetItemsAndTraits();
        break;
    }
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

  qualityChange(event: any): void {
    console.log(event.target.value);
  }

  itemChange(event: any): void {
    console.log(event.target.value);
    this.resetTrait();
    const isWeapon = this.weapons.includes(event.target.value);
    if (isWeapon) {
      this.showWeaponTraits = true;
      this.showArmorTraits = false;
    } else {
      this.showWeaponTraits = false;
      this.showArmorTraits = true;
    }
  }

  ngOnInit() {
    return;
  }
}
