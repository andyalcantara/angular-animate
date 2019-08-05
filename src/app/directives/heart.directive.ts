import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[animHeart]'
})
export class HeartDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms ease-out', style({
        transform: 'scale(1.5)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0)'
      })),
      animate('200ms ease-out', style({
        transform: 'scale(1.5)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.2)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
