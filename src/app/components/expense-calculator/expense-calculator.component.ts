import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserData} from "../../modules/user-data";

@Component({
  selector: 'app-expense-calculator',
  templateUrl: './expense-calculator.component.html',
  styleUrls: ['./expense-calculator.component.css'],
})
export class ExpenseCalculatorComponent implements OnInit {

  userData: UserData = {
    annualInfRate: 0,
    curAge: 0,
    curAnnualExp: 0,
    curMonthlyExp: 0,
    expectedRetirementAge: 0,
    expenseAtRetirement: 0,
    numbOfYrsToRetire: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  disableButton: boolean = true;

  enableSubmitButton() {
    if (this.userData.curAnnualExp > 0 && (this.userData.annualInfRate > 0) && (this.userData.annualInfRate <= 15) && this.userData.numbOfYrsToRetire > 0) {
      this.disableButton = false;
    }
  }

  onSubmit(expenseCalc: NgForm) {
    console.log(expenseCalc.value, expenseCalc.valid);
  }

  calcExpenseAtRetirement() {
    this.userData.expenseAtRetirement = Math.pow((1 + this.userData.annualInfRate / 100), this.userData.expectedRetirementAge) * this.userData.curAnnualExp;
    this.enableSubmitButton();
  }

  calcAnnualExp() {
    this.userData.curAnnualExp = this.userData.curMonthlyExp * 12;
    this.calcExpenseAtRetirement();
    this.enableSubmitButton();
  }

  calcMonthlyExp() {
    this.userData.curMonthlyExp = Number((this.userData.curAnnualExp / 12).toFixed(2));
    this.calcExpenseAtRetirement();
    this.enableSubmitButton();
  }

  calcNumbOfYrsToRetire() {
    this.userData.numbOfYrsToRetire = this.userData.expectedRetirementAge - this.userData.curAge;
    this.calcExpenseAtRetirement();
    this.enableSubmitButton();
  }

}
