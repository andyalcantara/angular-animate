import { ZoomRotateDirective } from './zoom-rotate.directive';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../app.component';

describe('ZoomRotateDirective', () => {
  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, ZoomRotateDirective]
    })
      .createComponent(ZoomRotateDirective);
    fixture.detectChanges();

    it('delay should be zero if not input given', () => {
      const delay: number = fixture.componentInstance.delay;
      expect(delay).toBe(0);
    });
  });
});
