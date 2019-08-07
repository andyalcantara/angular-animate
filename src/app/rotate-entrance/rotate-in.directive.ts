import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { AnimationBuilder, animate, style, keyframes } from '@angular/animations';

@Directive({
  selector: '[animRotateIn]'
})
export class RotateInDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'rotate(90deg)'
      })),
      animate('500ms ease-in-out', style({
        opacity: 1,
        transform: 'rotate(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
