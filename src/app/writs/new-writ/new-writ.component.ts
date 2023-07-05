import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ALL_SETS, armor_sets } from 'constants/armor_sets';
import {
  JEWELERY_ITEMS_ARR,
  item_quality,
  all_items_list,
} from 'constants/items';
import { METAL_APPAREL, METAL_WEAPONS } from 'constants/items/blacksmithing';
import { CLOTHING_ITEMS_ARR } from 'constants/items/clothing';
import { WOOD_APPAREL, WOOD_WEAPONS } from 'constants/items/woodworking';
import { STYLES, styles } from 'constants/styles/styles';
import { WEAPON_TRAITS_ARR } from 'constants/traits/trait_items';
import {
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
  armor_traits,
  jewelery_traits,
  all_traits_list,
  weapon_traits,
} from 'constants/traits/traits';
import { QUALITY, WRIT_TYPE, writ, writ_type_options } from 'constants/writs';
import { isNil } from 'lodash';
import { all_trait_options } from 'src/app/shared/models';
import { TypeAheadComponent } from 'src/app/shared/type-ahead/type-ahead.component';

@Component({
  selector: 'new-writ',
  templateUrl: 'new-writ.component.html',
  styleUrls: ['new-writ.component.scss'],
})
export class NewWritComponent implements OnInit {
  @ViewChild('typeaheadSet', { static: false })
  typeaheadSet!: TypeAheadComponent;

  @ViewChild('typeaheadStyle', { static: false })
  typeaheadStyle!: TypeAheadComponent;

  constructor() {}

  readonly writTypeOptions: writ_type_options[] = WRIT_TYPE;
  readonly qualities: item_quality[] = QUALITY;
  // readonly blacksmithingItems: metal_items_arr[] = METAL_ITEMS_ARR;
  // readonly clothingItems: clothing_items_arr[] = CLOTHING_ITEMS_ARR;
  // readonly woodItems: wood_items_arr[] = WOOD_ITEMS_ARR;
  readonly weaponTraits: weapon_traits[] = WEAPON_TRAITS_ARR;
  // readonly weapons: all_weapons_list[] = ALL_WEAPONS_LIST;
  readonly armorTraits: armor_traits[] = ARMOR_TRAITS;
  readonly jeweleryTraits: jewelery_traits[] = JEWELERY_TRAITS;
  readonly armorSets: armor_sets[] = ALL_SETS.sort();
  readonly styles: styles[] = STYLES.sort();
  readonly posIntRegex: RegExp = new RegExp('^[0-9]*[1-9][0-9]*$');

  readonly metalWeapons = METAL_WEAPONS;
  readonly metalArmor = METAL_APPAREL;
  readonly clothingArmor = CLOTHING_ITEMS_ARR;
  readonly woodWeapons = WOOD_WEAPONS;
  readonly woodArmor = WOOD_APPAREL;
  readonly jeweleryItems = JEWELERY_ITEMS_ARR;

  writType: writ_type_options | null;
  quality: item_quality | null;
  item: all_items_list | null;
  trait: all_traits_list | null;
  armorSet: armor_sets | null;
  style: styles | null;
  reward: number | null;

  showWeaponTraits: boolean = false;
  showArmorTraits: boolean = false;
  showJeweleryTraits: boolean = false;
  showStyle: boolean = true;

  writTypeChange(event: any): void {
    // console.log(event.target.value);
    switch (event.target.value) {
      case 'Jewelery':
        this.resetWritInfo();
        this.showJeweleryTraits = true;
        this.showStyle = false;
        break;
      case 'Blacksmithing':
        this.resetWritInfo();
        this.showStyle = true;

        break;
      case 'Woodworking':
        this.resetWritInfo();
        this.showStyle = true;

        break;
      case 'Clothing':
        this.resetWritInfo();
        this.showStyle = true;

        break;
    }
  }

  resetAll(): void {
    this.resetWritInfo();
    this.resetWritType();
    this.resetQuality();
    this.resetReward();
    this.showJeweleryTraits = false;
    this.showStyle = false;
  }

