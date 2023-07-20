import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
})
export class TypeAheadComponent implements OnInit {
  @ViewChild('typeaheadInput', { static: false })
  typeaheadInput!: ElementRef<HTMLInputElement>;

  @Input() options: string[];
  @Input() labeltext: string;
  @Input() disableFromParent: boolean;
  @Input() resetFromParent: boolean;
  @Input() selectedFromParent: string;

  selected?: string;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    return;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Reset the selected property to an empty string
    if (changes['resetFromParent'] && !changes['resetFromParent'].firstChange) {
      const resetFromParent = changes['resetFromParent'].currentValue;
      if (!resetFromParent) {
        this.selected = '';
      }
    }
    if (changes[`selectedFromParent`]) {
      this.selected = this.selectedFromParent;
    }
  }

  focusInput(): void {
    if (this.typeaheadInput) {
      this.typeaheadInput.nativeElement.focus();
    }
  }

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
