import { Component, OnInit } from '@angular/core';
import { METAL_APPAREL, METAL_WEAPONS } from 'constants/items/blacksmithing';
import { CLOTHING_ITEMS_ARR } from 'constants/items/clothing';
import { WOOD_APPAREL, WOOD_WEAPONS } from 'constants/items/woodworking';
import {
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
  WEAPON_TRAITS,
  all_traits_list,
} from 'constants/traits/traits';
import { TraitsService } from '../services/traits.service';
import { JEWELERY_ITEMS_ARR } from 'constants/items';
import { all_items_list } from '../shared/models';
import { DataService } from '../services/data.service';
import { CRATFING_TYPES } from '../shared/constants';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
})
export class TraitsComponent implements OnInit {
  constructor(
    private readonly traitsService: TraitsService,
    private readonly data: DataService
  ) {}

  // Trait options
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

  // Crafting Type options
  readonly craftingTypes = CRATFING_TYPES;

  selectedCraftingType: string = 'Blacksmithing - Weapons'; // Crafting type which determines the items to show
  craftingTypeIndex: number = 0; // The current index of crafting types
  craftingTypeForService: string = 'weapon'; // Crafting type as server expects it

  shownItems: all_items_list[] = this.metalWeapons; // The array of items to display and set traits on
  selectedItem: all_items_list = this.metalWeapons[0]; // Item the user has chosen to toggle traits on
  shownItemsIndex: number = 0; // The current index of shown items

  shownTraits: all_traits_list[] = this.weaponTraits; // The traits that are shown
  unlocksForButtons: any[]; // Array of unlocks with their values

  selectedTraitUnlocks: [string, boolean][]; // Tuple array pairing a trait with its unlock status
  hasAllUnlocks: boolean; // Boolean value indicating whether all the traits are unlocked
  unlockCount: number; // Number of traits learned on the item

  ngOnInit(): void {
    this.fetchSelectedTraitData();
  }

  //* Nav buttons helpers and setters ***********************************************************

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
  setSelectedItemByIndex(): void {
    this.selectedItem = this.shownItems[`${this.shownItemsIndex}`];
  }

  /**
   * Helper function to set the shownTraits based on selectedCraftingType.
   * Also sets the crafting type as the server expects it.
   */
  setShownTraits(): void {
    switch (this.selectedCraftingType) {
      case 'Blacksmithing - Armor':
      case 'Woodworking - Armor':
      case 'Clothing':
        this.shownTraits = this.armorTraits;
        this.craftingTypeForService = 'armor';
        break;
      case 'Blacksmithing - Weapons':
      case 'Woodworking - Weapons':
        this.shownTraits = this.weaponTraits;
        this.craftingTypeForService = 'weapon';
        break;
      case 'Jewelery':
        this.shownTraits = this.jeweleryTraits;
        this.craftingTypeForService = 'jewelery';
        break;
    }
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
    this.setSelectedItemByIndex();

    // Handle trait changes
    this.setShownTraits();
    this.fetchSelectedTraitData();
  }

  /**
   * Changes the chosen item
   * @param direction The direction through the shownItems array to travel.
   */
  nextOrPrevItem(direction: 'next' | 'prev'): void {
    this.handleLoopingInItem(direction);
    this.setSelectedItemByIndex();
    this.fetchSelectedTraitData();
  }

  //* Trait buttons fetch and update ***********************************************************

  processApiResponse = (res: any): [string, boolean][] => {
    if (res[0].count === 9) this.hasAllUnlocks = true;
    else this.hasAllUnlocks = false;

    delete res[0].count;
    this.selectedTraitUnlocks = this.data.makeCapitalizedTupleArray(res[0]);
    return this.selectedTraitUnlocks;
  };

  // Function to fetch the selected trait data (for ngOnInit and when user selects a new item)
  fetchSelectedTraitData(): void {
    this.traitsService
      .getAllTraits(this.selectedItem)
      .pipe(switchMap((res) => this.processApiResponse(res)))
      .subscribe();
  }

  // Update a single trait.
  updateAndSetSingleTraitData(trait: string, value: boolean): void {
    this.traitsService
      .updateOneTrait(this.selectedItem, trait, value)
      .pipe(switchMap((res) => this.processApiResponse(res)))
      .subscribe();
  }

  // Update multiple traits.
  updateAndSetMultipleTraitData(value: boolean): void {
    this.traitsService
      .updateMultileTraits(this.selectedItem, value)
      .pipe(switchMap((res) => this.processApiResponse(res)))
      .subscribe();
  }

  // Calls the appropriate update method based on the given button press.
  handleToggleButtons($event: [string, boolean], btn: 'all' | 'one'): void {
    const [trait, value] = $event;
    if (btn === 'all') {
      this.updateAndSetMultipleTraitData(value);
    } else {
      this.updateAndSetSingleTraitData(trait, value);
    }
  }
}
