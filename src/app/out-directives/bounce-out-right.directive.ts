import { Directive, ElementRef, Input } from '@angular/core';
import {AnimationBuilder, animate, style} from '@angular/animations';

@Directive({
  selector: '[animBounceOutRight]'
})
export class BounceOutRightDirective {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in-out', style({
        transform: 'translateX(35px)'
      })),
      animate('200ms ease-in-out', style({
        transform: 'translateX(0)'
      })),
      animate('180ms ease-in-out', style({
        transform: 'translateX(400px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.delay);

    player.onDone(() => {
      for (let i = 1; i < this.repeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.delay);
      }
    });
  }

}
