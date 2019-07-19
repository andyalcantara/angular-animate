import { Directive, ElementRef, Injectable } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appFlash]'
})
export class FlashDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('300ms ease-in', style({
        opacity: 1
      })),
      animate('200ms ease-out', style({
        opacity: 0
      })),
      animate('300ms ease-in', style({
        opacity: 1
      })),
      animate('200ms ease-out', style({
        opacity: 0
      })),
      animate('300ms ease-in', style({
        opacity: 1
      }))
    ]);

    const player = directiveAnimation.create(element.nativeElement);
    player.play();
  }

}
