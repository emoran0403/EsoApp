import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'unlock-button',
  templateUrl: './unlock-button.component.html',
  styleUrls: ['./unlock-button.component.scss'],
})
export class UnlockButtonComponent implements OnInit {
  @Input() name: string; // Display for the header
  @Input() positive: string; // Display for the affirmative option
  @Input() negative: string; // Display for the negative option
  @Input() optionFromParent: string | boolean; // Input for outside control
  @Output() optionSelected: EventEmitter<[string, boolean]> =
    new EventEmitter();
  constructor(private readonly data: DataService) {}

  chosenOption: boolean | string = false; // Set the default value

  ngOnInit(): void {}

  choose(choice: boolean): void {
    this.chosenOption = choice;
    this.optionSelected.emit([this.name, choice]);
    console.log('choice: ', choice);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['optionFromParent']) {
      this.chosenOption = this.optionFromParent;
      console.log('this.selectedOption: ', this.chosenOption);
    }
    if (changes['name']) {
      this.name = this.data.capitalizeFirstLetter(changes['name'].currentValue);
    }
  }
}
