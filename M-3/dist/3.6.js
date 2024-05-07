"use strict";
{
    // getter and setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // ========> function
        // public addDeposit(amount: number) {
        //   this._balance = this._balance + amount;
        // }
        // public getBalance() {
        //   return this._balance;
        // }
        // getter
        get balance() {
            return this._balance;
        }
        set deposit(amount) {
            this._balance = this.balance + amount;
        }
    }
    const poorMA = new BankAccount(11, "Mr. Poor", 50);
    //   poorMA.addDeposit(300);
    //   const myBalance = poorMA.getBalance();
    poorMA.deposit = 40;
    const myBalance = poorMA.balance;
    console.log(myBalance);
    //
}
