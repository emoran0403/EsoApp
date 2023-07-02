import { Component, OnInit } from '@angular/core';
import { METAL_APPAREL, METAL_WEAPONS } from 'constants/items/blacksmithing';
import { CLOTHING_ITEMS_ARR } from 'constants/items/clothing';
import { WOOD_APPAREL, WOOD_WEAPONS } from 'constants/items/woodworking';
import {
  ARMOR_TRAITS,
  All_TRAITS,
  JEWELERY_TRAITS,
  WEAPON_TRAITS,
  armor_traits,
  jewelery_traits,
  weapon_traits,
} from 'constants/traits/traits';
import { TraitsService } from '../services/traits.service';
import { JEWELERY_ITEMS_ARR } from 'constants/items';
import { item_class, skill } from '../shared/models';

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
  // readonly TRAITS = {
  //   weapon: this.weaponTraits,
  //   armor: this.armorTraits,
  //   jewelery: this.jeweleryTraits,
  // };

  readonly traitOptions = All_TRAITS;

  readonly metalWeapons = METAL_WEAPONS;
  readonly metalArmor = METAL_APPAREL;
  readonly clothingArmor = CLOTHING_ITEMS_ARR;
  readonly woodWeapons = WOOD_WEAPONS;
  readonly woodArmor = WOOD_APPAREL;
  readonly jeweleryItems = JEWELERY_ITEMS_ARR;

  shownTraits: weapon_traits[] | armor_traits[] | jewelery_traits[];
  shownItems;
  chosenItem;

  playerTraits;
  ngOnInit(): void {
    this.traits.getAllTraits().subscribe((data) => {
      this.playerTraits = data;
    });

    // setTimeout(() => {
    //   console.log('this.playerTraits: ', this.playerTraits);
    // }, 2000);
  }

  itemChanged(event: any): void {
    this.chosenItem = event.target.value;
  }

  onOptionSelected(wow: any): void {
    console.log('wow: ', wow);
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

  setTraitsAndItems(item: item_class, skill: skill): void {
    this.resetChosenItemsAndTraits();
    this.shownTraits = this.traitOptions[item.toLocaleUpperCase()];

    switch (skill) {
      case 'jewelery':
        this.shownItems = this.jeweleryItems;
        break;
      case 'clothing':
        this.shownItems = this.clothingArmor;
        break;
      case 'blacksmithing':
        if (item === 'armor') {
          this.shownItems = this.metalArmor;
        } else {
          this.shownItems = this.metalWeapons;
        }
        break;
      case 'woodworking':
        if (item === 'armor') {
          this.shownItems = this.woodArmor;
        } else {
          this.shownItems = this.woodWeapons;
        }
        break;
    }
  }
}
