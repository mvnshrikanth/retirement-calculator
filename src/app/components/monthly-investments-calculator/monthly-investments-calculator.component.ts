import {Component, OnInit} from '@angular/core';
import {UserData} from "../../modules/user-data";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-monthly-investments-calculator',
  templateUrl: './monthly-investments-calculator.component.html',
  styleUrls: ['./monthly-investments-calculator.component.css']
})
export class MonthlyInvestmentsCalculatorComponent implements OnInit {

  userData: UserData;
  userDataService: UserDataService;

  constructor(userDataService: UserDataService) {
    this.userDataService = userDataService;
    this.userData = userDataService.getUserData();
  }

  ngOnInit(): void {
  }

  calcMonthlyInvestment() {
    this.userData.monthlyInvestment = (this.userData.retirementCorpusAmount * this.userData.rateOfInterestDuringAccumulation *
      Math.pow((1 + this.userData.rateOfInterestDuringAccumulation), (this.userData.numbOfYrsToRetirement * 12)))
      / Math.pow((1 + this.userData.rateOfInterestDuringAccumulation), ((this.userData.numbOfYrsToRetirement * 12) - 1));
  }
}
