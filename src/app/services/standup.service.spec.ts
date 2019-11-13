import { TestBed } from '@angular/core/testing';

import { StandupService } from './standup.service';

describe('StandupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandupService = TestBed.get(StandupService);
    expect(service).toBeTruthy();
  });
});
