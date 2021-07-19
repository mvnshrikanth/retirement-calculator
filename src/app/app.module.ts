import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ExpenseCalculatorComponent} from './components/expense-calculator/expense-calculator.component';
import {RetirementCorpusCalculatorComponent} from './components/retirement-corpus-calculator/retirement-corpus-calculator.component';
import {MonthlyInvestmentsCalculatorComponent} from './components/monthly-investments-calculator/monthly-investments-calculator.component';
import {AppNavigationComponent} from './components/app-navigation/app-navigation.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {UserDataService} from "./services/user-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ExpenseCalculatorComponent,
    RetirementCorpusCalculatorComponent,
    MonthlyInvestmentsCalculatorComponent,
    AppNavigationComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
