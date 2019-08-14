import { HingeDirective } from './hinge.directive';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../app.component';

fdescribe('HingeDirective', () => {
  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, HingeDirective]
    })
      .createComponent(HingeDirective);
    fixture.detectChanges();

    it('delay should be zero if not input given', () => {
      const delay: number = fixture.componentInstance.delay;
      expect(delay).toBe(0);
    });
  });
});
