import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[animZoomInLeft]'
})
export class ZoomInLeftDirective implements OnInit {

  @Input() zoomInLeftDelay = 0;
  @Input() zoomInLeftRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('700ms', keyframes([
        style({
          opacity: 0,
          transform: 'scale(0) translateX(-700px)'
        }),
        style({
          opacity: 1,
          transform: 'scale(0.7) translateX(0px)'
        }),
        style({
          transform: 'scale(1.0)'
        })
      ]))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.zoomInLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.zoomInLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.zoomInLeftDelay);
      }
    });
  }

}
