import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFlipInY]'
})
export class FlipInYDirective implements OnInit {

  @Input() flipInYDelay = 0;
  @Input() flipInYRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transform: 'scale(1.5) rotateY(-120deg)'
      })),
      animate('600ms ease-in-out', style({
        opacity: 1,
        transform: 'scale(1) rotateY(0deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.flipInYDelay);

    player.onDone(() => {
      for (let i = 1; i < this.flipInYRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.flipInYDelay);
      }
    });
  }

}
