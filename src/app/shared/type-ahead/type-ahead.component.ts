import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
})
export class TypeAheadComponent implements OnInit {
  @Input() options: string[];
  selected?: string;

  constructor() {}

  ngOnInit(): void {}
}
