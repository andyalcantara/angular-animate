import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animRotateInDownLeft]'
})
export class RotateInDownLeftDirective implements OnInit {

  @Input() rotateInDownLeftDelay = 0;
  @Input() rotateInDownLeftRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in-out', style({
        opacity: 0,
        transformOrigin: 'bottom left',
        transform: 'rotate(-45deg)'
      })),
      animate('500ms ease-in-out', style({
        opacity: 1,
        transform: 'rotate(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.rotateInDownLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rotateInDownLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rotateInDownLeftDelay);
      }
    });
  }

}
