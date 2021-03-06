import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOut]'
})
export class FadeOutDirective implements OnInit {

  @Input() fadeOutDelay = 0;
  @Input() fadeOutRepeat = 0;

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
        opacity: 0
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutDelay);
      }
    });
  }

}
