import { Component, OnInit } from '@angular/core';
import { UNLOCKS_LIST_FOR_DISPLAY } from 'constants/items';
import { STYLES, styles } from 'constants/styles/styles';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements OnInit {
  constructor() {}

  readonly motifPages = UNLOCKS_LIST_FOR_DISPLAY;
  readonly styles = STYLES;

  selectedStyle: styles; // The chosen style
  styleIndex: number; // The Index of the chosen style

  // Display booleans
  hasSelectedStyle: boolean = false; //  Disables the toggle all and pages buttons when a style has not been selected

  ngOnInit(): void {}

  //! This needs to be set when the styles are loaded - it is false for now
  allTraitsKnown: boolean = false;

  /**
   * Sets the selected style.
   * @param style The chosen style
   */
  setStyle(style: any): void {
    this.hasSelectedStyle = true;
    this.selectedStyle = style as styles;
    this.styleIndex = this.styles.indexOf(style);
    console.log(
      'styles component - setStyle() - this.styleIndex: ',
      this.styleIndex
    );
  }

  nextOrPrevStyle(direction: 'next' | 'prev'): void {
    if (direction === 'next') {
      this.styleIndex++;
    } else {
      this.styleIndex--;
    }
    console.log(
      'styles component - nextOrPrevStyle() - this.styleIndex: ',
      this.styleIndex
    );
    this.selectedStyle = this.styles[this.styleIndex];
  }
}
