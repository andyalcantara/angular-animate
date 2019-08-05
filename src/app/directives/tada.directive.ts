import {Directive, ElementRef, Injectable} from '@angular/core';
import {AnimationBuilder, animate, style } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animTada]'
})
export class TadaDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {
    const directiveAnimation = animationBuilder.build([
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
    const player = directiveAnimation.create(element.nativeElement);
    player.play();
  }

}
