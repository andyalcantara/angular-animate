import {Directive, ElementRef, Renderer2, HostListener, Injectable} from '@angular/core';
import { TestDirectivesService } from './test-directives.service';

@Injectable()
@Directive({
  selector: '[appAttrFromTop]'
})
export class AttrFromTopDirective {

  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private testDirectivesService: TestDirectivesService
    ) {
    renderer2.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('click') onMouseClick() {
    this.testDirectivesService.setPropertyToTrue();
    console.log('This works');
  }

}
