import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceInLeft]'
})
export class BounceInLeftDirective implements OnInit {

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
          transform: 'translateX(-500px)'
        })),
        animate(`300ms ease-in-out`, style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        animate(`100ms ease-in-out`, style({
          transform: 'translateX(-20px)'
        })),
        animate(`200ms ease-in-out`, style({
          transform: 'translateX(0)'
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
