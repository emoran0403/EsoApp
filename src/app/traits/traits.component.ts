import { Component, OnInit } from '@angular/core';
import { METAL_APPAREL, METAL_WEAPONS } from 'constants/items/blacksmithing';
import { CLOTHING_ITEMS_ARR } from 'constants/items/clothing';
import { WOOD_APPAREL, WOOD_WEAPONS } from 'constants/items/woodworking';
import {
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
  WEAPON_TRAITS,
  armor_traits,
  jewelery_traits,
  weapon_traits,
} from 'constants/traits/traits';
import { TraitsService } from '../services/traits.service';

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

  shownTraits: weapon_traits[] | armor_traits[] | jewelery_traits[];
  shownItems;
  chosenItem = 'Axe';

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

  setShownTraits(choice: 'armor' | 'weapons' | 'jewelery'): void {
    switch (choice) {
      case 'armor':
        this.shownTraits = this.armorTraits;
        break;
      case 'weapons':
        this.shownTraits = this.weaponTraits;
        break;
      case 'jewelery':
        this.shownTraits = this.jeweleryTraits;
        break;
    }
    console.log('this.shownTraits: ', this.shownTraits);
  }
}
