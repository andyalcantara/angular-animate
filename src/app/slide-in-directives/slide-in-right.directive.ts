import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animSlideInRight]'
})
export class SlideInRightDirective implements OnInit {

  @Input() slideInRightDelay = 0;
  @Input() slideInRightRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in', style({
        transform: 'translateX(200px)'
      })),
      animate('600ms ease-in-out', style({
        transform: 'translateX(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.slideInRightDelay);

    player.onDone(() => {
      for (let i = 1; i < this.slideInRightRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.slideInRightDelay);
      }
    });
  }

}
