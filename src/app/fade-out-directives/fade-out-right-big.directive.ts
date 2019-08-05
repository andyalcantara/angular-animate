import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appFadeOutRightBig]'
})
export class FadeOutRightBigDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1
      })),
      animate('500ms ease-in-out', style({
        opacity: 0,
        transform: 'translateX(500px)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
