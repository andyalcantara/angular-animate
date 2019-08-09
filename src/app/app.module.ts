import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';
import { Angular2AnimationsModule } from './angular2/angular2.module';
import { ZoomOutDownDirective } from './zoom-out-directives/zoom-out-down.directive';
import { ZoomOutLeftDirective } from './zoom-out-directives/zoom-out-left.directive';
import { ZoomOutRightDirective } from './zoom-out-directives/zoom-out-right.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZoomOutDownDirective,
    ZoomOutLeftDirective,
    ZoomOutRightDirective
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
