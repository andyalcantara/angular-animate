import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeInUpBig]'
})
export class FadeInUpBigDirective implements OnInit {

  @Input() fadeInUpBigDelay = 0;
  @Input() fadeInUpBigRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(600px)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeInUpBigDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeInUpBigRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeInUpBigDelay);
      }
    });
  }

}
