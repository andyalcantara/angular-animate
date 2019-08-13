import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[animJello]'
})
export class JelloDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('150ms ease-in', style({
        transform: 'skewY(20deg) scaleX(1.1)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(-20deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(10deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(-10deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(-5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'skewY(0deg)'
      }))
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
