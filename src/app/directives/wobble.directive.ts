import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[animWobble]'
})
export class WobbleDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in', style({
        transform: 'rotate(-10deg) translateX(-100px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(10deg) translateX(100px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-10deg) translateX(-60px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(10deg) translateX(60px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-10deg) translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(10deg) translateX(20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(0deg) translateX(0)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
