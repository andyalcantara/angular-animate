import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRotateInUpRight]'
})
export class RotateInUpRightDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transformOrigin: 'bottom right',
        transform: 'rotate(-45deg)'
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
