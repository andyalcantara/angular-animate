import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appBounceOutDown]'
})
export class BounceOutDownDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in-out', style({
        transform: 'translateY(35px)'
      })),
      animate('200ms ease-in-out', style({
        transform: 'translateY(0)'
      })),
      animate('180ms ease-in-out', style({
        transform: 'translateY(400px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
