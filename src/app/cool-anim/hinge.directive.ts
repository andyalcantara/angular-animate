import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animHinge]'
})
export class HingeDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('400ms ease-in-out', style({
        transformOrigin: 'bottom left',
        transform: 'rotate(75deg)'
      })),
      animate('200ms ease-out', style({
        transform: 'rotate(55deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(70deg)'
      })),
      animate('200ms ease-out', style({
        transform: 'rotate(50deg)'
      })),
      animate('400ms ease-out', style({
        transform: 'translateY(500px) translateX(20px)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
