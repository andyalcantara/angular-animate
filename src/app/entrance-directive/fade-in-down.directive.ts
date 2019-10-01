import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFadeInDown]'
})
export class FadeInDownDirective implements OnInit {

  @Input() fadeInDownDelay = 0;
  @Input() fadeInDownRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'translateY(-100px)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.fadeInDownDelay);

    player.onDone(() => {
      for (let i = 1; i < this.fadeInDownRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.fadeInDownDelay);
      }
    });
  }
}
