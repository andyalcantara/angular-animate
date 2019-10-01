import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[animZoomOut]'
})
export class ZoomOutDirective implements OnInit {

  @Input() zoomOutDelay = 0;
  @Input() zoomOutRepeat = 0;

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
        opacity: 0,
        transform: 'scale(0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.zoomOutDelay);

    player.onDone(() => {
      for (let i = 1; i < this.zoomOutRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.zoomOutDelay);
      }
    });
  }

}