  resetWritInfo(): void {
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

  resetWritType(): void {
    this.writType = null;
  }
  resetQuality(): void {
    this.quality = null;
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
    this.reward = null;
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

  handleBeforeInput(event: any): void {
    // allow backspace and delete to work as intended
    const allowedKey =
      event.inputType === 'deleteContentBackward' ||
      event.inputType === 'deleteContentForward';

    // prevent those characters that get past the 'number' input type
    const disallowedKeys =
      event.data === null ||
      event.data.includes('-') ||
      event.data.includes('+') ||
      event.data.includes('.') ||
      event.data.includes('e');

    if (allowedKey) return;
    if (disallowedKeys) event.preventDefault();
  }

  rewardChanged(event: any): void {
    this.reward = Number.parseInt(event.target.value);
  }

  // itemChange(event: any): void {
  //   this.resetTrait();
  //   console.log(event.target.value);
  //   const isWeapon = this.weapons.includes(event.target.value);
  //   const isJwelery = this.jeweleryItems.includes(event.target.value);

  //   if (isJwelery) {
  //     this.showJeweleryTraits = true;
  //     this.showWeaponTraits = false;
  //     this.showArmorTraits = false;
  //   } else {
  //     if (isWeapon) {
  //       this.showWeaponTraits = true;
  //       this.showArmorTraits = false;
  //     } else {
  //       this.showWeaponTraits = false;
  //       this.showArmorTraits = true;
  //     }
  //   }
  // }

  writIsValid(writ: writ): boolean {
    return !Object.values(writ)
      .map((value) => isNil(value))
      .includes(true);
  }

  submitWrit(): void {
    const writToSubmit: writ = {
      is_jewelery: this.writType === 'Jewelery' ? true : false,
      quality: this.quality,
      item: this.item,
      trait: this.trait,
      armorSet: this.armorSet,
      style: this.style,
      reward: this.reward,
    };

    console.log('submitting writ: ', writToSubmit);
    if (this.writIsValid(writToSubmit)) {
      // make service call to submit writ
      // this.resetAll();
      return;
    }
    console.log('writ is not valid!');
  }

  ngOnInit() {
    return;
  }

  craftingTypes: string[] = [
    'Blacksmithing - Weapons',
    'Blacksmithing - Armor',
    'Woodworking - Weapons',
    'Woodworking - Armor',
    'Clothing',
    'Jewelery',
  ];

  traitOptions: all_trait_options;
  showWritType: boolean = false;
  handleOptionTypeChange(type: any): void {
    console.log('writ type: ', type);

    this.showWritType = true;
    this.showItem = false;
    this.showTrait = false;

    switch (type) {
      case 'Blacksmithing - Weapons':
        this.itemOptions = this.metalWeapons;
        this.writType = 'Blacksmithing';
        this.traitOptions = this.weaponTraits;
        break;
      case 'Blacksmithing - Armor':
        this.itemOptions = this.metalArmor;
        this.writType = 'Blacksmithing';
        this.traitOptions = this.armorTraits;
        break;
      case 'Woodworking - Weapons':
        this.itemOptions = this.woodWeapons;
        this.writType = 'Woodworking';
        this.traitOptions = this.weaponTraits;
        break;
      case 'Woodworking - Armor':
        this.itemOptions = this.woodArmor;
        this.writType = 'Woodworking';
        this.traitOptions = this.armorTraits;
        break;
      case 'Clothing':
        this.itemOptions = this.clothingArmor;
        this.writType = 'Clothing';
        this.traitOptions = this.armorTraits;
        break;
      case 'Jewelery':
        this.itemOptions = this.jeweleryItems;
        this.writType = 'Jewelery';
        this.traitOptions = this.jeweleryTraits;
        break;
    }

    if (this.writType === 'Jewelery') {
      this.showStyle = true;
    } else {
      this.showStyle = false;
    }
  }

  showQuality: boolean = false;
  handleQualityChange(quality: any): void {
    console.log('quality: ', quality);
    this.quality = quality;
    this.showQuality = true;
  }

  showSet: boolean = false;
  handleSetChange(set: string): void {
    this.armorSet = set as armor_sets;
    console.log('set change event: ', set);
  }

  handleStyleChange(style: string): void {
    this.style = style as styles;
    console.log('style change event: ', style);
  }

  itemOptions: string[];
  showItem: boolean = true;
  handleItemChange(item: any): void {
    this.item = item;
    console.log('item: ', item);
  }

  showTrait: boolean = true;
  handleTraitChange(trait: any): void {
    this.trait = trait;
    console.log('trait: ', trait);
  }

  onInputClick(input: 'set' | 'style'): void {
    if (input === 'set') {
      this.typeaheadSet.focusInput();
    } else {
      this.typeaheadStyle.focusInput();
    }
  }
}
