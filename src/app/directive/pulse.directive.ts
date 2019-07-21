import { Directive, ElementRef, Injectable } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appPulse]'
})
export class PulseDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('100ms ease-in', style({
        transform: 'scale(1.2)'
      })),

      animate('100ms ease-in', style({
        transform: 'scale(1)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
