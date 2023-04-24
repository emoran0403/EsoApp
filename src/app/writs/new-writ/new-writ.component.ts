import { Component, OnInit } from '@angular/core';
import { item_quality } from 'constants/items';
import {
  METAL_ITEMS_ARR,
  metal_items_arr,
} from 'constants/items/blacksmithing';
import { QUALITY, WRIT_TYPE, writ_type_options } from 'constants/writs';

@Component({
  selector: 'new-writ',
  templateUrl: 'new-writ.component.html',
  styleUrls: ['new-writ.component.scss'],
})
export class NewWritComponent implements OnInit {
  constructor() {}

  readonly writTypeOptions: writ_type_options[] = WRIT_TYPE;
  readonly qualities: item_quality[] = QUALITY;
  readonly blacksmithingItems: metal_items_arr[] = METAL_ITEMS_ARR;

  writType: writ_type_options;
  quality: item_quality;
  item;

  writTypeChange(event): void {
    console.log(event.target.value);
  }

  qualityChange(event): void {
    console.log(event.target.value);
  }

  itemChange(event): void {
    console.log(event.target.value);
  }

  ngOnInit() {
    return;
  }
}
