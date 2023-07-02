import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  @Input() options: string[];
  @Input() optionFromParent: string;
  @Output() selectedItem: EventEmitter<string> = new EventEmitter();
  constructor() {}

  chosenOption: string;

  ngOnInit(): void {
    console.log('options: ', this.options);
    console.log('chosenOption: ', this.chosenOption);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['optionFromParent']) {
      this.chosenOption = changes['optionFromParent'].currentValue;
      console.log('optionFromParent changed');
    }
    if (changes['options']) {
      this.chosenOption = null;
      console.log('options changed');
    }
  }

  optionChanged(event: any): void {
    this.chosenOption = event.target.value;
    this.selectedItem.emit(event.target.value);
  }
}
