import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRotateOut]'
})
export class RotateOutDirective implements OnInit {
  @Input() rotateOutDelay = 0;
  @Input() rotateOutRepeat = 0;

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
        transform: 'rotate(180deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.rotateOutDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rotateOutRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rotateOutDelay);
      }
    });
  }

}
