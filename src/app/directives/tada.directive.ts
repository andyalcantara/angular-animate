import {Directive, ElementRef, Injectable, Input, OnInit} from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animTada]'
})
export class TadaDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {

  }

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms ease-in', style({
        transform: 'scale(0.80) rotate(-15deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0) rotate(-5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(-5deg)'
      })),
      animate('100ms ease-in', style({
        transform: 'rotate(0deg)'
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
