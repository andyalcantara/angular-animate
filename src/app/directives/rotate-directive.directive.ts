import {Directive, Injectable, ElementRef, Renderer2, HostListener} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appRotateDirective]'
})
export class RotateDirectiveDirective {

  deg = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onMouseClick() {
    if (this.deg === 0) {
      this.deg = 180;
    } else if (this.deg > 0) {
      this.deg = this.deg + 180;
    }
    const directiveAnimation = this.animationBuilder.build([
      style({
        backgroundColor: 'white',
      }),
      animate(500, style({
        backgroundColor: 'white',
        transform: `rotateY(${this.deg}deg)`
      }))
    ]);

    const player = directiveAnimation.create(this.el.nativeElement);
    player.play();
  }

}
