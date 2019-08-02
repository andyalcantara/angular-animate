import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFlipOutY]'
})
export class FlipOutYDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('0ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(0)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(-45deg)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(100deg)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
