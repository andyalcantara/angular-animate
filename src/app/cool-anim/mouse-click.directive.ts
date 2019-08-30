import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {animate, AnimationBuilder, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[animMouseClick]'
})
export class MouseClickDirective {

  @Input() color = 'blue';
  @Input() inTiming = 400;

  constructor(
    private element: ElementRef,
    private animationBuilder: AnimationBuilder
  ) { }

  @HostListener('click', ['$event']) onMouseEnter(event: MouseEvent) {
    this.element.nativeElement.style.overflow = 'hidden';
    const circle = document.createElement('div');

    const container = this.element.nativeElement;
    this.element.nativeElement.style.position = 'relative';

    const left = event.pageX - container.offsetLeft;
    const top = event.pageY - container.offsetTop;

    circle.id = 'circle';
    circle.style.position = 'absolute';
    circle.style.backgroundColor = this.color;
    circle.style.opacity = '0.5';
    circle.style.overflow = 'hidden';
    circle.style.borderRadius = '100%';
    circle.style.width = '1px';
    circle.style.height = '1px';

    this.element.nativeElement.appendChild(circle);

    const directiveAnimation = this.animationBuilder.build([
      animate(`${this.inTiming}ms`, keyframes([
        style({
          width: '40px',
          height: '40px',
          left: `${left - 20}px`,
          top: `${top - 20}px`,
          borderRadius: `100%`
        }),
        style({
          width: '80px',
          height: '80px',
          left: `${left - 40}px`,
          top: `${top - 40}px`,
          borderRadius: `100%`
        }),
        style({
          width: '160px',
          height: '160px',
          left: `${left - 80}px`,
          top: `${top -80}px`,
          borderRadius: `100%`
        }),
        style({
          width: '320px',
          height: '320px',
          left: `${left - 160}px`,
          top: `${top -160}px`,
          borderRadius: `100%`
        }),
        style({
          width: '640px',
          height: '640px',
          left: `${left - 320}px`,
          top: `${top - 320}px`,
          borderRadius: `100%`
        }),
        style({
          width: '1280px',
          height: '1280px',
          left: `${left - 640}px`,
          top: `${top - 640}px`,
          borderRadius: '100%'
        }),
        style({
          width: '2560px',
          height: '2560px',
          left: `${left - 1280}px`,
          top: `${top - 1280}px`,
          borderRadius: '100%'
        }),
        style({
          width: `${window.innerWidth * 2}px`,
          height: `${window.innerWidth * 2}px`,
          left: `${-window.innerWidth / 2}px`,
          top: `${-window.innerHeight / 2}px`,
          borderRadius: '100%'
        }),
        style({
          opacity: 0
        })
      ]))
    ]);
    const player = directiveAnimation.create(circle);
    player.play();
  }

}
