import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCalculatorComponent } from './expense-calculator.component';

describe('ExpenseCalculatorComponent', () => {
  let component: ExpenseCalculatorComponent;
  let fixture: ComponentFixture<ExpenseCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
