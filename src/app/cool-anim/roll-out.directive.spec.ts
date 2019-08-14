import { RollOutDirective } from './roll-out.directive';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../app.component';

describe('RollOutDirective', () => {
  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, RollOutDirective]
    })
      .createComponent(RollOutDirective);
    fixture.detectChanges();

    it('delay should be zero if not input given', () => {
      const delay: number = fixture.componentInstance.delay;
      expect(delay).toBe(0);
    });
  });
});
