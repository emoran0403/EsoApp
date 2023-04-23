import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'new-writ',
  templateUrl: 'new-writ.component.html',
  styleUrls: ['new-writ.component.scss'],
})
export class NewWritComponent implements OnInit {
  constructor() {}
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngOnInit() {
    return;
  }
}
