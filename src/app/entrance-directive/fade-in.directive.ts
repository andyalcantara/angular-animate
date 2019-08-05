import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {

  @Input() delay: string;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0
      })),
      animate('600ms ease-in-out', style({
        opacity: 1
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
