import {Directive, HostListener, ElementRef, Input} from '@angular/core';
import {AnimationBuilder, animate, style, keyframes } from '@angular/animations';

@Directive({
  selector: 'div[animMouseEnter]'
})
export class MouseEnterDirective {

  @Input() enterColor = 'blue';
  @Input() inTiming = 400;
  @Input() outTiming = 400;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {

    this.element.nativeElement.style.overflow = 'hidden';
    const circle = document.createElement('div');

    const container = this.element.nativeElement;
    container.id = 'parent';
    container.style.position = 'relative';

    const left = event.pageX - container.offsetLeft;
    const top = event.pageY - container.offsetTop;

    circle.id = 'circle';
    circle.style.position = 'absolute';
    circle.style.backgroundColor = this.enterColor;
    circle.style.overflow = 'hidden';
    circle.style.borderRadius = '100%';
    circle.style.width = '1px';
    circle.style.height = '1px';

    container.appendChild(circle);

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
        })
      ]))
    ]);
    const player = directiveAnimation.create(circle);
    player.play();
  }

  @HostListener('mouseleave', ['$event']) onMouseOut(event: MouseEvent) {
    const circle = document.getElementById('circle');
    const directiveAnimation = this.animationBuilder.build([
      animate(`${this.outTiming}ms`, style({
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
      if (circle) {
        circle.remove();
      }
    });
  }
}
