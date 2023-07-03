import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  @Input() buttonText: string;
  @Input() options: string[];
  @Input() disableFromParent: boolean;

  @Output() selectedOption: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  optionClicked(option: string): void {
    // console.log('option: ', option);
    this.selectedOption.emit(option);
  }
}
