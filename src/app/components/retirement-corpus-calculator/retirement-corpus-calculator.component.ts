import {Component, OnInit} from '@angular/core';
import {UserData} from "../../modules/user-data";

@Component({
  selector: 'app-retirement-corpus-calculator',
  templateUrl: './retirement-corpus-calculator.component.html',
  styleUrls: ['./retirement-corpus-calculator.component.css']
})
export class RetirementCorpusCalculatorComponent implements OnInit {

  userData: UserData = {
    curMonthlyExp: 10000,
    curAnnualExp: 720000,
    annualInfRate: 7,
    curAge: 30,
    expectedRetirementAge: 60,
    numbOfYrsToRetirement: 30,
    expenseAtRetirement: 2740411,
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

  calcNumOfYearsAftRetirement() {
    this.userData.numOfYearsAftRetirement = this.userData.lifeExpectancy - this.userData.expectedRetirementAge;
    this.calcRetirementCorpusAmount();
  }

  calcInflationAdjustedReturn() {
    this.userData.inflateAdjReturn = (((1 + this.userData.rateOfReturnAfterRetirement) / (1 + this.userData.annualInfRate)) - 1) * 100;
    this.calcRetirementCorpusAmount();
  }

  calcRetirementCorpusAmount() {
    this.userData.retirementCorpusAmount = this.userData.expenseAtRetirement * this.userData.numOfYearsAftRetirement * this.userData.inflateAdjReturn;
  }
}
