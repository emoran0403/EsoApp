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

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements OnInit, AfterViewInit {
  @ViewChild('stylesWindow', { static: true }) stylesWindow!: ElementRef;
  constructor(
    private readonly styleService: StylesService,
    private elementRef: ElementRef
  ) {}

  readonly motifPages = UNLOCKS_LIST_FOR_DISPLAY;
  readonly styles = STYLES;

  selectedStyle: styles; // The chosen style
  styleIndex: number; // The Index of the chosen style
  unlocksForButtons: any[]; // Array of unlocks with their values

  selectedStyleUnlocks: motif_status; // The status of unlocks in the selected style
  hasAllUnlocks: boolean = false; // Sets the option for the toggle all button

  // Display booleans
  hasSelectedStyle: boolean = false; //  Disables the toggle all and pages buttons when a style has not been selected

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Code to scroll to the element after view initialization
    this.scrollIntoView(this.selectedStyle);
  }

  /**
   * Helper function to set the selected style.
   * @param style
   */
  setStyleByStyle(style: any): void {
    this.selectedStyle = style as styles;
  }

  /**
   * Helper function to set the selected style via index.
   * @param index
   */
  setStyleByIndex(index: number): void {
    this.selectedStyle = this.styles[index];
  }

  /**
   * Helper function to set the index of the selected style.
   * @param style
   */
  setStyleIndexByStyle(style: any): void {
    this.styleIndex = this.styles.indexOf(style);
  }

  /**
   * Transforms the incoming unlock data so that it may be iterated over for the unlock buttons.
   */
  setUnlocksFromDB(): void {
    const unlocksCopy = { ...this.selectedStyleUnlocks };
    delete unlocksCopy.count;
    this.unlocksForButtons = Object.entries(unlocksCopy);
  }

  /**
   * Transforms the incoming unlock data values to match the parameter value.
   * @param value
   */
  setUnlocksFromToggleAll(value: boolean): void {
    const unlocksCopy = { ...this.selectedStyleUnlocks };
    delete unlocksCopy.count;
    const updatedUnlocks = Object.fromEntries(
      Object.entries(unlocksCopy).map(([key]) => [key, value])
    );
    this.unlocksForButtons = Object.entries(updatedUnlocks);
  }

  /**
   * Sets hasAllUnlocks to be the specified value.
   * @param value Value to set hasAllUnlocks to.
   */
  setToggleAll(value: boolean): void {
    this.hasAllUnlocks = value;
  }

  /**
   * Sets hasAllUnlocks if the player has all 14 unlocks.
   */
  checkToggleAll(): void {
    if (this.selectedStyleUnlocks.count === 14) {
      this.hasAllUnlocks = true;
    } else {
      this.hasAllUnlocks = false;
    }
  }

  /**
   * Helper function to prevent out of bounds on the styles array.
   * @returns Boolean describing if the next index would be out of bounds
   */
  preventOutOfBounds(direction: 'next' | 'prev'): boolean {
    if (direction === 'next' && this.styleIndex + 1 > this.styles.length - 1)
      return true;
    if (direction === 'prev' && this.styleIndex - 1 < 0) return true;
    return false;
  }

  /**
   * Creates valid IDs for the style buttons.
   * @param style
   * @returns
   */
  sanitizeStyleId(style: string): string {
    const sanitizedStyle = style.replace(/[^a-zA-Z0-9-_]/g, '_');
    return `styleButton-${sanitizedStyle}`;
  }

  /**
   * Scrolls the given style button into view.
   * @param style
   */
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
   * Associated with next and previous buttons.
   * Sets the selected style.
   * Sets the index of the selected style.
   * Sets button states via getUnlocksForSelectedStyle.
   * @param direction
   */
  nextOrPrevStyle(direction: 'next' | 'prev'): void {
    if (this.preventOutOfBounds(direction)) return;
    if (direction === 'next') this.styleIndex++;
    else this.styleIndex--;

    this.setStyleByIndex(this.styleIndex);
    this.getUnlocksForSelectedStyle(this.selectedStyle);
    this.scrollIntoView(this.selectedStyle);
  }

  /**
   * Makes a service call to get the unlocks for the selected style.
   * Sets the toggle all button.
   * Sets the individual unlock buttons.
   * @param style The style to get the unlocks for.
   */
  getUnlocksForSelectedStyle(style: any): void {
    this.styleService.getAllByMotif(style).subscribe((res) => {
      this.selectedStyleUnlocks = res[0];
      this.checkToggleAll();
      this.setUnlocksFromDB();
      console.log('this.selectedStyleUnlocks', this.selectedStyleUnlocks);
    });
  }

  /**
   * Associated with Style Buttons.
   * Sets the selected style.
   * Sets the index of the selected style.
   * Makes a service call to get the unlocks associated with the style.
   * @param style The chosen style
   */
  handleStyleButtonClick(style: any): void {
    console.log('handleStyleButtonClick called with style:', style);
    this.hasSelectedStyle = true;
    this.setStyleByStyle(style);
    this.setStyleIndexByStyle(style);
    this.getUnlocksForSelectedStyle(style);
    this.scrollIntoView(style);
  }

  /**
   * Event handler for toggling all unlocks.
   * Makes service call for all unlocks.
   * Sets toggle all to given value.
   * Sets individual unlocks to given value.
   * @param $event
   */
  handleToggleAll($event: [string, boolean]): void {
    const [item, value] = $event;
    this.styleService
      .updateMultipleStyles(this.selectedStyle, value)
      .subscribe((response) => {
        console.log('Response: ', response);
      });
    this.setUnlocksFromToggleAll(value);
    this.setToggleAll(value);
  }

  /**
   * Event handler for toggling a single unlock.
   * Makes service call for single unlock.
   * If set to false, will also set the toggle all to false
   * @param $event
   */
  handleToggleUnlock($event: [string, boolean]): void {
    const [item, value] = $event;
    this.styleService
      .updateStyle(item, this.selectedStyle, value)
      .subscribe((response) => {
        console.log('Response: ', response);
      });
    if (!value) {
      this.setToggleAll(value);
    }
  }
}
