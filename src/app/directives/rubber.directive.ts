import {Directive, Injectable, ElementRef, Input} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appRubber]'
})
export class RubberDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('100ms ease-in', style({
        transform: 'scaleX(2.0)'
      })),
      animate('50ms', style({
        transform: 'scaleX(0.96)'
      })),
      animate('100ms ease-in', style({
        transform: 'scaleX(1.0)'
      })),
      animate('50ms', style({
        transform: 'scaleX(1.50)'
      })),
      animate('200ms ease-in', style({
        transform: 'scaleX(1.0)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
