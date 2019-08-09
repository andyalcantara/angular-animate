import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRollIn]'
})
export class RollInDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        opacity: 0,
        transform: 'translateX(-500px) rotate(-120deg)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'translateX(0) rotate(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
