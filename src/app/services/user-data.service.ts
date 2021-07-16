import {UserData} from "../modules/user-data";

export class UserDataService {

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

  getUserData() {
    return this.userData;
  }
}
