import {Directive, ElementRef, Injectable, OnInit, Input} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animFlash]'
})
export class FlashDirective implements OnInit {

  @Input() delay = 0;
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('300ms ease-in', style({
        opacity: 1
      })),
      animate('200ms ease-out', style({
        opacity: 0
      })),
      animate('300ms ease-in', style({
        opacity: 1
      })),
      animate('200ms ease-out', style({
        opacity: 0
      })),
      animate('300ms ease-in', style({
        opacity: 1
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
