import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animZoomOutLeft]'
})
export class ZoomOutLeftDirective implements OnInit {

  @Input() zoomOutLeftDelay = 0;
  @Input() zoomOutLeftRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms', style({
        opacity: 1,
        transform: 'scale(1.0)'
      })),
      animate('600ms ease-out', style({
        opacity: 1,
        transform: 'scale(0.6)'
      })),
      animate('600ms ease-out', style({
        transform: 'scale(0.6) translateX(-500px)',
        opacity: 0
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.zoomOutLeftDelay);

    player.onDone(() => {
      for (let i = 1; i < this.zoomOutLeftRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.zoomOutLeftDelay);
      }
    });
  }

}
