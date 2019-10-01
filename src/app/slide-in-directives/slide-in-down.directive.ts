import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style, keyframes} from '@angular/animations';

@Directive({
  selector: '[animSlideInDown]'
})
export class SlideInDownDirective implements OnInit {

  @Input() slideInDownDelay = 0;
  @Input() slideInDownRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in', style({
        transform: 'translateY(-200px)'
      })),
      animate('600ms ease-in-out', style({
        transform: 'translateY(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.slideInDownDelay);

    player.onDone(() => {
      for (let i = 1; i < this.slideInDownRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.slideInDownDelay);
      }
    });
  }

}
