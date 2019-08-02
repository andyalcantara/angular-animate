import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFlipInY]'
})
export class FlipInYDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'scale(1.5) rotate(20deg)'
      })),
      animate('500ms ease-in-out', style({
        opacity: 1,
        transform: 'scale(1) rotate(0deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
