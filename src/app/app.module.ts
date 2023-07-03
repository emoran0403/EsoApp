import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { WritsComponent } from './writs/writs.component';
import { NewWritComponent } from './writs/new-writ/new-writ.component';
import { PlayerWritsComponent } from './writs/player-writs/player-writs.component';
import { WritCardComponent } from './writs/writ-card/writ-card.component';

import { TraitsComponent } from './traits/traits.component';
import { StylesComponent } from './styles/styles.component';
import { UnlockButtonComponent } from './shared/unlock-button/unlock-button.component';
import { SelectorComponent } from './shared/selector/selector.component';
import { SelectDropdownComponent } from './shared/select-dropdown/select-dropdown.component';

//! I should be able to wrap these within their parent module, but not sure how to do that yet
const SHARED_COMPONENTS = [UnlockButtonComponent];

const CHILDREN_COMPONENTS = [
  NewWritComponent,
  PlayerWritsComponent,
  WritCardComponent,
  TraitsComponent,
];

//* Parent modules
const PARENT_MODULES = [WritsComponent, TraitsComponent, StylesComponent];

@NgModule({
  declarations: [
    AppComponent,
    ...PARENT_MODULES,
    ...CHILDREN_COMPONENTS,
    ...SHARED_COMPONENTS,
    UnlockButtonComponent,
    SelectorComponent,
    SelectDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
