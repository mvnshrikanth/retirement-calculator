import {Component, OnInit} from '@angular/core';
import {UserData} from "../../modules/user-data";
import {UserDataService} from "../../services/user-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-expense-calculator',
  templateUrl: './expense-calculator.component.html',
  styleUrls: ['./expense-calculator.component.css'],
})
export class ExpenseCalculatorComponent implements OnInit {

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

  onSubmit() {
    this.calcExpenseAtRetirement()
    this.router.navigateByUrl('/retirement-corpus-calc');
  }
}
