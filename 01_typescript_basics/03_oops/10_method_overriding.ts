// Method Overriding Definition:
// Method overriding means a child class provides its own implementation of a
// method or getter that is already defined in the parent class.
//
// Real-world example:
// A Person class may have a normal full name, but a Teacher class can override
// it to display the name with a title like "Professor" before the full name.


import { Person } from "./09_inheritance";

export class Teacher extends Person {
  override get fullname() {
    return `Professor ${super.fullname}`;
  }
}

let teacher1 = new Teacher("Manoj", "Gopal");

console.log(teacher1.fullname);
