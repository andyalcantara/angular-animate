import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';
import { Angular2AnimationsModule } from './angular2/angular2.module';
import { LightSpeedOutDirective } from './speed-directives/light-speed-out.directive';
import { RotateInDirective } from './rotate-entrance/rotate-in.directive';
import { RotateInDownLeftDirective } from './rotate-entrance/rotate-in-down-left.directive';

@NgModule({
  declarations: [
    AppComponent,
    LightSpeedOutDirective,
    RotateInDirective,
    RotateInDownLeftDirective
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
