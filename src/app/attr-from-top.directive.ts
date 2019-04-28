import {Directive, ElementRef, Renderer2, HostListener, Injectable} from '@angular/core';
import { TestDirectivesService } from './test-directives.service';
import {AnimationBuilder} from '@angular/animations';

@Injectable()
@Directive({
  selector: '[appAttrFromTop]',
  providers: [TestDirectivesService]
})
export class AttrFromTopDirective {

  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private testDirectivesService: TestDirectivesService
    ) {
      renderer2.setStyle(this.el.nativeElement, 'background-color', 'yellow');
      renderer2.listen(this.el.nativeElement, 'click', () => {
        testDirectivesService.setPropertyToTrue();
      });
  }

  @HostListener('click') onMouseClick() {
    this.testDirectivesService.setPropertyToTrue();
  }

}
