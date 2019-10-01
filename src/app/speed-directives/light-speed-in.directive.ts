import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, animate, style, keyframes } from '@angular/animations';

@Directive({
  selector: '[animLightSpeedIn]'
})
export class LightSpeedInDirective implements OnInit {

  @Input() lightSpeedInDelay = 0;
  @Input() lightSpeedInRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate(400, keyframes([
        style({
          opacity: 0,
          transform: 'translateX(400px) skewX(-42deg)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ])),
      animate(400, keyframes([
        style({
          transform: 'skewX(42deg)'
        }),
        style({
          transform: 'skewX(-20deg)'
        }),
        style({
          transform: 'skewX(0)'
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
