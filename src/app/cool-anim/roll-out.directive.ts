import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRollOut]'
})
export class RollOutDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        opacity: 1
      })),
      animate('700ms ease-in-out', style({
        transform: 'translateX(500px) rotate(120deg)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
