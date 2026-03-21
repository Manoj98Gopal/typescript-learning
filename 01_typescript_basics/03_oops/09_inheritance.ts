export class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking..");
  }
}

export class Student extends Person {
  constructor(
    public id: number,
    firstName: string,
    lastName: string
  ) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking the test..");
  }
}

let student1 = new Student(20, "Manoj", "Gopal");

console.log("Full name :", student1.fullname);
