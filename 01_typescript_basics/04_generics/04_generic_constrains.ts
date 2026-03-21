function echo<T>(value: T): T {
  return value;
}

echo("1");
echo(1);
echo(true);

// we need to restrict the generic type
// for this function I am restricted to string and number, if you try to another you will get error
function echo11<T extends string | number>(value: T): T {
  return value;
}

echo11("manoj");

interface Person1 {
  name: string;
}

// here I am restrict to person1 interface
function echo2<T extends Person1>(value: T): T {
  return value;
}

echo2({ name: "Manoj" });

class Person2 {
  constructor(public name: string) {}
}

class Customer3 {}

function echo6<T extends Customer3>(value: T): T {
  return value;
}

echo6(new Person2("a"));
