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

  // Trait Options
  readonly weaponTraits = WEAPON_TRAITS;
  readonly armorTraits = ARMOR_TRAITS;
  readonly jeweleryTraits = JEWELERY_TRAITS;

  // Options for item drop down
  readonly metalWeapons = METAL_WEAPONS;
  readonly metalArmor = METAL_APPAREL;
  readonly clothingArmor = CLOTHING_ITEMS_ARR;
  readonly woodWeapons = WOOD_WEAPONS;
  readonly woodArmor = WOOD_APPAREL;
  readonly jeweleryItems = JEWELERY_ITEMS_ARR;

  selectedCraftingType: string = 'Blacksmithing - Weapons'; // Crafting type which determines the items to show
  craftingTypeIndex: number = 0; // The current index of crafting types

  shownItems: all_items_list[] = this.metalWeapons; // The array of items to display and set traits on
  selectedItem: all_items_list = this.metalWeapons[0]; // Item the user has chosen to toggle traits on
  shownItemsIndex: number = 0; // The current index of shown items

  // shownTraits: all_trait_options; // The traits that are shown based on chosenCraftingType
  // itemForButtons: [string, boolean][]; // chosenItem with the items traits on it

  // playerTraitItems: item[]; // Used to hold all traits from DB
  // filteredTraitItems: item[]; // playerTraits after filtering to match items in shownItems

  craftingTypes: string[] = [
    'Blacksmithing - Weapons',
    'Blacksmithing - Armor',
    'Woodworking - Weapons',
    'Woodworking - Armor',
    'Clothing',
    'Jewelery',
  ];

  // Display Booleans
  // disableItems: boolean = true; // controls the disabling of the items dropdown

  ngOnInit(): void {}

  /**
   * Sets the shown items based on the craftingTypeIndex.
   */
  setShownItems(): void {
    switch (this.craftingTypeIndex) {
      case 0:
        this.shownItems = this.metalWeapons;
        break;
      case 1:
        this.shownItems = this.metalArmor;
        break;
      case 2:
        this.shownItems = this.woodWeapons;
        break;
      case 3:
        this.shownItems = this.woodArmor;
        break;
      case 4:
        this.shownItems = this.clothingArmor;
        break;
      case 5:
        this.shownItems = this.jeweleryItems;
        break;
    }
  }

  /**
   * Helper function to set the selectedCraftingType based on the current craftingTypeIndex.
   */
  setCraftingTypeByIndex(): void {
    this.selectedCraftingType = this.craftingTypes[`${this.craftingTypeIndex}`];
  }

  /**
   * Helper function to set the selectedItem based on the current shownItemsIndex.
   */
  setItemByIndex(): void {
    this.selectedItem = this.shownItems[`${this.shownItemsIndex}`];
  }

  /**
   * Helper function to set the shownItemsIndex to 0.
   */
  resetShownItemIndex(): void {
    this.shownItemsIndex = 0;
  }

  /**
   * Sets craftingTypeIndex based on the given direction, loops back around from either direction.
   * @param direction The direction along the craftingTypes array to travel.
   */
  handleLoopingInCraftingType(direction: 'next' | 'prev'): void {
    if (direction === 'next') {
      if (this.craftingTypeIndex + 1 > this.craftingTypes.length - 1) {
        this.craftingTypeIndex = 0;
      } else {
        this.craftingTypeIndex++;
      }
    } else {
      if (this.craftingTypeIndex - 1 < 0) {
        this.craftingTypeIndex = this.craftingTypes.length - 1;
      } else {
        this.craftingTypeIndex--;
      }
    }
  }

  /**
   * Sets craftingTypeIndex based on the given direction, loops back around from either direction.
   * @param direction The direction along the craftingTypes array to travel.
   */
  handleLoopingInItem(direction: 'next' | 'prev'): void {
    if (direction === 'next') {
      if (this.shownItemsIndex + 1 > this.shownItems.length - 1) {
        this.shownItemsIndex = 0;
      } else {
        this.shownItemsIndex++;
      }
    } else {
      if (this.shownItemsIndex - 1 < 0) {
        this.shownItemsIndex = this.shownItems.length - 1;
      } else {
        this.shownItemsIndex--;
      }
    }
  }

  /**
   * Changes the chosen crafting type.
   * @param direction The direction through the crafting type options to travel.
   */
  nextOrPrevCraftingType(direction: 'next' | 'prev'): void {
    // Handle Crafting type changes
    this.handleLoopingInCraftingType(direction);
    this.setCraftingTypeByIndex();

    // Handle item changes
    this.resetShownItemIndex();
    this.setShownItems();
    this.setItemByIndex();
  }

  /**
   * Changes the chosen item
   * @param direction The direction through the shownItems array to travel.
   */
  nextOrPrevItem(direction: 'next' | 'prev'): void {
    this.handleLoopingInItem(direction);
    this.setItemByIndex();
  }
}
