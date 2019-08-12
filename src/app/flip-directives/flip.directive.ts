import {Directive, Input, ElementRef, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[animFlip]'
})
export class FlipDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(180deg)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1) rotateY(360deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
