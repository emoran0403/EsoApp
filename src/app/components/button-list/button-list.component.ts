import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css'],
})
export class ButtonListComponent implements OnInit {
  @Input() items: any[];
  constructor() {}

  ngOnInit(): void {}
}
