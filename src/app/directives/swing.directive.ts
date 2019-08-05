import {Directive, Injectable, ElementRef, Input} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animSwing]'
})
export class SwingDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in', style({
        transform: 'rotate(25deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(-25deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(5deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(-5deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(0deg)'
      })),
    ]);
    const player = directiveAnimation.create(element.nativeElement);
    player.play();
  }

}
