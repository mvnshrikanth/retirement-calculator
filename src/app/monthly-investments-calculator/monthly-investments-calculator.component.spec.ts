import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyInvestmentsCalculatorComponent } from './monthly-investments-calculator.component';

describe('MonthlyInvestmentsCalculatorComponent', () => {
  let component: MonthlyInvestmentsCalculatorComponent;
  let fixture: ComponentFixture<MonthlyInvestmentsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyInvestmentsCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyInvestmentsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
