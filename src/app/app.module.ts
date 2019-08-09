import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';
import { Angular2AnimationsModule } from './angular2/angular2.module';
import { ZoomInDirective } from './zoom-directives/zoom-in.directive';
import { ZoomInDownDirective } from './zoom-directives/zoom-in-down.directive';
import { ZoomInLeftDirective } from './zoom-directives/zoom-in-left.directive';
import { ZoomInRightDirective } from './zoom-directives/zoom-in-right.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZoomInDirective,
    ZoomInDownDirective,
    ZoomInLeftDirective,
    ZoomInRightDirective
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
