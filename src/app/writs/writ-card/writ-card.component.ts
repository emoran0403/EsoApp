import { Component, Input, OnInit } from '@angular/core';
import { writ } from 'constants/writs';

@Component({
  selector: 'writ-card',
  templateUrl: './writ-card.component.html',
  styleUrls: ['./writ-card.component.scss'],
})
export class WritCardComponent implements OnInit {
  @Input() writ: writ;
  displayCompletion: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.displayCompletion = !this.displayCompletion;
  }

  completeWrit(): void {
    console.log('Completing writ: ', this.writ);
  }
}
