import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { armor_sets } from 'constants/armor_sets';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
})
export class TypeAheadComponent implements OnInit {
  @Input() options: string[];
  @Input() labeltext: string;
  @Input() disableFromParent: boolean;
  selected?: string;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleSelectItem(event: any): void {
    this.selected = event.item;
    this.optionSelected.emit(event.item);
  }

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 1
          ? []
          : this.options
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}
