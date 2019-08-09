import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotateDirectiveDirective } from '../directives/rotate-directive.directive';
import { ShakeAtHoverDirective } from '../directives/shake-at-hover.directive';
import { BounceDirective } from '../directives/bounce.directive';
import { FlashDirective } from '../directives/flash.directive';
import { PulseDirective } from '../directives/pulse.directive';
import { RubberDirective } from '../directives/rubber.directive';
import { SwingDirective } from '../directives/swing.directive';
import { TadaDirective } from '../directives/tada.directive';
import { WobbleDirective } from '../directives/wobble.directive';
import { JelloDirective } from '../directives/jello.directive';
import { HeartDirective } from '../directives/heart.directive';
import { BounceInDirective } from '../in-directives/bounce-in.directive';
import { BounceInDownDirective } from '../in-directives/bounce-in-down.directive';
import { BounceInLeftDirective } from '../in-directives/bounce-in-left.directive';
import { BounceInRightDirective } from '../in-directives/bounce-in-right.directive';
import { BounceInUpDirective } from '../in-directives/bounce-in-up.directive';
import { BounceOutDirective } from '../out-directives/bounce-out.directive';
import { BounceOutDownDirective } from '../out-directives/bounce-out-down.directive';
import { BounceOutLeftDirective } from '../out-directives/bounce-out-left.directive';
import { BounceOutRightDirective } from '../out-directives/bounce-out-right.directive';
import { BounceOutUpDirective } from '../out-directives/bounce-out-up.directive';
import { FadeInDirective } from '../entrance-directive/fade-in.directive';
import { FadeInDownDirective } from '../entrance-directive/fade-in-down.directive';
import { FadeInDownBigDirective } from '../entrance-directive/fade-in-down-big.directive';
import { FadeInLeftDirective } from '../entrance-directive/fade-in-left.directive';
import { FadeInLeftBigDirective } from '../entrance-directive/fade-in-left-big.directive';
import { FadeInRightDirective } from '../entrance-directive/fade-in-right.directive';
import { FadeInRightBigDirective } from '../entrance-directive/fade-in-right-big.directive';
import { FadeInUpDirective } from '../entrance-directive/fade-in-up.directive';
import { FadeInUpBigDirective } from '../entrance-directive/fade-in-up-big.directive';
import { FadeOutDirective } from '../fade-out-directives/fade-out.directive';
import { FadeOutDownDirective } from '../fade-out-directives/fade-out-down.directive';
import { FadeOutDownBigDirective } from '../fade-out-directives/fade-out-down-big.directive';
import { FadeOutLeftDirective } from '../fade-out-directives/fade-out-left.directive';
import { FadeOutLeftBigDirective } from '../fade-out-directives/fade-out-left-big.directive';
import { FadeOutRightDirective } from '../fade-out-directives/fade-out-right.directive';
import { FadeOutRightBigDirective } from '../fade-out-directives/fade-out-right-big.directive';
import { FadeOutUpDirective } from '../fade-out-directives/fade-out-up.directive';
import { FadeOutUpBigDirective } from '../fade-out-directives/fade-out-up-big.directive';
import { FlipDirective } from '../flip-directives/flip.directive';
import { FlipInXDirective } from '../flip-directives/flip-in-x.directive';
import { FlipInYDirective } from '../flip-directives/flip-in-y.directive';
import { FlipOutXDirective } from '../flip-directives/flip-out-x.directive';
import { FlipOutYDirective } from '../flip-directives/flip-out-y.directive';
import { LightSpeedInDirective } from '../speed-directives/light-speed-in.directive';
import { LightSpeedOutDirective } from '../speed-directives/light-speed-out.directive';
import { RotateInDirective } from '../rotate-entrance/rotate-in.directive';
import { RotateInDownLeftDirective } from '../rotate-entrance/rotate-in-down-left.directive';
import { RotateOutUpRightDirective } from '../rotate-out/rotate-out-up-right.directive';
import { RotateOutUpLeftDirective } from '../rotate-out/rotate-out-up-left.directive';
import { RotateOutDownRightDirective } from '../rotate-out/rotate-out-down-right.directive';
import { RotateOutDownLeftDirective } from '../rotate-out/rotate-out-down-left.directive';
import { RotateOutDirective } from '../rotate-out/rotate-out.directive';
import { RotateInUpRightDirective } from '../rotate-entrance/rotate-in-up-right.directive';
import { RotateInUpLeftDirective } from '../rotate-entrance/rotate-in-up-left.directive';
import { RotateInDownRightDirective } from '../rotate-entrance/rotate-in-down-right.directive';
import {SlideInUpDirective} from '../slide-in-directives/slide-in-up.directive';
import {SlideInDownDirective} from '../slide-in-directives/slide-in-down.directive';
import {SlideInLeftDirective} from '../slide-in-directives/slide-in-left.directive';
import {SlideInRightDirective} from '../slide-in-directives/slide-in-right.directive';
import {ZoomInDirective} from '../zoom-directives/zoom-in.directive';
import {ZoomInDownDirective} from '../zoom-directives/zoom-in-down.directive';
import {ZoomInLeftDirective} from '../zoom-directives/zoom-in-left.directive';
import {ZoomInRightDirective} from '../zoom-directives/zoom-in-right.directive';
import {ZoomInUpDirective} from '../zoom-directives/zoom-in-up.directive';
import {ZoomOutDirective} from '../zoom-out-directives/zoom-out.directive';

