import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animSlideInLeft]'
})
export class SlideInLeftDirective implements OnInit {

  @Input() slideInLeftDelay = 0;
  @Input() slideInLeftRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in', style({
        transform: 'translateX(-200px)'
      })),
      animate('600ms ease-in-out', style({
        transform: 'translateX(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.slideInLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.slideInLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.slideInLeftDelay);
      }
    });
  }

}
