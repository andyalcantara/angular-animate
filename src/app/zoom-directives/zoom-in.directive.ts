import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style, keyframes} from '@angular/animations';

@Directive({
  selector: '[animZoomIn]'
})
export class ZoomInDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        transform: 'scale(0)'
      })),
      animate('600ms ease-out', style({
        transform: 'scale(1.0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.delay);

    player.onDone(() => {
      for (let i = 1; i < this.repeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.delay);
      }
    });
  }

}
