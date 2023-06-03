import { Component, Input, OnInit } from '@angular/core';
import { fe_writ } from 'constants/writs';

@Component({
  selector: 'writ-card',
  templateUrl: './writ-card.component.html',
  styleUrls: ['./writ-card.component.scss'],
})
export class WritCardComponent implements OnInit {
  @Input() writ: fe_writ;

  // completion button display boolean
  displayCompletion: boolean = true;

  // background color display booleans
  // !?! (2) - issue with setting values based on incoming writ
  // hasTrait: boolean = this.writ.hasTrait;
  // hasArmorSet: boolean = this.writ.hasArmorSet;
  // hasStyle: boolean = this.writ.hasStyle;
  // isCompletable: boolean =
  //   this.writ.hasTrait && this.writ.hasArmorSet && this.writ.hasStyle;

  hasTrait: boolean = true;
  hasArmorSet: boolean = true;
  hasStyle: boolean = true;
  isCompletable: boolean = this.hasTrait && this.hasArmorSet && this.hasStyle;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.displayCompletion = !this.displayCompletion;
  }

  completeWrit(): void {
    // !?! (1) - setup service call to complete writ
    console.log('Completing writ: ', this.writ);
  }
}
