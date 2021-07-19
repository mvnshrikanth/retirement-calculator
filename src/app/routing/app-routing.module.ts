import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpenseCalculatorComponent} from '../components/expense-calculator/expense-calculator.component';
import {MonthlyInvestmentsCalculatorComponent} from '../components/monthly-investments-calculator/monthly-investments-calculator.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {RetirementCorpusCalculatorComponent} from '../components/retirement-corpus-calculator/retirement-corpus-calculator.component';
import {RetirementCalcGuard} from "./retirement-calc.guard";
import {MonthlyInvestCalcGuard} from "./monthly-invest-calc.guard";

const routes: Routes = [
  {path: 'expense-calc', component: ExpenseCalculatorComponent},
  {
    path: 'retirement-corpus-calc',
    component: RetirementCorpusCalculatorComponent, canActivate: [RetirementCalcGuard]
  },
  {
    path: 'monthly-invst-calc',
    component: MonthlyInvestmentsCalculatorComponent, canActivate: [MonthlyInvestCalcGuard]
  },
  {path: '', redirectTo: '/expense-calc', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
