import { Directive, ElementRef, Input } from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[appBounceIn]'
})
export class BounceInDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {

    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in', style({
        opacity: 0
      })),
      animate('200ms ease-in', style({
        transform: 'scale(1.5)',
        opacity: 1,
      })),
      animate('200ms ease-in', style({
        transform: 'scale(1.0)'
      })),
      animate('200ms ease-in', style({
        transform: 'scale(1.3)'
      })),
      animate('200ms ease-in', style({
        transform: 'scale(1.0)'
      }))
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
