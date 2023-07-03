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
import { all_trait_options } from '../shared/models';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
})
export class TraitsComponent implements OnInit {
  constructor(private readonly traits: TraitsService) {}

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
  chosenItem; // Item the user has chosen to toggle traits on
  shownTraits: all_trait_options; // The traits that are shown based on chosenCraftingType
  playerTraits; // Used to hold all traits from DB

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
    });

    // setTimeout(() => {
    //   console.log('this.playerTraits: ', this.playerTraits);
    // }, 2000);
  }

  onOptionSelected(wow: any): void {
    console.log('wow: ', wow);
  }

  handleCraftingTypeChange(type: any): void {
    this.chosenCraftingType = type;
    this.disableItems = false;
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
  }

  handleSelectedItemChange(item: any): void {
    console.log('eventwow lol: ', item);
    this.chosenItem = item;
  }

  resetChosenItems(): void {
    this.chosenItem = null;
  }
  resetChosenTraits(): void {
    this.shownTraits = null;
  }
  resetChosenItemsAndTraits(): void {
    this.resetChosenItems();
    this.resetChosenTraits();
  }
}
