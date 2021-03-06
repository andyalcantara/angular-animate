import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRollOut]'
})
export class RollOutDirective implements OnInit {

  @Input() rollOutDelay = 0;
  @Input() rollOutRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        opacity: 1
      })),
      animate('700ms ease-in-out', style({
        transform: 'translateX(500px) rotate(120deg)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    setTimeout(() => {
      player.play();
    }, this.rollOutDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rollOutRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rollOutDelay);
      }
    });
  }

}
