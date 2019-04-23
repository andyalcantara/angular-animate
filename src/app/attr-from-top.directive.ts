import {Directive, ElementRef, Injectable, OnInit, Renderer2} from '@angular/core';
import {TestDirectivesService} from './test-directives.service';

@Directive({
  selector: '[appAttrFromTop]',
  providers: [TestDirectivesService]
})
export class AttrFromTopDirective implements OnInit {

  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private testDirectivesService: TestDirectivesService
    ) {
    renderer2.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  render() {
    this.testDirectivesService.fire.next('animate');
  }

  ngOnInit() {
    this.render();
  }

}
