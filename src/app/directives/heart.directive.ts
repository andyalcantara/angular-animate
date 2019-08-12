import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[animHeart]'
})
export class HeartDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms ease-out', style({
        transform: 'scale(1.5)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0)'
      })),
      animate('200ms ease-out', style({
        transform: 'scale(1.5)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.2)'
      })),
      animate('100ms ease-in', style({
        transform: 'scale(1.0)'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.delay);

    player.onDone(() => {
      let counter = 0;
      for (let i = 1; i < this.repeat; i++) {
        counter = i;
        setTimeout(() => {
          player.play();
        }, i * this.delay);
      }
    });
  }

}
