import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animShake]'
})
export class ShakeAtHoverDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('100ms ease-in', style({
        transform: 'translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(20px)'
      })),
      style({
        transform: 'translateX(0)'
      })
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
