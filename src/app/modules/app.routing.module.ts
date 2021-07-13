import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCalculatorComponent } from '../expense-calculator/expense-calculator.component';
import { MonthlyInvestmentsCalculatorComponent } from '../monthly-investments-calculator/monthly-investments-calculator.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RetirementCorpusCalculatorComponent } from '../retirement-corpus-calculator/retirement-corpus-calculator.component';

const routes: Routes = [
  { path: 'expense-calc', component: ExpenseCalculatorComponent },
  {
    path: 'retirement-corpus-calc',
    component: RetirementCorpusCalculatorComponent,
  },
  {
    path: 'monthly-invst-calc',
    component: MonthlyInvestmentsCalculatorComponent,
  },
  { path: '', redirectTo: '/expense-calc', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
