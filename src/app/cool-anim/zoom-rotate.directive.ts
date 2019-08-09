import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animZoomRotate]'
})
export class ZoomRotateDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        opacity: 0,
        transform: 'scale(0) rotate(-45deg)'
      })),
      animate('300ms ease-out', style({
        opacity: 1,
        transform: 'scale(1.0) rotate(20deg)'
      })),
      animate('200ms ease-out', style({
        transform: 'rotate(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
