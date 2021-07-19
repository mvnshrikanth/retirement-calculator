import { TestBed } from '@angular/core/testing';

import { MonthlyInvestCalcGuard } from './monthly-invest-calc.guard';

describe('MonthlyInvestCalcGuard', () => {
  let guard: MonthlyInvestCalcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MonthlyInvestCalcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
