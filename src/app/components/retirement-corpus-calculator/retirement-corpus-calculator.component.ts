import {Component, OnInit} from '@angular/core';
import {UserData} from "../../modules/user-data";
import {UserDataService} from "../../services/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retirement-corpus-calculator',
  templateUrl: './retirement-corpus-calculator.component.html',
  styleUrls: ['./retirement-corpus-calculator.component.css']
})
export class RetirementCorpusCalculatorComponent implements OnInit {

  userData: UserData;
  userDataService: UserDataService;
  router: Router;

  constructor(userDataService: UserDataService, router: Router) {
    this.userDataService = userDataService;
    this.userData = userDataService.getUserData();
    this.router = router;
  }

  ngOnInit(): void {
  }

  calcNumOfYearsAftRetirement() {
    this.userData.numOfYearsAftRetirement = this.userData.lifeExpectancy - this.userData.expectedRetirementAge;
    this.calcRetirementCorpusAmount();
  }

  calcInflationAdjustedReturn() {
    this.userData.inflateAdjReturn = Math.round((((1 + this.userData.rateOfReturnAfterRetirement) / (1 + this.userData.annualInfRate)) - 1) * 100);
    this.calcRetirementCorpusAmount();
  }

  calcRetirementCorpusAmount() {
    this.userData.retirementCorpusAmount = this.userData.expenseAtRetirement * this.userData.numOfYearsAftRetirement * this.userData.inflateAdjReturn;
  }

  onSubmit() {
    this.calcRetirementCorpusAmount();
    this.router.navigateByUrl('/monthly-invst-calc');
  }
}
