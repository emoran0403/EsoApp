import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlockButtonComponent } from '../shared/unlock-button/unlock-button.component';

const UI_IMPORTS = [];
const COMPONENTS = [UnlockButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...UI_IMPORTS],
})
export class TraitsModule {}
