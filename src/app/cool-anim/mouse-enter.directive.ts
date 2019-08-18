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
  }
}
