import { Component, OnInit } from '@angular/core';
import { writ } from 'constants/writs';

@Component({
  selector: 'player-writs',
  templateUrl: './player-writs.component.html',
  styleUrls: ['./player-writs.component.scss'],
})
export class PlayerWritsComponent implements OnInit {
  writs: writ[] = [
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      armorSet: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: 100,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
