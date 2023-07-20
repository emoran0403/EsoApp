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
  @Input() positive: string; // Affirmative option button text
  @Input() negative: string; // Negative option button text
  @Input() setOption: string | boolean; // Input for outside control
  @Input() disabled: boolean; // Input to disable the radio buttons
  @Output() optionSelected: EventEmitter<[string, boolean]> =
    new EventEmitter();
  constructor(private readonly data: DataService) {}

  chosenOption: boolean | string = false; // Set the default value

  ngOnInit(): void {}

  choose(choice: boolean): void {
    if (!this.disabled) {
      this.chosenOption = choice;
      this.optionSelected.emit([this.name, choice]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['setOption']) {
      this.chosenOption = this.setOption;
      // console.log('this.selectedOption: ', this.chosenOption);
    }
    if (changes['name']) {
      this.name = this.data.capitalizeFirstLetter(changes['name'].currentValue);
    }
  }
}
