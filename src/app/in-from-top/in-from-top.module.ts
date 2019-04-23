import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InFromTopComponent} from './in-from-top/in-from-top.component';
import { InFromTopDirective } from '../in-from-top.directive';

@NgModule({
  declarations: [InFromTopComponent, InFromTopDirective],
  imports: [
    CommonModule
  ],
  exports: [InFromTopComponent]
})
export class InFromTopModule { }
