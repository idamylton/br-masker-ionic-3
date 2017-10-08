import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrMaskerIonic3 } from './directives/brmasker-ionic-3';


@NgModule({
  declarations: [
    BrMaskerIonic3
  ],
  exports: [
    BrMaskerIonic3
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BrMaskerModule {}
