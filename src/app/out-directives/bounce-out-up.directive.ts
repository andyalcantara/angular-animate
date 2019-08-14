import {Directive, ElementRef, Input} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceOutUp]'
})
export class BounceOutUpDirective {

  @Input() delay = 0;
  @Input() repeat = 0;

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
