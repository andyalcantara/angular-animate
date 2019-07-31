import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFadeInDownBig]'
})
export class FadeInDownBigDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(-500px)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
