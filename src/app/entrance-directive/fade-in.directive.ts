import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[animFadeIn]'
})
export class FadeInDirective implements OnInit {

  @Input() fadeInDelay = 0;
  @Input() fadeInRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0
      })),
      animate('600ms ease-in-out', style({
        opacity: 1
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeInDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeInRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeInDelay);
      }
    });
  }

}
