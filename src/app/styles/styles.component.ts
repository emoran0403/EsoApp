import { Component, OnInit } from '@angular/core';
import { UNLOCKS_LIST_FOR_DISPLAY } from 'constants/items';
import { STYLES, styles } from 'constants/styles/styles';
import { StylesService } from '../services/styles.service';
import { motif_status } from '../shared/models';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements OnInit {
  constructor(private readonly styleService: StylesService) {}

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

  /**
   * Associated with Style Buttons.
   * Sets the selected style.
   * Sets the index of the selected style.
   * Makes a service call to get the unlocks associated with the style.
   * @param style The chosen style
   */
  handleStyleButtonClick(style: any): void {
    this.hasSelectedStyle = true;
    this.setStyleByStyle(style);
    this.setStyleIndexByStyle(style);
    this.getUnlocksForSelectedStyle(style);
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
   * Transforms the incoming unlock data values to match the parameter value
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
   * Sets hasAllUnlocks if the player has all 14 unlocks.
   */
  checkAllUnlocks(): void {
    if (this.selectedStyleUnlocks.count === 14) {
      this.hasAllUnlocks = true;
    } else {
      this.hasAllUnlocks = false;
    }
  }

  /**
   * Helper function to prevent out of bounds on the styles array
   * @returns Boolean describing if the next index would be out of bounds
   */
  preventOutOfBounds(direction: 'next' | 'prev'): boolean {
    if (direction === 'next' && this.styleIndex + 1 > this.styles.length - 1)
      return true;
    if (direction === 'prev' && this.styleIndex - 1 < 0) return true;
    return false;
  }

  /**
   * Associated with next and previous buttons.
   * Sets the selected style.
   * Sets the index of the selected style.
   * Makes a service call to get the unlocks associated with the style.
   * @param direction
   */
  nextOrPrevStyle(direction: 'next' | 'prev'): void {
    if (this.preventOutOfBounds(direction)) return;
    if (direction === 'next') this.styleIndex++;
    else this.styleIndex--;

    this.setStyleByIndex(this.styleIndex);
    this.getUnlocksForSelectedStyle(this.selectedStyle);
  }

  /**
   * Makes a service call to get the unlocks for the selected style
   * @param style The style to get the unlocks for.
   */
  getUnlocksForSelectedStyle(style: any): void {
    this.styleService.getAllByMotif(style).subscribe((res) => {
      this.selectedStyleUnlocks = res[0];
      this.checkAllUnlocks();
      this.setUnlocksFromDB();
      console.log('this.selectedStyleUnlocks', this.selectedStyleUnlocks);
    });
  }

  /**
   * Event handler for toggling all unlocks
   * @param $event
   */
  handleToggleAll($event: [string, boolean]): void {
    const [item, value] = $event;
    //! need to make a service call to turn all unlocks to the value
    this.setUnlocksFromToggleAll(value);
  }

  /**
   * Event handler for toggling a single unlock
   * @param $event
   */
  handleToggleUnlock($event: [string, boolean]): void {
    const [item, value] = $event;
    this.styleService
      .updateStyle(item, this.selectedStyle, value)
      .subscribe((response) => {
        console.log('Response: ', response);
      });
  }
}
