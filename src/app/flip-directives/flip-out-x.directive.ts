import {Directive, ElementRef, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFlipOutX]'
})
export class FlipOutXDirective implements OnInit {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        transform: 'scale(1.5) rotateX(0)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateX(-45deg)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateX(100deg)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

}
