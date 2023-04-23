import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

import { WritsComponent } from './writs/writs.component';
import { NewWritComponent } from './writs/new-writ/new-writ.component';
import { PlayerWritsComponent } from './writs/player-writs/player-writs.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

const ANGULAR_MATERIAL = [MatSlideToggleModule, MatSelectModule];

//! I should be able to wrap these within their parent module, but not sure how to do that yet
const CHILDREN_COMPONENTS = [NewWritComponent, PlayerWritsComponent];

//* Parent modules
const PARENT_MODULES = [WritsComponent];

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    ...PARENT_MODULES,
    ...CHILDREN_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...ANGULAR_MATERIAL,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
