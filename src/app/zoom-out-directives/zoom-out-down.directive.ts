import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animZoomOutDown]'
})
export class ZoomOutDownDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        opacity: 1,
        transform: 'scale(1.0)'
      })),
      animate('600ms ease-out', style({
        opacity: 1,
        transform: 'scale(0.6)'
      })),
      animate('600ms ease-out', style({
        transform: 'scale(0.6) translateY(500px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
