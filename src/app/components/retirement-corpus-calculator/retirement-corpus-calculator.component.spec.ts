import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementCorpusCalculatorComponent } from './retirement-corpus-calculator.component';

describe('RetirementCorpusCalculatorComponent', () => {
  let component: RetirementCorpusCalculatorComponent;
  let fixture: ComponentFixture<RetirementCorpusCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementCorpusCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementCorpusCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
