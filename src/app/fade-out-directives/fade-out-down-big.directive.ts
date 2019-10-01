import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutDownBig]'
})
export class FadeOutDownBigDirective implements OnInit {

  @Input() fadeOutDownBigDelay = 0;
  @Input() fadeOutDownBigRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1
      })),
      animate('400ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(400px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutDownBigDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutDownBigRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutDownBigDelay);
      }
    });
  }

}
