import {Component, OnInit} from '@angular/core';
import {UserData} from "../../modules/user-data";

@Component({
  selector: 'app-expense-calculator',
  templateUrl: './expense-calculator.component.html',
  styleUrls: ['./expense-calculator.component.css'],
})
export class ExpenseCalculatorComponent implements OnInit {

  userData: UserData = {
    curMonthlyExp: 0,
    curAnnualExp: 0,
    annualInfRate: 0,
    curAge: 0,
    expectedRetirementAge: 0,
    numbOfYrsToRetirement: 0,
    expenseAtRetirement: 0,
    lifeExpectancy: 0,
    numOfYearsAftRetirement: 0,
    rateOfReturnAfterRetirement: 0,
    inflateAdjReturn: 0,
    retirementCorpusAmount: 0,
    rateOfInterestDuringAccumulation: 0,
    monthlyInvestment: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  calcAnnualExp() {
    this.userData.curAnnualExp = this.userData.curMonthlyExp * 12;
    this.calcExpenseAtRetirement();
  }

  calcNumbOfYrsToRetire() {
    this.userData.numbOfYrsToRetirement = this.userData.expectedRetirementAge - this.userData.curAge;
    this.calcExpenseAtRetirement();
  }

  calcExpenseAtRetirement() {
    this.userData.expenseAtRetirement = Math.pow((1 + this.userData.annualInfRate / 100), this.userData.numbOfYrsToRetirement) * this.userData.curAnnualExp;
  }

}
