"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAcc extends BankAccount {
        test() {
            this._balance;
        }
    }
    const poorMA = new BankAccount(11, "Mr. Poor", 10);
    poorMA.addDeposit(300);
    const myBalance = poorMA.getBalance();
    console.log(myBalance);
    //
}
