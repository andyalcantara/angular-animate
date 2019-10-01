import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style, keyframes} from '@angular/animations';

@Directive({
  selector: '[animZoomInDown]'
})
export class ZoomInDownDirective implements OnInit {

  @Input() zoomInDownDelay = 0;
  @Input() zoomInDownRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('700ms', keyframes([
        style({
          opacity: 0,
          transform: 'scale(0) translateY(-700px)'
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
    }, this.zoomInDownDelay);

    player.onDone(() => {
      for (let i = 1; i < this.zoomInDownRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.zoomInDownDelay);
      }
    });
  }

}
