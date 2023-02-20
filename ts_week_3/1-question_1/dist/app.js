"use strict";
const displayUsage = document.querySelector(".expense-list");
class Income {
    constructor(balance, records) {
        this.balance = balance;
        this.records = records;
    }
}
class Expenses extends Income {
    constructor(balance, records, expenses) {
        super(balance, records);
        this.expenses = expenses;
    }
    getExpenses() {
        return this.expenses;
    }
    setExpenses(expenses) {
        this.expenses = expenses;
    }
}
