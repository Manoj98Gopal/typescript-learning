import { Account } from "./01_class";

// Object: An object is a real-world instance of a class that contains data
// (properties) and behavior (methods). In TypeScript, objects are used to
// access and work with the members defined inside a class.


let account = new Account(1, "Manoj G", 0);

account.deposit(500);
console.log("Account info :", account);
console.log(
  "checking account is instance of Account class",
  account instanceof Account
);
console.log("checking type og account :", typeof account);
  
