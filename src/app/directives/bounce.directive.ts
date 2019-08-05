import {Directive, ElementRef, Injectable, HostListener, Input, OnInit, AfterViewInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animBounce]'
})
export class BounceDirective implements OnInit {

  @Input() atOnInit = false;
  @Input() delay = 0;
  @Input() timing = '';
  @Input() repeat = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
      setTimeout(() => {
        const player = directiveAnimation.create(this.element.nativeElement);
        player.play();
      }, this.delay);

      const directiveAnimation = this.animationBuilder.build([
        animate('50ms ease-in', style({
          transform: 'translateY(0px)'
        })),
        animate('300ms ease-out', style({
          transform: 'translateY(-40px)'
        })),
        animate('50ms ease-in', style({
          transform: 'translateY(0px)'
        })),
        animate('200ms ease-out', style({
          transform: 'translateY(-20px)'
        })),
        animate('100ms ease-in', style({
          transform: 'translateY(0px)'
        }))
      ]);
  }
}
