import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[appBounceInDown]'
})
export class BounceInDownDirective implements OnInit {

  @Input() delay: number;
  @Input() timing = '300ms';

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  startAnimation() {
    setTimeout(() => {
      const directiveAnimation = this.animationBuilder.build([
        style({
          opacity: 0
        }),
        animate(`${this.timing} ease-in`, style({
          opacity: 0,
          transform: 'translateY(-500px)'
        })),
        animate(`300ms ease-in-out`, style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
        animate(`100ms ease-in-out`, style({
          transform: 'translateY(-20px)'
        })),
        animate(`200ms ease-in-out`, style({
          transform: 'translateY(0)'
        }))
      ]);

      const player = directiveAnimation.create(this.element.nativeElement);
      player.play();
    }, this.delay);
  }

  ngOnInit(): void {
    this.startAnimation();
  }
}
