// In the Typescript we have tree types of access controls  there are
//  Private, Public, protected

export class Account {
  readonly id: number;
  name: string;
  private _balance: number; //private property  rest of others are public
  nikeName?: string;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this._balance = balance;
    this.name = name;
  }

  //private member we can't access this method outside of the class
  private calculateTax(amount: number): number {
    return amount * 0.3;
  }

  getBalance(): number {
    return this._balance;
  }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.calculateTax(amount);
    this._balance += amount;
  }
}

let account = new Account(22, "Prem", 50000);

console.log(account);

// account.balance  we can't access the private variable outside the class
