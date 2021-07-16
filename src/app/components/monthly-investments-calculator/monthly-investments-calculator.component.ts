import {Component, OnInit} from '@angular/core';
import {UserData} from "../../modules/user-data";

@Component({
  selector: 'app-monthly-investments-calculator',
  templateUrl: './monthly-investments-calculator.component.html',
  styleUrls: ['./monthly-investments-calculator.component.css']
})
export class MonthlyInvestmentsCalculatorComponent implements OnInit {

  userData: UserData = {
    curMonthlyExp: 10000,
    curAnnualExp: 720000,
    annualInfRate: 7,
    curAge: 30,
    expectedRetirementAge: 60,
    numbOfYrsToRetirement: 30,
    expenseAtRetirement: 2740411,
    lifeExpectancy: 80,
    numOfYearsAftRetirement: 20,
    rateOfReturnAfterRetirement: 8,
    inflateAdjReturn: 12,
    retirementCorpusAmount: 685102750,
    rateOfInterestDuringAccumulation: 5,
    monthlyInvestment: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  calcMonthlyInvestment() {
    this.userData.monthlyInvestment = (this.userData.retirementCorpusAmount * this.userData.rateOfInterestDuringAccumulation *
      Math.pow((1 + this.userData.rateOfInterestDuringAccumulation), (this.userData.numbOfYrsToRetirement * 12)))
      / Math.pow((1 + this.userData.rateOfInterestDuringAccumulation), ((this.userData.numbOfYrsToRetirement * 12) - 1));
  }
}
