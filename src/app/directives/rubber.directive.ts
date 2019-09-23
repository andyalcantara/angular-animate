import {Directive, Injectable, ElementRef, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animRubber]'
})
export class RubberDirective implements OnInit {

  @Input() rubberDelay = 0;
  @Input() rubberRepeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    const directiveAnimation = this.animationBuilder.build([
      animate('400ms ease-in', style({
        transform: 'scaleX(2.0)'
      })),
      animate('100ms ease-out', style({
        transform: 'scaleX(1.0)'
      })),
      animate('150ms ease-in', style({
        transform: 'scaleX(1.50)'
      })),
      animate('100ms ease-out', style({
        transform: 'scaleX(1.0)'
      })),
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);

    setTimeout(() => {
      player.play();
    }, this.rubberDelay);

    player.onDone(() => {
      for (let i = 1; i < this.rubberRepeat; i++) {
        setTimeout(() => {
          player.play();
        }, i * this.rubberDelay);
      }
    });
  }

}
