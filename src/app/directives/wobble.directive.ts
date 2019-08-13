import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[animWobble]'
})
export class WobbleDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms ease-in', style({
        transform: 'rotate(-10deg) translateX(-100px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(10deg) translateX(100px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-10deg) translateX(-60px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(10deg) translateX(60px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-10deg) translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(10deg) translateX(20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(0deg) translateX(0)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.delay);

    player.onDone(() => {
      let counter = 0;
      for (let i = 1; i < this.repeat; i++) {
        counter = i;
        setTimeout(() => {
          player.play();
        }, i * this.delay);
      }
    });
  }

}
