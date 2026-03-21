function Capitalize(
  target: any,
  methodName: string,
  description: PropertyDescriptor
) {
  const original = description.get;
  description.get = function () {
    const result = original?.call(this);

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person46 {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let p2 = new Person46("Manoj", "gopal");

console.log(p2.fullName);
