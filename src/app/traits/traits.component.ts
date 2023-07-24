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
  craftingTypeIndex: number = 0;
  shownItems: all_items_list[] = this.metalWeapons; // The array of items to display and set traits on
  // chosenItem: all_items_list; // Item the user has chosen to toggle traits on
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
   * Helper function to set the selectedCraftingType based on the current craftingTypeIndex
   */
  setCraftingTypeByIndex(): void {
    this.selectedCraftingType = this.craftingTypes[`${this.craftingTypeIndex}`];
  }

  /**
   * Sets craftingTypeIndex based on the given direction, loops back around from either direction.
   * @param direction The direction along the craftingTypes array to travel.
   */
  handleLooping(direction: 'next' | 'prev'): void {
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

  nextOrPrevCraftingType(direction: 'next' | 'prev'): void {
    this.handleLooping(direction);
    this.setCraftingTypeByIndex();
    // this.getUnlocksForSelectedStyle(this.selectedStyle);
    // this.scrollIntoView(this.selectedStyle);
  }
}
