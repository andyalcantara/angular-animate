import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style, keyframes} from '@angular/animations';

@Directive({
  selector: '[animZoomIn]'
})
export class ZoomInDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        transform: 'scale(0)'
      })),
      animate('600ms ease-out', style({
        transform: 'scale(1.0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
