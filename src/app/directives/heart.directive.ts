import { Directive, ElementRef, Input } from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[appHeart]'
})
export class HeartDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-out', style({
        transform: 'scale(1.5)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0)'
      })),
      animate('200ms ease-out', style({
        transform: 'scale(1.5)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
