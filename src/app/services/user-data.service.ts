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
    monthlyInvestment: 0,
    expenseAtRetirementCalculated: false,
    retirementCorpusAmountCalculated: false
  };

  getUserData(): UserData {
    return this.userData;
  }

  allowExpenseAtRetirementCalculation(): boolean {
    return this.userData.expenseAtRetirementCalculated;
  }

  allowRetirementCorpusAmountCalculation(): boolean {
    return this.userData.retirementCorpusAmountCalculated;
  }

}
