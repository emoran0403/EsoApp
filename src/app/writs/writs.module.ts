import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewWritComponent } from './new-writ/new-writ.component';
import { PlayerWritsComponent } from './player-writs/player-writs.component';

const UI_IMPORTS = [];
const COMPONENTS = [NewWritComponent];

@NgModule({
  declarations: [...COMPONENTS, PlayerWritsComponent],
  imports: [CommonModule, ...UI_IMPORTS],
})
export class WritsModule {}
