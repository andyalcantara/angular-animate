import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[appJello]'
})
export class JelloDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('150ms ease-in', style({
        transform: 'skewY(20deg) scaleX(1.1)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(-20deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(10deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(-10deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(-5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(0deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
