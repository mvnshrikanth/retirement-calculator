import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCalculatorComponent } from './expense-calculator/expense-calculator.component';
import { MonthlyInvestmentsCalculatorComponent } from './monthly-investments-calculator/monthly-investments-calculator.component';
import { RetirementCorpusCalculatorComponent } from './retirement-corpus-calculator/retirement-corpus-calculator.component';

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
  { path: '**', redirectTo: 'expense-calc' },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
