import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[animLightSpeedOut]'
})
export class LightSpeedOutDirective implements OnInit {

  @Input() lightSpeedInDelay = 0;
  @Input() lightSpeedInRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate(700, keyframes([
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }),
        style({
          opacity: 0,
          transform: 'translateX(400px) skewX(42deg)'
        })
      ]))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.lightSpeedInDelay);

    player.onDone(() => {
      for (let i = 1; i < this.lightSpeedInRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.lightSpeedInDelay);
      }
    });
  }

}
