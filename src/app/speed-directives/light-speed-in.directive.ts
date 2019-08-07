import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, animate, style, keyframes } from '@angular/animations';

@Directive({
  selector: '[animLightSpeedIn]'
})
export class LightSpeedInDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate(400, keyframes([
        style({
          opacity: 0,
          transform: 'translateX(400px) skewX(-22deg)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ])),
      animate(400, keyframes([
        style({
          transform: 'skewX(22deg)'
        }),
        style({
          transform: 'skewX(-10deg)'
        }),
        style({
          transform: 'skewX(0)'
        })
      ]))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
