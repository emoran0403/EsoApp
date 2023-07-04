import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WritsComponent } from './writs/writs.component';
import { NewWritComponent } from './writs/new-writ/new-writ.component';
import { PlayerWritsComponent } from './writs/player-writs/player-writs.component';
import { WritCardComponent } from './writs/writ-card/writ-card.component';

import { TraitsComponent } from './traits/traits.component';

import { StylesComponent } from './styles/styles.component';

import {
  NgbModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

import { UnlockButtonComponent } from './shared/unlock-button/unlock-button.component';
import { SelectDropdownComponent } from './shared/select-dropdown/select-dropdown.component';
import { TypeAheadComponent } from './shared/type-ahead/type-ahead.component';

import { JsonPipe } from '@angular/common';

//! I should be able to wrap these within their parent module, but not sure how to do that yet
const SHARED_COMPONENTS = [
  UnlockButtonComponent,
  SelectDropdownComponent,
  TypeAheadComponent,
];

const CHILDREN_COMPONENTS = [
  NewWritComponent,
  PlayerWritsComponent,
  WritCardComponent,
  TraitsComponent,
];

//* Parent modules
const PARENT_MODULES = [WritsComponent, TraitsComponent, StylesComponent];

const NG_BOOTSTRAP_MODULES = [NgbModule, NgbTypeaheadModule, NgbDropdownModule];

@NgModule({
  declarations: [
    AppComponent,
    ...PARENT_MODULES,
    ...CHILDREN_COMPONENTS,
    ...SHARED_COMPONENTS,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    JsonPipe,
    HttpClientModule,
    ReactiveFormsModule,
    ...NG_BOOTSTRAP_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
