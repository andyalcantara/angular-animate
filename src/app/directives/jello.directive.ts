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
      animate('200ms ease-in', style({
        transform: 'rotate(-30deg) scaleX(1.5)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
