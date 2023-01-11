import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ButtonListComponent } from './components/button-list/button-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ButtonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
