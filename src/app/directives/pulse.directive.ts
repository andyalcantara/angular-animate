import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animPulse]'
})
export class PulseDirective implements OnInit {

  @Input() pulseDelay = 0;
  @Input() pulseRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
  }

  animation() {
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms ease-in', style({
        transform: 'scale(1.2)'
      })),

      animate('200ms ease-in', style({
        transform: 'scale(1)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    setTimeout(() => {
      player.play();
    }, this.pulseDelay);

    player.onDone(() => {
      for (let i = 1; i < this.pulseRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.pulseDelay);
      }
    });
  }

  ngOnInit(): void {
    this.animation();
  }

}
