import { Component, OnInit, ViewChild } from '@angular/core';
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
import { WritsService } from 'src/app/services/writs.service';
import { CRATFING_TYPES } from 'src/app/shared/constants';
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

  constructor(private readonly writs: WritsService) {}

  readonly writTypeOptions: writ_type_options[] = WRIT_TYPE;
  readonly qualities: item_quality[] = QUALITY;
  readonly weaponTraits: weapon_traits[] = WEAPON_TRAITS_ARR;
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

  readonly craftingTypes = CRATFING_TYPES;

  // Writ information
  writType: writ_type_options | null;
  quality: item_quality | null;
  item: all_items_list | null;
  trait: all_traits_list | null;
  set: armor_sets | null;
  style: styles | null;
  reward: number | null;
  writToSubmit: writ;

  // Options for select-dropdowns
  traitOptions: all_trait_options;
  itemOptions: string[];

  // Display booleans
  showStyle: boolean = true;
  showWritType: boolean = false;
  showQuality: boolean = false;
  showItem: boolean = true;
  showTrait: boolean = true;
  showSubmission: boolean = false;
  submittable: boolean = false;
  submissionStatus: boolean;

  resetterForTypeahead = true;

  ngOnInit() {
    this.writToSubmit = {
      is_jewelery: this.writType === 'Jewelery' ? true : false,
      quality: this.quality,
      item: this.item,
      trait: this.trait,
      set: this.set,
      style: this.style,
      reward: this.reward,
    };

    // console.log('this.writToSubmit in On Init: ', this.writToSubmit);
    return;
  }

  /**
   * Resets writ info and display booleans
   */
  resetAll(): void {
    this.resetWritInfo();
    this.resetDisplayBooleans();
    this.resetterForTypeahead = false;
    setTimeout(() => {
      this.resetterForTypeahead = true;
    }, 0);
  }

  /**
   * Resets Writ info
   */
  resetWritInfo(): void {
    this.writType = null;
    this.quality = null;
    this.item = null;
    this.trait = null;
    this.set = null;
    this.style = null;
    this.reward = null;

    this.writToSubmit = {
      is_jewelery: false,
      quality: null,
      item: null,
      trait: null,
      set: null,
      style: null,
      reward: null,
    };

    // console.log('this.writToSubmit in reset: ', this.writToSubmit);
  }

  /**
   * Resets display booleans to default values
   */
  resetDisplayBooleans(): void {
    this.showStyle = true;
    this.showWritType = false;
    this.showQuality = false;
    this.showItem = true;
    this.showTrait = true;
  }

  /**
   * Used to help sanitize reward inputs
   * @param event
   * @returns
   */
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

  /**
   * Used to set reward
   * @param event
   */
  rewardChanged(event: any): void {
    this.reward = Number.parseInt(event.target.value);
    this.writIsValid();
  }

  /**
   * Used to validate writ
   * @param writ
   * @returns boolean true if writ is valid, false otherwise
   */
  writIsValid(): boolean {
    this.writToSubmit = {
      is_jewelery: this.writType === 'Jewelery' ? true : false,
      quality: this.quality,
      item: this.item,
      trait: this.trait,
      set: this.set,
      style: this.style,
      reward: this.reward,
    };
    const validity = !Object.values(this.writToSubmit)
      .map((value) => isNil(value))
      .includes(true);

    if (validity) {
      this.submittable = true;
    } else {
      this.submittable = false;
    }

    // console.log('validity: ', validity);
    // console.log('this.writToSubmit: ', this.writToSubmit);

    return validity;
  }

  /**
   * Makes a service call to save the writ
   * @returns
   */
  submitWrit(): void {
    console.log('submitting writ: ', this.writToSubmit);
    if (this.writIsValid()) {
      // make service call to submit writ
      this.writs.create(this.writToSubmit).subscribe((data) => {
        console.log('data: ', data);
      });
      // subscribe to observable, and set this.submissionStatus to true or false
      // then set this.submissionStatus to true
      // this.showSubmission = true;
      // this.resetAll();
      this.submittable = false;
      return;
    }
    console.log('writ is not valid!');
  }

  /**
   * Sets values based on the writ type
   * @param type
   */
  handleOptionTypeChange(type: any): void {
    // console.log('writ type: ', type);

    this.showWritType = true;
    this.showItem = false;
    this.showTrait = false;

    this.item = null;
    this.trait = null;
    this.style = null;

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
    this.writIsValid();
  }

  /**
   * Sets the writ quality and display boolean allowing quality to be shown
   * @param quality
   */
  handleQualityChange(quality: any): void {
    // console.log('quality: ', quality);
    this.quality = quality;
    this.showQuality = true;
    this.writIsValid();
  }

  /**
   * Sets the writ armorSet
   * @param set
   */
  handleSetChange(set: string): void {
    this.set = set as armor_sets;
    this.writIsValid();
    // console.log('set change event: ', set);
  }

  /**
   * Sets the writ style
   * @param style
   */
  handleStyleChange(style: string): void {
    this.style = style as styles;
    this.writIsValid();
    // console.log('style change event: ', style);
  }

  /**
   * Sets the writ item
   * @param item
   */
  handleItemChange(item: any): void {
    this.item = item;
    this.writIsValid();
    // console.log('item: ', item);
  }

  /**
   * Sets the writ trait
   * @param trait
   */
  handleTraitChange(trait: any): void {
    this.trait = trait;
    this.writIsValid();
    // console.log('trait: ', trait);
  }

  /**
   * Focus the typeahead component to call the keyboard
   * @param input
   */
  onInputClick(input: 'set' | 'style'): void {
    if (input === 'set') {
      this.typeaheadSet.focusInput();
    } else {
      this.typeaheadStyle.focusInput();
    }
  }
}
