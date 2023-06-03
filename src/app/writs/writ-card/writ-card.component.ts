import { Component, Input, OnInit } from '@angular/core';
import { writ } from 'constants/writs';

@Component({
  selector: 'writ-card',
  templateUrl: './writ-card.component.html',
  styleUrls: ['./writ-card.component.scss'],
})
export class WritCardComponent implements OnInit {
  @Input() writ: writ;
  constructor() {}

  ngOnInit(): void {}
}
