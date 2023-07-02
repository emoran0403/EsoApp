import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  @Input() options: string[];
  @Output() selectedItem: EventEmitter<string> = new EventEmitter();
  constructor() {}

  chosenOption: string;

  ngOnInit(): void {}

  optionChanged(event: any): void {
    // console.log('event.target.value: ', event.target.value);
    this.selectedItem.emit(event.target.value);
  }
}
