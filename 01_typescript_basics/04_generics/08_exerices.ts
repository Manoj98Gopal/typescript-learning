// generic function
function echo1<T>(arg: T): T {
  return arg;
}

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

class Entity<T> {
  constructor(public id: T) {}
}

// Given the following interface, what does keyof User return?
// It returns a union of the properties of User: ‘userId’ | ‘username’
