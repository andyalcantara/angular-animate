import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeInRight]'
})
export class FadeInRightDirective implements OnInit {

  @Input() fadeInRightDelay = 0;
  @Input() fadeInRightRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateX(100px)'
      })),
      animate('400ms ease-in-out', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeInRightDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeInRightRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeInRightDelay);
      }
    });
  }

}
