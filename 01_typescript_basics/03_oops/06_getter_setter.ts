// Getter and Setter Definition:
// Getter and setter are special methods used to read and update private data
// in a controlled way. A getter returns the value, and a setter updates the
// value after applying validation or business rules.

// Real-world example:
// In a bank account, the balance should not be accessed or changed directly
// from outside the class. A getter is used to safely view the balance, and a
// setter is used to update it with validation, such as preventing invalid
// amounts.

export class Account {
  nikeName?: string;

  // This is parameters property
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  private calculateTax(amount: number): number {
    return amount * 0.3;
  }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.calculateTax(amount);
    this._balance += amount;
  }

  // get the balance using getter
  get balance(): number {
    return this._balance;
  }

  //set the value using setter
  set balance(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }
}

let account = new Account(20, "manoj", 300);

account.balance = 600;
console.log(account.balance);
