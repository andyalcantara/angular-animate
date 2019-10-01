import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutLeftBig]'
})
export class FadeOutLeftBigDirective implements OnInit {

  @Input() fadeOutLeftBigDelay = 0;
  @Input() fadeOutLeftBigRepeat = 0;

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
        transform: 'translateX(-400px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutLeftBigDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutLeftBigRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutLeftBigDelay);
      }
    });
  }

}
