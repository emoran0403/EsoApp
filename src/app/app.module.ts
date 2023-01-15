import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ButtonListComponent } from './components/button-list/button-list.component';
import { WritCardComponent } from './components/writ-card/writ-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ButtonListComponent,
    WritCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
