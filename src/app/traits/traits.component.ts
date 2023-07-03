import { Component, OnInit } from '@angular/core';
import { METAL_APPAREL, METAL_WEAPONS } from 'constants/items/blacksmithing';
import { CLOTHING_ITEMS_ARR } from 'constants/items/clothing';
import { WOOD_APPAREL, WOOD_WEAPONS } from 'constants/items/woodworking';
import {
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
  WEAPON_TRAITS,
} from 'constants/traits/traits';
import { TraitsService } from '../services/traits.service';
import { JEWELERY_ITEMS_ARR } from 'constants/items';
import { all_items_list, all_trait_options, item } from '../shared/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
})
export class TraitsComponent implements OnInit {
  constructor(
    private readonly traits: TraitsService,
    private readonly data: DataService
  ) {}

  readonly weaponTraits = WEAPON_TRAITS;
  readonly armorTraits = ARMOR_TRAITS;
  readonly jeweleryTraits = JEWELERY_TRAITS;

  readonly metalWeapons = METAL_WEAPONS;
  readonly metalArmor = METAL_APPAREL;
  readonly clothingArmor = CLOTHING_ITEMS_ARR;
  readonly woodWeapons = WOOD_WEAPONS;
  readonly woodArmor = WOOD_APPAREL;
  readonly jeweleryItems = JEWELERY_ITEMS_ARR;

  chosenCraftingType: string; // Crafting type which determines the items to show
  shownItems; // The array of items to display and set traits on
  chosenItem: all_items_list; // Item the user has chosen to toggle traits on
  shownTraits: all_trait_options; // The traits that are shown based on chosenCraftingType
  itemForButtons: [string, boolean][]; // chosenItem with the items traits on it

  playerTraits: item[]; // Used to hold all traits from DB
  filteredTraits: item[]; // playerTraits after filtering to match items in shownItems

  craftingTypes: string[] = [
    'Blacksmithing - Weapons',
    'Blacksmithing - Armor',
    'Woodworking - Weapons',
    'Woodworking - Armor',
    'Clothing',
    'Jewelery',
  ];

  // Display Booleans
  disableItems: boolean = true; // controls the disabling of the items dropdown

  ngOnInit(): void {
    this.traits.getAllTraits().subscribe((data) => {
      this.playerTraits = data;
      console.log('this.playerTraits: ', this.playerTraits);
    });

    // setTimeout(() => {
    //   console.log('this.playerTraits: ', this.playerTraits);
    // }, 2000);
  }

  onAllTraitToggle(trait: any): void {
    console.log('trait: ', trait);
  }

  onSingleTraitToggle(trait: any): void {
    console.log('trait: ', trait);
  }

  handleCraftingTypeChange(type: any): void {
    console.log('crafting type chosen: ', type);
    this.chosenCraftingType = type;
    this.disableItems = false;
    this.chosenItem = undefined; // This resets chosen item and effectively hides the traits

    switch (type) {
      case 'Blacksmithing - Weapons':
        this.shownItems = this.metalWeapons;
        this.shownTraits = this.weaponTraits;
        break;
      case 'Blacksmithing - Armor':
        this.shownItems = this.metalArmor;
        this.shownTraits = this.armorTraits;
        break;
      case 'Woodworking - Weapons':
        this.shownItems = this.woodWeapons;
        this.shownTraits = this.weaponTraits;
        break;
      case 'Woodworking - Armor':
        this.shownItems = this.woodArmor;
        this.shownTraits = this.armorTraits;
        break;
      case 'Clothing':
        this.shownItems = this.clothingArmor;
        this.shownTraits = this.armorTraits;
        break;
      case 'Jewelery':
        this.shownItems = this.jeweleryItems;
        this.shownTraits = this.jeweleryTraits;
        break;
    }

    this.filterTraits();
  }

  handleSelectedItemChange(item: string): void {
    console.log('item chosen: ', item);
    this.chosenItem = item as all_items_list;
    this.filterForButtons();
  }

  filterTraits(): void {
    const lowercaseItems = this.data.lowercaseNoSpace(this.shownItems);

    // console.log('shownItems: ', lowercaseItems);

    const filteredTraits = this.playerTraits.filter((obj) =>
      lowercaseItems.includes(obj.item)
    );

    this.filteredTraits = [...filteredTraits];

    console.log('filtered traits: ', this.filteredTraits);
    console.log('chosenItem: ', this.chosenItem);
  }

  filterForButtons(): void {
    const filteredTraitItem = this.filteredTraits.filter((item: item) => {
      return item.item === this.chosenItem.toLocaleLowerCase();
    });

    // this.itemForButtons = filteredTraitItem[0];

    this.itemForButtons = this.data.makeTupleArray(filteredTraitItem[0]);

    console.log('filteredTraitItem: ', filteredTraitItem);
    console.log('this.itemForButtons: ', this.itemForButtons);
  }
}

/**
 * DONE - make service call to get all traits
 * when the item is chosen - populate the trait buttons with db value
 * if toggle all is called - populate the trait buttons with value from toggle all button
 * what to do if first time user?
 *  - first time user should have falses everywhere
 *
 *
 *
 */
