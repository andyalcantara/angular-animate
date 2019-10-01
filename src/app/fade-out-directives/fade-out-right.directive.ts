import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeOutRight]'
})
export class FadeOutRightDirective implements OnInit {

  @Input() fadeOutRightDelay = 0;
  @Input() fadeOutRightRepeat = 0;

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
        transform: 'translateX(100px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeOutRightDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeOutRightRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeOutRightDelay);
      }
    });
  }

}
