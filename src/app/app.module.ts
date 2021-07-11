import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseCalculatorComponent } from './expense-calculator/expense-calculator.component';
import { RetirementCorpusCalculatorComponent } from './retirement-corpus-calculator/retirement-corpus-calculator.component';
import { MonthlyInvestmentsCalculatorComponent } from './monthly-investments-calculator/monthly-investments-calculator.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ExpenseCalculatorComponent },
  {
    path: 'retirement-corpus-calc',
    component: RetirementCorpusCalculatorComponent,
  },
  {
    path: 'monthly-invst-calc',
    component: MonthlyInvestmentsCalculatorComponent,
  },
  { path: '**', redirectTo:''},
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenseCalculatorComponent,
    RetirementCorpusCalculatorComponent,
    MonthlyInvestmentsCalculatorComponent,
    AppNavigationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
