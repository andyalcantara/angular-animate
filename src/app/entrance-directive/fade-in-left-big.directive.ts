import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeInLeftBig]'
})
export class FadeInLeftBigDirective implements OnInit {

  @Input() fadeInLeftBigDelay = 0;
  @Input() fadeInLeftBigRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateX(-800px)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeInLeftBigDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeInLeftBigRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeInLeftBigDelay);
      }
    });
  }

}
