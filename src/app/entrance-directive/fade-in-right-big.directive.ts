import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFadeInRightBig]'
})
export class FadeInRightBigDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateX(600px)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
