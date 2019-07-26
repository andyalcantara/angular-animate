import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appBounceOutLeft]'
})
export class BounceOutLeftDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in-out', style({
        transform: 'translateX(-35px)'
      })),
      animate('200ms ease-in-out', style({
        transform: 'translateX(0)'
      })),
      animate('180ms ease-in-out', style({
        transform: 'translateX(-400px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
