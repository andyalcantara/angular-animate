import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';
import { Angular2AnimationsModule } from './angular2/angular2.module';
import { SlideInUpDirective } from './slide-in-directives/slide-in-up.directive';
import { SlideInDownDirective } from './slide-in-directives/slide-in-down.directive';
import { SlideInLeftDirective } from './slide-in-directives/slide-in-left.directive';

@NgModule({
  declarations: [
    AppComponent,
    SlideInUpDirective,
    SlideInDownDirective,
    SlideInLeftDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InFromTopModule,
    InFromBottomModule,
    Angular2AnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
