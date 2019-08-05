import {Directive, ElementRef, Injectable, HostListener, Input, OnInit} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[animBounce]'
})
export class BounceDirective implements OnInit {

  @Input() atOnInit = false;

  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef
  ) {}

  @HostListener('click') onMouseClick() {
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

    const player = directiveAnimation.create(this.element.nativeElement);
    player.play();
  }

  ngOnInit(): void {
    if (this.atOnInit === true) {
      const directiveAnimation = this.animationBuilder.build([
        animate('50ms', style({
          transform: 'translateY(-20px)'
        })),
        animate('200ms ease-in', style({
          transform: 'translateY(0px)'
        })),
        animate('50ms', style({
          transform: 'translateY(-20px)'
        })),
        animate('200ms ease-in', style({
          transform: 'translateY(0px)'
        }))
      ]);

      const player = directiveAnimation.create(this.element.nativeElement);
      player.play();
    }
  }

}
