import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeInUp]'
})
export class FadeInUpDirective implements OnInit {

  @Input() fadeInUpDelay = 0;
  @Input() fadeInUpRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
      animate('300ms ease-in-out', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeInUpDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeInUpRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeInUpDelay);
      }
    });
  }

}
