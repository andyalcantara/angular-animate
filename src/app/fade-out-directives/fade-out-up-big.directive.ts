import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutUpBig]'
})
export class FadeOutUpBigDirective implements OnInit {

  @Input() fadeOutUpBigDelay = 0;
  @Input() fadeOutUpBigRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1
      })),
      animate('800ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(-500px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutUpBigDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutUpBigRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutUpBigDelay);
      }
    });
  }

}
