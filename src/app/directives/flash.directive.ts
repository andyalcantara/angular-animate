import {Directive, ElementRef, Injectable, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animFlash]'
})
export class FlashDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('300ms ease-in', style({
        opacity: 1
      })),
      animate('200ms ease-out', style({
        opacity: 0
      })),
      animate('300ms ease-in', style({
        opacity: 1
      })),
      animate('200ms ease-out', style({
        opacity: 0
      })),
      animate('300ms ease-in', style({
        opacity: 1
      }))
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
