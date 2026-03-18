// class is blue print of object, we can called this factory of the object

export class Account {
  // properties
  id: number;
  name: string;
  balance: number;

  //constructor special function
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.balance = balance;
    this.name = name;
  }

  // methods
  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }
}

