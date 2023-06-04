import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'unlock-button',
  templateUrl: './unlock-button.component.html',
  styleUrls: ['./unlock-button.component.scss'],
})
export class UnlockButtonComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  selectedOption = false; // Set the default value

  ngOnInit(): void {}
  choose(choice: boolean): void {
    this.selectedOption = choice;
  }
}
