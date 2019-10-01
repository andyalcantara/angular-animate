import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutRightBig]'
})
export class FadeOutRightBigDirective implements OnInit {

  @Input() fadeOutRightBigDelay = 0;
  @Input() fadeOutRightBigRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1
      })),
      animate('500ms ease-in-out', style({
        opacity: 0,
        transform: 'translateX(500px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutRightBigDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutRightBigRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutRightBigDelay);
      }
    });
  }

}
