import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFlipInX]'
})
export class FlipInXDirective implements OnInit {

  @Input() flipInXDelay = 0;
  @Input() flipInXRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0.7,
        transform: 'scale(1.5) rotateX(90deg)'
      })),
      animate('500ms ease-in-out', style({
        opacity: 1,
        transform: 'scale(1) rotateX(0deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.flipInXDelay);

    player.onDone(() => {
      for (let i = 1; i < this.flipInXRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.flipInXDelay);
      }
    });
  }

}
