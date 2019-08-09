import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';
import { Angular2AnimationsModule } from './angular2/angular2.module';
import { HingeDirective } from './cool-anim/hinge.directive';
import { ZoomRotateDirective } from './cool-anim/zoom-rotate.directive';
import { RollInDirective } from './cool-anim/roll-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    HingeDirective,
    ZoomRotateDirective,
    RollInDirective
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
