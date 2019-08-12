import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animBounceOut]'
})
export class BounceOutDirective {

  @Input() delay: number;
  @Input() timing = '300ms';

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
       animate('200ms ease-in-out', style({
         transform: 'scale(0.7)'
       })),
       animate('200ms ease-in-out', style({
         transform: 'scale(1)'
       })),
       animate('200ms ease-in-out', style({
         transform: 'scale(0)',
         opacity: 0
       }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
