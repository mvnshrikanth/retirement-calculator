import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseCalculatorComponent } from './expense-calculator/expense-calculator.component';
import { RetirementCorpusCalculatorComponent } from './retirement-corpus-calculator/retirement-corpus-calculator.component';
import { MonthlyInvestmentsCalculatorComponent } from './monthly-investments-calculator/monthly-investments-calculator.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseCalculatorComponent,
    RetirementCorpusCalculatorComponent,
    MonthlyInvestmentsCalculatorComponent,
    AppNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
