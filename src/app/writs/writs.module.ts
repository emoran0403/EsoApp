import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewWritComponent } from './new-writ/new-writ.component';
import { PlayerWritsComponent } from './player-writs/player-writs.component';
import { WritCardComponent } from './writ-card/writ-card.component';

const UI_IMPORTS = [];
const COMPONENTS = [NewWritComponent, PlayerWritsComponent, WritCardComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...UI_IMPORTS],
})
export class WritsModule {}
