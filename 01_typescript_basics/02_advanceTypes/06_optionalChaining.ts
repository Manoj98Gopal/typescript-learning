type Customer = {
  birthDate: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDate: new Date() };
}

let customer = getCustomer(0);

// optional chaining
console.log(customer?.birthDate?.getFullYear());

let log: any = (message: string) => console.log(message);

// if function is there it will call other wise it won't call
log?.("a");
