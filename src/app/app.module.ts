import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';
import { RotateDirectiveDirective } from './directives/rotate-directive.directive';
import { ShakeAtHoverDirective } from './directives/shake-at-hover.directive';
import { BounceDirective } from './directives/bounce.directive';
import { FlashDirective } from './directives/flash.directive';
import { PulseDirective } from './directives/pulse.directive';
import { RubberDirective } from './directives/rubber.directive';
import { SwingDirective } from './directives/swing.directive';
import { TadaDirective } from './directives/tada.directive';
import { WobbleDirective } from './directives/wobble.directive';
import { JelloDirective } from './directives/jello.directive';
import { HeartDirective } from './directives/heart.directive';
import { BounceInDirective } from './in-directives/bounce-in.directive';
import { BounceInDownDirective } from './in-directives/bounce-in-down.directive';
import { BounceInLeftDirective } from './in-directives/bounce-in-left.directive';
import { BounceInRightDirective } from './in-directives/bounce-in-right.directive';
import { BounceInUpDirective } from './in-directives/bounce-in-up.directive';
import { BounceOutDirective } from './out-directives/bounce-out.directive';
import { BounceOutDownDirective } from './out-directives/bounce-out-down.directive';
import { BounceOutLeftDirective } from './out-directives/bounce-out-left.directive';
import { BounceOutRightDirective } from './out-directives/bounce-out-right.directive';
import { BounceOutUpDirective } from './out-directives/bounce-out-up.directive';
import { FadeInDirective } from './entrance-directive/fade-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    RotateDirectiveDirective,
    ShakeAtHoverDirective,
    BounceDirective,
    FlashDirective,
    PulseDirective,
    RubberDirective,
    SwingDirective,
    TadaDirective,
    WobbleDirective,
    JelloDirective,
    HeartDirective,
    BounceInDirective,
    BounceInDownDirective,
    BounceInLeftDirective,
    BounceInRightDirective,
    BounceInUpDirective,
    BounceOutDirective,
    BounceOutDownDirective,
    BounceOutLeftDirective,
    BounceOutRightDirective,
    BounceOutUpDirective,
    FadeInDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InFromTopModule,
    InFromBottomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
