import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[animZoomInUp]'
})
export class ZoomInUpDirective implements OnInit {

  @Input() zoomInUpDelay = 0;
  @Input() zoomInUpRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('700ms', keyframes([
        style({
          opacity: 0,
          transform: 'scale(0) translateY(700px)'
        }),
        style({
          opacity: 1,
          transform: 'scale(0.7) translateY(0px)'
        }),
        style({
          transform: 'scale(1.0)'
        })
      ]))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.zoomInUpDelay);

    player.onDone(() => {
      for (let i = 1; i < this.zoomInUpRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.zoomInUpDelay);
      }
    });
  }

}
