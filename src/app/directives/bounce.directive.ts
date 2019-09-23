import {Directive, ElementRef, Injectable, HostListener, Input, OnInit, AfterViewInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animBounce]'
})
export class BounceDirective implements OnInit {

  @Input() atOnInit = false;
  @Input() bounceDelay = 0;
  @Input() bounceRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
      const directiveAnimation = this.animationBuilder.build([
        animate('50ms ease-in', style({
          transform: 'translateY(0px)'
        })),
        animate('300ms ease-out', style({
          transform: 'translateY(-40px)'
        })),
        animate('50ms ease-in', style({
          transform: 'translateY(0px)'
        })),
        animate('200ms ease-out', style({
          transform: 'translateY(-20px)'
        })),
        animate('100ms ease-in', style({
          transform: 'translateY(0px)'
        }))
      ]);

      const player = directiveAnimation.create(this.element.nativeElement);

      setTimeout(() => {
        player.play();
      }, this.bounceDelay);

      player.onDone(() => {
        for (let i = 1; i < this.bounceRepeat; i++) {
          setTimeout(() => {
            player.play();
          }, i * this.bounceDelay);
        }
      });
  }
}
