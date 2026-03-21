
export class Account {
  readonly id: number; //this is the read only field we can modify this filed
  name: string;
  balance: number;
  nikeName?: string; //this is the optional field

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.balance = balance;
    this.name = name;
  }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }
}

let account = new Account(2, "Gopal", 200); //See here we not passing nick name so that filed is optional
console.log(account)

// account.id = 40  we will get error here if we try to modify this filed
