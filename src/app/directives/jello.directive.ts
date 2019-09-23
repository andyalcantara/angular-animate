import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[animJello]'
})
export class JelloDirective implements OnInit {

  @Input() jelloDelay = 0;
  @Input() jelloRepeat = 0;

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
    }, this.jelloDelay);

    player.onDone(() => {
      for (let i = 1; i < this.jelloRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.jelloDelay);
      }
    });
  }

}
