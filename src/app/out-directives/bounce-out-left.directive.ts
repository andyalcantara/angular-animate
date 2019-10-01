import {Directive, ElementRef, Input} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceOutLeft]'
})
export class BounceOutLeftDirective {

  @Input() bounceOutLeftDelay = 0;
  @Input() bounceOutLeftRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
      animate('200ms ease-in-out', style({
        transform: 'translateX(-35px)'
      })),
      animate('200ms ease-in-out', style({
        transform: 'translateX(0)'
      })),
      animate('180ms ease-in-out', style({
        transform: 'translateX(-400px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.bounceOutLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.bounceOutLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.bounceOutLeftDelay);
      }
    });
  }

}
