import { Directive, HostListener, ElementRef } from '@angular/core';
import {AnimationBuilder, animate, style, keyframes } from '@angular/animations';

@Directive({
  selector: '[animMouseEnter]'
})
export class MouseEnterDirective {

  xValue: number;
  yValue: number;

  offsetX: number;
  offsetY: string;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  // Element to expand with different color

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    const circle = document.createElement('div');
    console.log(circle.clientWidth);
    const container = this.element.nativeElement;
    this.element.nativeElement.style.position = 'relative';
    circle.id = 'circle';
    circle.style.position = 'absolute';
    circle.style.backgroundColor = 'blue';
    circle.style.borderRadius = '100%';
    circle.style.left = `${event.pageX - container.offsetLeft}px`;
    circle.style.top = `${event.pageY - container.offsetTop}px`;

    circle.style.width = '0';
    circle.style.height = '0';
    this.element.nativeElement.appendChild(circle);

    const directiveAnimation = this.animationBuilder.build([
      animate('200ms', style({
        width: '100%',
        height: '100%',
        borderRadius: '0',
        left: 0,
        top: 0
      }))
    ]);

    const player = directiveAnimation.create(circle);
    player.play();
  }

  @HostListener('mouseleave', ['$event']) onMouseOut(event: MouseEvent) {
    const circle = document.getElementById('circle');
    console.log(circle.clientWidth)
    const directiveAnimation = this.animationBuilder.build([
      animate('200ms', style({
        width: 0,
        height: 0,
        left: `${event.pageX - this.element.nativeElement.offsetLeft}px`,
        top: `${event.pageY - this.element.nativeElement.offsetTop}px`,
        borderRadius: '100%'
      }))
    ]);

    const player = directiveAnimation.create(circle);
    player.play();
    player.onDone(() => {
      if (this.element.nativeElement.children) {
        this.element.nativeElement.removeChild(circle);
      } else {
        const oldCircle = document.getElementById('circle');
        this.element.nativeElement.removeChild(oldCircle);
      }
    });
  }
}
