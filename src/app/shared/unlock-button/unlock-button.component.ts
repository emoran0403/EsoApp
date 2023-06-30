import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'unlock-button',
  templateUrl: './unlock-button.component.html',
  styleUrls: ['./unlock-button.component.scss'],
})
export class UnlockButtonComponent implements OnInit {
  @Input() name: string; // Display for the header
  @Input() positive: string; // Display for the affirmative option
  @Input() negative: string; // Display for the negative option
  @Input() outsideOption: string; // Input for outside control
  @Output() optionSelected = new EventEmitter();
  constructor() {}

  chosenOption: boolean | string = false; // Set the default value

  ngOnInit(): void {}

  choose(choice: boolean): void {
    this.chosenOption = choice;
    this.optionSelected.emit([this.name, choice]);
    console.log('choice: ', choice);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['outsideOption']) {
      this.chosenOption = this.outsideOption;
      console.log('this.selectedOption: ', this.chosenOption);
    }
  }
}
