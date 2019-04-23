import { TestBed } from '@angular/core/testing';

import { TestDirectivesService } from './test-directives.service';

describe('TestDirectivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestDirectivesService = TestBed.get(TestDirectivesService);
    expect(service).toBeTruthy();
  });
});
