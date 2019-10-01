import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRotateOutDownLeft]'
})
export class RotateOutDownLeftDirective implements OnInit {

  @Input() rotateOutDownLeftDelay = 0;
  @Input() rotateOutDownLeftRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 1,
        transform: 'rotate(0)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 0,
        transformOrigin: 'bottom left',
        transform: 'rotate(45deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.rotateOutDownLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rotateOutDownLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rotateOutDownLeftDelay);
      }
    });
  }

}
