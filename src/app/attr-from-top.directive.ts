import {Directive, ElementRef, Renderer2, HostListener, Injectable} from '@angular/core';
import { TestDirectivesService } from './test-directives.service';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appAttrFromTop]',
  providers: [TestDirectivesService]
})
export class AttrFromTopDirective {

  constructor(
    private animationBuilder: AnimationBuilder,
    private renderer2: Renderer2,
    private el: ElementRef,
    private testDirectivesService: TestDirectivesService
    ) {
      // renderer2.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('click') onMouseClick() {
    const directiveAnimation = this.animationBuilder.build([
      style({
        backgroundColor: 'black',
      }),
      animate(500, style({backgroundColor: 'white'}))
    ]);

    const player = directiveAnimation.create(this.el.nativeElement);
    player.play();
  }

}
