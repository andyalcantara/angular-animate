import {Directive, Input, ElementRef, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[animFlip]'
})
export class FlipDirective implements OnInit {

  @Input() flipDelay = 0;
  @Input() flipRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(180deg)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1) rotateY(360deg)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.flipDelay);

    player.onDone(() => {
      for (let i = 1; i < this.flipRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.flipDelay);
      }
    });
  }

}
