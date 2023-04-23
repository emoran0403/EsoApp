import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WritsComponent } from './writs/writs.component';
import { NewWritComponent } from './writs/new-writ/new-writ.component';
import { PlayerWritsComponent } from './writs/player-writs/player-writs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//! I should be able to wrap these within their parent module, but not sure how to do that yet
const CHILDREN_COMPONENTS = [NewWritComponent, PlayerWritsComponent];

//* Parent modules
const PARENT_MODULES = [WritsComponent];

@NgModule({
  declarations: [AppComponent, ...PARENT_MODULES, ...CHILDREN_COMPONENTS],
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
