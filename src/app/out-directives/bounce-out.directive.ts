import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceOut]'
})
export class BounceOutDirective {

  @Input() bounceOutDelay = 0;
  @Input() bounceOutRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
       animate('200ms ease-in-out', style({
         transform: 'scale(0.7)'
       })),
       animate('200ms ease-in-out', style({
         transform: 'scale(1)'
       })),
       animate('200ms ease-in-out', style({
         transform: 'scale(0)',
         opacity: 0
       }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.bounceOutDelay);

    player.onDone(() => {
      for (let i = 1; i < this.bounceOutRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.bounceOutDelay);
      }
    });
  }

}
