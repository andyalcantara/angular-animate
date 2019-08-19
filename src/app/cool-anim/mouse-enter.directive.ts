import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[animMouseEnter]'
})
export class MouseEnterDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    console.log(event);
    const directiveAnimation = this.animationBuilder.build([
      animate('0ms ease-in', style({
        backgroundPosition: 'right'
      })),
      animate('500ms ease-in', style({
        width: '100%',
        height: '100%',
        borderBottomRightRadius: '0'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event: Event) {
    console.log(event);
    const directiveAnimation = this.animationBuilder.build([
      animate('500ms ease-in', style({
        width: '40%',
        height: '100px',
        borderBottomRightRadius: '0'
      }))
    ]);
    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }
}
