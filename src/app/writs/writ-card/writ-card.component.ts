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

  hasTrait: boolean;
  hasArmorSet: boolean;
  hasStyle: boolean;
  isCompletable: boolean;

  // hasTrait: boolean = true;
  // hasArmorSet: boolean = true;
  // hasStyle: boolean = true;
  // isCompletable: boolean = this.hasTrait && this.hasArmorSet && this.hasStyle;

  constructor() {}

  ngOnInit(): void {
    this.hasTrait = this.writ.hasTrait;
    this.hasArmorSet = this.writ.hasArmorSet;
    this.hasStyle = this.writ.hasStyle;
    this.isCompletable =
      this.writ.hasTrait && this.writ.hasArmorSet && this.writ.hasStyle;
  }

  toggle(): void {
    this.displayCompletion = !this.displayCompletion;
  }

  completeWrit(): void {
    // !?! (1) - setup service call to complete writ
    console.log('Completing writ: ', this.writ);
  }
}
