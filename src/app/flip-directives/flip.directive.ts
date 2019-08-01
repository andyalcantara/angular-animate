import { Directive, Input, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[appFlip]'
})
export class FlipDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(180deg)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1) rotateY(360deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
