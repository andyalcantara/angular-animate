import { RollInDirective } from './roll-in.directive';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../app.component';

describe('RollInDirective', () => {
  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, RollInDirective]
    })
      .createComponent(RollInDirective);
    fixture.detectChanges();

    it('bounceDelay should be zero if not input given', () => {
      const delay: number = fixture.componentInstance.delay;
      expect(delay).toBe(0);
    });
  });
});
