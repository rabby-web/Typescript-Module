{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
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
