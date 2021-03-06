import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRotateOutDownRight]'
})
export class RotateOutDownRightDirective implements OnInit {

  @Input() rotateOutDownRightDelay = 0;
  @Input() rotateOutDownRightRepeat = 0;

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
        transformOrigin: 'bottom right',
        transform: 'rotate(-45deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.rotateOutDownRightDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rotateOutDownRightRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rotateOutDownRightDelay);
      }
    });
  }

}
