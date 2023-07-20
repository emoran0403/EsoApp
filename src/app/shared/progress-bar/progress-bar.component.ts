import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() percentage: number; // Input percentage value (0 to 100)

  ngOnInit(): void {}

  /**
   * Determine the color class based on the percentage.
   * @param percentage The percentage value.
   * @returns A string describing the color.
   */
  getColorClass(percentage: number): string {
    if (percentage < 50) {
      return 'red';
    } else if (percentage >= 50 && percentage < 75) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}