@NgModule({
  declarations: [
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
    FadeInDirective,
    FadeInDownDirective,
    FadeInDownBigDirective,
    FadeInLeftDirective,
    FadeInLeftBigDirective,
    FadeInRightDirective,
    FadeInRightBigDirective,
    FadeInUpDirective,
    FadeInUpBigDirective,
    FadeOutDirective,
    FadeOutDownDirective,
    FadeOutDownBigDirective,
    FadeOutLeftDirective,
    FadeOutLeftBigDirective,
    FadeOutRightDirective,
    FadeOutRightBigDirective,
    FadeOutUpDirective,
    FadeOutUpBigDirective,
    FlipDirective,
    FlipInXDirective,
    FlipInYDirective,
    FlipOutXDirective,
    FlipOutYDirective,
    LightSpeedInDirective,
    LightSpeedOutDirective,
    RotateInDirective,
    RotateInDownLeftDirective,
    RotateInDownRightDirective,
    RotateInUpLeftDirective,
    RotateInUpRightDirective,
    RotateOutDirective,
    RotateOutDownLeftDirective,
    RotateOutDownRightDirective,
    RotateOutUpLeftDirective,
    RotateOutUpRightDirective,
    SlideInUpDirective,
    SlideInDownDirective,
    SlideInLeftDirective,
    SlideInRightDirective,
    ZoomInDirective,
    ZoomInDownDirective,
    ZoomInLeftDirective,
    ZoomInRightDirective,
    ZoomInUpDirective,
    ZoomOutDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
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
    FadeInDirective,
    FadeInDownDirective,
    FadeInDownBigDirective,
    FadeInLeftDirective,
    FadeInLeftBigDirective,
    FadeInRightDirective,
    FadeInRightBigDirective,
    FadeInUpDirective,
    FadeInUpBigDirective,
    FadeOutDirective,
    FadeOutDownDirective,
    FadeOutDownBigDirective,
    FadeOutLeftDirective,
    FadeOutLeftBigDirective,
    FadeOutRightDirective,
    FadeOutRightBigDirective,
    FadeOutUpDirective,
    FadeOutUpBigDirective,
    FlipDirective,
    FlipInXDirective,
    FlipInYDirective,
    FlipOutXDirective,
    FlipOutYDirective,
    LightSpeedInDirective,
    LightSpeedOutDirective,
    RotateInDirective,
    RotateInDownLeftDirective,
    RotateInDownRightDirective,
    RotateInUpLeftDirective,
    RotateInUpRightDirective,
    RotateOutDirective,
    RotateOutDownLeftDirective,
    RotateOutDownRightDirective,
    RotateOutUpLeftDirective,
    RotateOutUpRightDirective,
    SlideInUpDirective,
    SlideInDownDirective,
    SlideInLeftDirective,
    SlideInRightDirective,
    ZoomInDirective,
    ZoomInDownDirective,
    ZoomInLeftDirective,
    ZoomInRightDirective,
    ZoomInUpDirective,
    ZoomOutDirective
  ]
})
export class Angular2AnimationsModule { }
