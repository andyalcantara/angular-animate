import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animFlipOutY]'
})
export class FlipOutYDirective implements OnInit {

  @Input() flipOutYDelay = 0;
  @Input() flipOutYRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(0)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(-45deg)'
      })),
      animate('500ms ease-in-out', style({
        transform: 'scale(1.5) rotateY(100deg)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.flipOutYDelay);

    player.onDone(() => {
      for (let i = 1; i < this.flipOutYRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.flipOutYDelay);
      }
    });
  }

}
