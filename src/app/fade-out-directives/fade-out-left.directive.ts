import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutLeft]'
})
export class FadeOutLeftDirective implements OnInit {

  @Input() fadeOutLeftDelay = 0;
  @Input() fadeOutLeftRepeat = 0;

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
        transform: 'translateX(-100px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutLeftDelay);
      }
    });
  }

}
