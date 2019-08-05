import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animPulse]'
})
export class PulseDirective implements OnInit {

  @Input() appPulse: number;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
  }

  animation() {
    const directiveAnimation = this.animationBuilder.build([
      animate(this.appPulse + 'ms ease-in', style({
        transform: 'scale(1.2)'
      })),

      animate(this.appPulse + 'ms ease-in', style({
        transform: 'scale(1)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

  ngOnInit(): void {
    this.animation();
  }

}
