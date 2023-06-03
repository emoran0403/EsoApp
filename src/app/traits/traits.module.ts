import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const UI_IMPORTS = [];
const COMPONENTS = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...UI_IMPORTS],
})
export class TraitsModule {}
