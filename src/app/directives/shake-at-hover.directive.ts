import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animShake]'
})
export class ShakeAtHoverDirective implements OnInit {

  @Input() shakeDelay = 0;
  @Input() shakeRepeat = 0;

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
    }, this.shakeDelay);

    player.onDone(() => {
      for (let i = 1; i < this.shakeRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.shakeDelay);
      }
    });
  }
}
