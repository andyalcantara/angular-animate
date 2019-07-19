import { Directive, HostListener, ElementRef, Renderer2, Injectable } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appShakeAtHover]'
})
export class ShakeAtHoverDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseHover() {
    const directiveAnimation = this.animationBuilder.build([
      animate('100ms ease-in', style({
        transform: 'translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(-20px)'
      })),
      animate('100ms ease-in', style({
        transform: 'translateX(20px)'
      })),
      style({
        transform: 'translateX(0)'
      })
    ]);

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }
}
