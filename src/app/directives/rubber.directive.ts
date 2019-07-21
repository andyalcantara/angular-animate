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
      animate('400ms ease-in', style({
        transform: 'scaleX(2.0)'
      })),
      animate('100ms ease-out', style({
        transform: 'scaleX(1.0)'
      })),
      animate('150ms ease-in', style({
        transform: 'scaleX(1.50)'
      })),
      animate('100ms ease-out', style({
        transform: 'scaleX(1.0)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
