import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutDown]'
})
export class FadeOutDownDirective implements OnInit {

  @Input() fadeOutDownDelay = 0;
  @Input() fadeOutDownRepeat = 0;

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
        transform: 'translateY(100px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutDownDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutDownRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutDownDelay);
      }
    });
  }

}
