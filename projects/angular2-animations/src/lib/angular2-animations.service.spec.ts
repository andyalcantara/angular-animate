import { TestBed } from '@angular/core/testing';

import { Angular2AnimationsService } from './angular2-animations.service';

describe('Angular2AnimationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Angular2AnimationsService = TestBed.get(Angular2AnimationsService);
    expect(service).toBeTruthy();
  });
});
