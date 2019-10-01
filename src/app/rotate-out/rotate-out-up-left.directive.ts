import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRotateOutUpLeft]'
})
export class RotateOutUpLeftDirective implements OnInit {

  @Input() rotateOutUpLeftDelay = 0;
  @Input() rotateOutUpLeftRepeat = 0;

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
        transformOrigin: 'top left',
        transform: 'rotate(-90deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.rotateOutUpLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rotateOutUpLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rotateOutUpLeftDelay);
      }
    });
  }

}
