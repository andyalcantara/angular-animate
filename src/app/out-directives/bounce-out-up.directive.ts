import {Directive, ElementRef, Input} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceOutUp]'
})
export class BounceOutUpDirective {

  @Input() bounceOutUpDelay = 0;
  @Input() bounceOutUpRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in-out', style({
        transform: 'translateY(-35px)'
      })),
      animate('200ms ease-in-out', style({
        transform: 'translateY(0)'
      })),
      animate('180ms ease-in-out', style({
        transform: 'translateY(-400px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.bounceOutUpDelay);

    player.onDone(() => {
      for (let i = 1; i < this.bounceOutUpRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.bounceOutUpDelay);
      }
    });
  }

}
