
import { Person, Student } from "./09_inheritance";
import { Teacher } from "./10_method_overriding";

// Principal is another child class of Person.
class Principle extends Person {
  // Overriding the parent getter to return a custom title.
  override get fullname() {
    return `Principle ${super.fullname} `;
  }
}

// This function accepts all child classes through the parent type Person.
function printNames(people: Person[]) {
  for (let person of people) {
    // Each object gives its own fullname due to polymorphism.
    console.log(person.fullname);
  }
}

// Different child objects are passed into one common Person array.
printNames([
  new Teacher("Radah", "Krishna"),
  new Principle("Annapurna", "Ramadevi"),
  new Student(55, "Prem", "Kumar")
]);
