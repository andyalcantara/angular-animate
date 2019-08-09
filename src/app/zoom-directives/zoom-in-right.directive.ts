import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[animZoomInRight]'
})
export class ZoomInRightDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('700ms', keyframes([
        style({
          opacity: 0,
          transform: 'scale(0) translateX(700px)'
        }),
        style({
          opacity: 1,
          transform: 'scale(0.7) translateX(0px)'
        }),
        style({
          transform: 'scale(1.0)'
        })
      ]))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
