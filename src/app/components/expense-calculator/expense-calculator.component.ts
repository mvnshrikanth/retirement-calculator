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
    curAnnualExp: 0,
    curMonthlyExp: 0,
    annualInfRate: 0,
    curAge: 0,
    expectedRetirementAge: 0,
    numbOfYrsToRetire: 0,
    expenseAtRetirement: 0
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(expenseCalc: NgForm) {
    console.log(expenseCalc.value, expenseCalc.valid);
  }

  calcExpenseAtRetirement() {
    this.userData.expenseAtRetirement = Math.pow((1 + this.userData.annualInfRate / 100), this.userData.expectedRetirementAge) * this.userData.curAnnualExp;
  }

  calcAnnualExp() {
    this.userData.curAnnualExp = this.userData.curMonthlyExp * 12;
    this.calcExpenseAtRetirement();
  }

  calcMonthlyExp() {
    this.userData.curMonthlyExp = Number((this.userData.curAnnualExp / 12).toFixed(2));
    this.calcExpenseAtRetirement();
  }

  calcNumbOfYrsToRetire() {
    this.userData.numbOfYrsToRetire = this.userData.expectedRetirementAge - this.userData.curAge;
    this.calcExpenseAtRetirement();
  }


}
