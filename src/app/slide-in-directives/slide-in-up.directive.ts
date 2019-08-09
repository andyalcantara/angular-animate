import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AnimationBuilder, animate, style} from '@angular/animations';

@Directive({
  selector: '[animSlideInUp]'
})
export class SlideInUpDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in', style({
        transform: 'translateY(200px)'
      })),
      animate('600ms ease-in-out', style({
        transform: 'translateY(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}