export class Account {
  nikeName?: string;

  // This is parameters property
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  private calculateTax(amount: number): number {
    console.log(this._balance)
    return amount * 0.3;
  }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.calculateTax(amount);
    this._balance += amount;
  }
}
