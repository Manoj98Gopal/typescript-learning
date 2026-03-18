
// this is use for vanila js  and  "as" key word using to tell compiler which html element specifically
let phone = document.getElementById("phone") as HTMLInputElement;
phone.value;

// This is an another way of declaration
let email = <HTMLInputElement>document.getElementById("name");
email.value;
