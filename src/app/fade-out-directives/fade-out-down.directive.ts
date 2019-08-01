import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFadeOutDown]'
})
export class FadeOutDownDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1
      })),
      animate('800ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
