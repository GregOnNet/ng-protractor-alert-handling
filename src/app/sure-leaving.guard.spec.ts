import { TestBed, async, inject } from '@angular/core/testing';

import { SureLeavingGuard } from './sure-leaving.guard';

describe('SureLeavingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SureLeavingGuard]
    });
  });

  it('should ...', inject([SureLeavingGuard], (guard: SureLeavingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
