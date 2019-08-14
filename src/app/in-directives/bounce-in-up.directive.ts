import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceInUp]'
})
export class BounceInUpDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      style({
        opacity: 0
      }),
      animate(`300ms ease-in`, style({
        opacity: 0,
        transform: 'translateY(500px)'
      })),
      animate(`300ms ease-in-out`, style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      animate(`100ms ease-in-out`, style({
        transform: 'translateY(20px)'
      })),
      animate(`200ms ease-in-out`, style({
        transform: 'translateY(0)'
      }))
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    });

    player.onDone(() => {
      for (let i = 1; i < this.repeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.delay);
      }
    });
  }

}
