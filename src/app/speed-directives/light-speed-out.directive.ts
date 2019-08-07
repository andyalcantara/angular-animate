import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[animLightSpeedOut]'
})
export class LightSpeedOutDirective implements OnInit {

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
    player.play();
  }

}
