import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttrFromTop]'
})
export class AttrFromTopDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
