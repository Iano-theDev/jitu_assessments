const displayUsage = document.querySelector(".expense-list")




class Income {
    private balance: number;
    private records: [];

    constructor(balance: number, records: []) {
        this.balance = balance;
        this.records = records;
    }
}

interface Income {
    getBalance(): number;
    setBalance(balance: number, records: []): void;
}

class Expenses extends Income {
    private expenses: number;

    constructor(balance: number,records: [], expenses: number) {
        super(balance, records);
        this.expenses = expenses;
    }

    public getExpenses(): number {
        return this.expenses;
    }

    public setExpenses(expenses: number): void {
        this.expenses = expenses;
    }
}