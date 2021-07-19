import { TestBed } from '@angular/core/testing';

import { RetirementCalcGuard } from './retirement-calc.guard';

describe('RetirementCalcGuardGuard', () => {
  let guard: RetirementCalcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RetirementCalcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
