import {Directive, Injectable, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animSwing]'
})
export class SwingDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms ease-in', style({
        transform: 'rotate(25deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(-25deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(5deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(-5deg)'
      })),
      animate('200ms ease-in', style({
        transform: 'rotate(0deg)'
      })),
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    });

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
