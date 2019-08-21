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

    const container = this.element.nativeElement;
    this.element.nativeElement.style.position = 'relative';
    const left = event.pageX - container.offsetLeft;
    const top = event.pageY - container.offsetTop;

    console.log(left);

    circle.id = 'circle';
    circle.style.position = 'absolute';
    circle.style.backgroundColor = 'blue';
    circle.style.overflow = 'hidden';
    circle.style.borderRadius = '100%';
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.style.width = '0';
    circle.style.height = '0';

    this.element.nativeElement.appendChild(circle);

    const directiveAnimation = this.animationBuilder.build([
      animate('700ms', style({
        width: '140%',
        height: '200%',
        left: `${-parseInt(circle.style.width, 10) / 2}px`,
        top: `${-parseInt(circle.style.height, 10) / 2}px`,
        borderRadius: '0'
      }))
    ]);

    const player = directiveAnimation.create(circle);
    player.play();
  }


  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const circle = document.getElementById('circle');
    const container = this.element.nativeElement;

    circle.style.top = `${(event.pageY - container.offsetTop) * 2}`;
    circle.style.left = `${-(event.pageY - container.offsetLeft) * 2}`;
    circle.style.borderRadius = `${(event.pageY - container.offsetTop) * 5}`;
    circle.style.width = `${(event.pageY - container.offsetTop) * 2}`;
    circle.style.height = `${(event.pageY - container.offsetTop) * 2}`;
    circle.style.overflow = 'hidden';
  }

  @HostListener('mouseleave', ['$event']) onMouseOut(event: MouseEvent) {
    const circle = document.getElementById('circle');
    console.log(circle.clientWidth);

    const directiveAnimation = this.animationBuilder.build([
      animate('200ms', style({
        width: 0,
        height: 0,
        left: `${event.pageX - this.element.nativeElement.offsetLeft}px`,
        top: `${event.pageY - this.element.nativeElement.offsetTop}px`,
        borderRadius: '0'
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
