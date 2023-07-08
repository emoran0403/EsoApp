import { Component, OnInit } from '@angular/core';
import { fe_writ } from 'constants/writs';

@Component({
  selector: 'player-writs',
  templateUrl: './player-writs.component.html',
  styleUrls: ['./player-writs.component.scss'],
})
export class PlayerWritsComponent implements OnInit {
  writs: fe_writ[] = [
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Arm Cops',
      quality: 'Legendary',
      trait: 'Sturdy',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Bracers',
      quality: 'Legendary',
      trait: 'Triune',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
    {
      is_jewelery: false,
      item: 'Maul',
      quality: 'Epic',
      trait: 'Nirnhoned',
      set: 'Dauntless Combatant',
      style: 'Ancestral Nord',
      reward: Math.floor(Math.random() * 100),
      hasTrait: Math.random() >= 0.35 ? true : false,
      hasArmorSet: Math.random() >= 0.35 ? true : false,
      hasStyle: Math.random() >= 0.35 ? true : false,
    },
  ];
  constructor() {}

  sortAscending: boolean = false;

  ngOnInit(): void {}

  /**
   * Sorts the writ array so writs that are completable are listed first, then by reward
   */
  sortCompletable() {
    let tempWrits = [...this.writs];

    tempWrits.sort((a, b) => {
      return b.reward - a.reward;
    });

    tempWrits.sort((a, b) => {
      const trueCountA = [a.hasTrait, a.hasArmorSet, a.hasStyle].filter(
        Boolean
      ).length;
      const trueCountB = [b.hasTrait, b.hasArmorSet, b.hasStyle].filter(
        Boolean
      ).length;

      return trueCountB - trueCountA;
    });

    this.writs = [...tempWrits];
  }

  /**
   * Sorts the writ array based on reward, and toggles the ascending boolean so the next sort is also toggled
   */
  sortReward(): void {
    let tempWrits = [...this.writs];

    tempWrits.sort((a, b) => {
      if (this.sortAscending) {
        return a.reward - b.reward;
      } else {
        return b.reward - a.reward;
      }
    });

    this.writs = [...tempWrits];
    this.sortAscending = !this.sortAscending;
  }
}
