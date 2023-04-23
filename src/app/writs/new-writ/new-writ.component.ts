import { Component, OnInit } from '@angular/core';
import { QUALITY, WRIT_TYPE } from 'constants/writs';
import { mat_option } from 'models';

@Component({
  selector: 'new-writ',
  templateUrl: 'new-writ.component.html',
  styleUrls: ['new-writ.component.scss'],
})
export class NewWritComponent implements OnInit {
  constructor() {}

  readonly writTypeOptions: mat_option[] = WRIT_TYPE;
  readonly qualities: mat_option[] = QUALITY;
  ngOnInit() {
    return;
  }
}
