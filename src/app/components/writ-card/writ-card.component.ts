import { Component, Input, OnInit } from '@angular/core';
import { armor_sets } from 'constants/armor_sets';
import { all_items_list, item_quality } from 'constants/items';
import { styles } from 'constants/styles/styles';
import { all_traits_list } from 'constants/traits/traits';

@Component({
  selector: 'app-writ-card',
  templateUrl: './writ-card.component.html',
  styleUrls: ['./writ-card.component.css'],
})
export class WritCardComponent implements OnInit {
  @Input() writ: writ = {
    item: 'Jack',
    quality: 'Legendary',
    trait: 'Nirnhoned',
    set: 'Adept Rider',
    style: "Abah's Watch",
    reward: 2,
  };

  constructor() {}

  ngOnInit(): void {}
}

export interface writ {
  item: all_items_list;
  quality: item_quality;
  trait: all_traits_list;
  set: armor_sets;
  style: styles;
  reward: number;
}
