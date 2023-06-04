import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'unlock-button',
  templateUrl: './unlock-button.component.html',
  styleUrls: ['./unlock-button.component.scss'],
})
export class UnlockButtonComponent implements OnInit {
  @Input() name: string; // Display for the header
  @Input() positive: string; // Display for the affirmative option
  @Input() negative: string; // Display for the negative option
  @Input() chosenOption: string; // Input for outside control
  constructor() {}

  selectedOption: boolean | string = false; // Set the default value

  ngOnInit(): void {}
  choose(choice: boolean): void {
    this.selectedOption = choice;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chosenOption']) this.selectedOption = this.chosenOption;
  }
}
