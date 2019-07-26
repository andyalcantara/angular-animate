import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appBounceIn]'
})
export class BounceInDirective implements OnInit {

  @Input() delay = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  startAnimation() {
    setTimeout(() => {
      const directiveAnimation = this.animationBuilder.build([
        animate('0ms ease-in', style({
          opacity: 0
        })),
        animate('200ms ease-in', style({
          transform: 'scale(1.5)',
          opacity: 1,
        })),
        animate('200ms ease-in', style({
          transform: 'scale(1.0)'
        })),
        animate('200ms ease-in', style({
          transform: 'scale(1.3)'
        })),
        animate('200ms ease-in', style({
          transform: 'scale(1.0)'
        }))
      ]);

      const player = directiveAnimation.create(this.element.nativeElement);
      player.play();
    }, this.delay);
  }

  ngOnInit() {
    this.startAnimation();
  }

}
