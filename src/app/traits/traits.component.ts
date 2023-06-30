import { Component, OnInit, AfterViewInit } from '@angular/core';
import { METAL_APPAREL, METAL_WEAPONS } from 'constants/items/blacksmithing';
import { CLOTHING_ITEMS_ARR } from 'constants/items/clothing';
import { WOOD_APPAREL, WOOD_WEAPONS } from 'constants/items/woodworking';
import {
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
  WEAPON_TRAITS,
} from 'constants/traits/traits';
import { TraitsService } from '../services/traits.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
})
export class TraitsComponent implements OnInit, AfterViewInit {
  constructor(private readonly traits: TraitsService) {}

  readonly weaponTraits = WEAPON_TRAITS;
  readonly armorTraits = ARMOR_TRAITS;
  readonly jeweleryTraits = JEWELERY_TRAITS;
  readonly metalWeapons = METAL_WEAPONS;
  readonly metalArmor = METAL_APPAREL;
  readonly clothingArmor = CLOTHING_ITEMS_ARR;
  readonly woodWeapons = WOOD_WEAPONS;
  readonly woodArmor = WOOD_APPAREL;

  shownTraits: 'armor' | 'weapons' | 'jewelery' = 'armor';
  shownItems;
  chosenItem = 'Axe';

  playerTraits;
  ngOnInit(): void {
    this.traits.getAllTraits().subscribe((data) => {
      this.playerTraits = data;
    });
  }

  ngAfterViewInit(): void {
    console.log('this.playerTraits: ', this.playerTraits);
  }

  itemChanged(event: any): void {
    this.chosenItem = event.target.value;
  }

  onoptionSelected(wow: any): void {
    console.log('wow: ', wow);
  }
}
