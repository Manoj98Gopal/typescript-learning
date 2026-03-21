class Logger {
  constructor(public file_name: string) {}

  writeMessage() {}
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employees extends Person {
  constructor(
    public salary: number,
    firstName: string,
    lastName: string
  ) {
    super(firstName, lastName);
  }
}

// private members ate not inherit by child classes.

interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface Employees {
  name: string;
  salary: number;
  address: Address;
}
