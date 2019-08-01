import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFadeOut]'
})
export class FadeOutDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1
      })),
      animate('800ms ease-in-out', style({
        opacity: 0
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
