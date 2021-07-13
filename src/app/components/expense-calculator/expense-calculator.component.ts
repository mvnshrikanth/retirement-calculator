import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-calculator',
  templateUrl: './expense-calculator.component.html',
  styleUrls: ['./expense-calculator.component.css'],
})
export class ExpenseCalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  next(expenseCalc: NgForm) {
    console.log(expenseCalc.value, expenseCalc.valid);
  }
}
