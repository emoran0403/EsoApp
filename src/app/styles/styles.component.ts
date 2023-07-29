import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UNLOCKS_LIST_FOR_DISPLAY } from 'constants/items';
import { STYLES, styles } from 'constants/styles/styles';
import { StylesService } from '../services/styles.service';
import { motif_status } from '../shared/models';
import { DataService } from '../services/data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements OnInit, AfterViewInit {
  @ViewChild('stylesWindow', { static: true }) stylesWindow!: ElementRef;
  constructor(
    private readonly styleService: StylesService,
    private readonly data: DataService
  ) {}

  readonly motifPages = UNLOCKS_LIST_FOR_DISPLAY;
  readonly styles = STYLES;

  selectedStyle: styles = 'High Elf'; // The chosen style
  styleIndex: number = 0; // The Index of the chosen style
  unlocksForButtons: any[]; // Array of unlocks with their values

  selectedStyleUnlocks: motif_status; // The status of unlocks in the selected style
  hasAllUnlocks: boolean; // Sets the option for the toggle all button

  ngOnInit(): void {
    this.fetchSelectedStyleData();
  }

  ngAfterViewInit(): void {
    // Code to scroll to the element after view initialization
    this.scrollIntoView(this.selectedStyle);
  }

  //* Nav buttons helpers and setters ***********************************************************

  // Set selectedStyle by given style.
  setStyleByStyle(style: any): void {
    this.selectedStyle = style as styles;
  }

  // Set selectedStyle by index.
  setStyleByIndex(index: number): void {
    this.selectedStyle = this.styles[index];
  }

  // Set styleIndex.
  setStyleIndexByStyle(style: any): void {
    this.styleIndex = this.styles.indexOf(style);
  }

  /**
   * Helper function to prevent out of bounds on the styles array.
   * @returns True if next index would be out of bounds, false otherwise.
   */
  preventOutOfBounds(direction: 'next' | 'prev'): boolean {
    if (direction === 'next' && this.styleIndex + 1 > this.styles.length - 1)
      return true;
    if (direction === 'prev' && this.styleIndex - 1 < 0) return true;
    return false;
  }

  // Creates valid IDs for style buttons.
  sanitizeStyleId(style: string): string {
    const sanitizedStyle = style.replace(/[^a-zA-Z0-9-_]/g, '_');
    return `styleButton-${sanitizedStyle}`;
  }

  // Scrolls the given style button into view.
  scrollIntoView(style: any): void {
    const styleButtonId = `styleButton-${style.replace(
      /[^a-zA-Z0-9-_]/g,
      '_'
    )}`;
    const styleButtonElement = this.stylesWindow.nativeElement.querySelector(
      `#${styleButtonId}`
    ) as HTMLElement;

    if (styleButtonElement) {
      this.stylesWindow.nativeElement.scrollTop = styleButtonElement.offsetTop;
    }
  }

  /**
   * Navigates through the styles array, sets the style index, gets the style's data, and scrolls the style button into view.
   * @param direction Direction to navigate.
   */
  nextOrPrevStyle(direction: 'next' | 'prev'): void {
    if (this.preventOutOfBounds(direction)) return;
    if (direction === 'next') this.styleIndex++;
    else this.styleIndex--;

    this.setStyleByIndex(this.styleIndex);
    this.fetchSelectedStyleData();
    this.scrollIntoView(this.selectedStyle);
  }

  /**
   * Sets the selected style and index, gets the style's data, and scrolls the style button into view.
   */
  handleStyleButtonClick(style: any): void {
    console.log('handleStyleButtonClick called with style:', style);
    this.setStyleByStyle(style);
    this.setStyleIndexByStyle(style);
    this.fetchSelectedStyleData();
    this.scrollIntoView(style);
  }

  //* Style buttons fetch and update ***********************************************************

  processApiResponse = (res: any): [string, boolean][] => {
    console.log('processApiResponse - res: ', res);
    if (res[0].count === 14) this.hasAllUnlocks = true;
    else this.hasAllUnlocks = false;

    delete res[0].count;
    this.unlocksForButtons = this.data.makeCapitalizedTupleArray(res[0]);
    return this.unlocksForButtons;
  };

  // Function to fetch the selected style data (for ngOnInit and when user selects a new item)
  fetchSelectedStyleData(): void {
    this.styleService
      .getAllByMotif(this.selectedStyle)
      .pipe(switchMap((res) => this.processApiResponse(res)))
      .subscribe();
  }

  // Update a single style.
  updateAndSetSingleStyleData(item: string, value: boolean): void {
    this.styleService
      .updateOneStyle(item, this.selectedStyle, value)
      .pipe(switchMap((res) => this.processApiResponse(res)))
      .subscribe();
  }

  // Update multiple styles.
  updateAndSetMultipleStyleData(value: boolean): void {
    this.styleService
      .updateMultipleStyles(this.selectedStyle, value)
      .pipe(switchMap((res) => this.processApiResponse(res)))
      .subscribe();
  }

  // Calls the appropriate update method based on the given button press.
  handleToggleButtons($event: [string, boolean], btn: 'all' | 'one'): void {
    const [trait, value] = $event;
    if (btn === 'all') {
      this.updateAndSetMultipleStyleData(value);
    } else {
      this.updateAndSetSingleStyleData(trait, value);
    }
  }
}
