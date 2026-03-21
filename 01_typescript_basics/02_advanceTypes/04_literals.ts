// we can declare number like this
// we can assign any positive number
let quantity: number;
quantity = 10000;

// we can fix the value using literals
let quantity1: 50 = 50;

// we can use union if you want give two values
let quantity2: 50 | 100 = 100;

// we can write more clear code like this
type Quantity = 1000 | 2000;

let quantity3: Quantity = 1000;

type Metric = "cm" | "inch";
