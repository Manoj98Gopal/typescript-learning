// Interface Definition:
// An interface is a blueprint that defines the structure of an object or class.
// It tells what properties and methods must be present, but it does not provide
// the full implementation.
//
// Real-world example:
// A payment system can have different payment methods like PhonePe, Google Pay,
// or Paytm. Each payment class must follow the same payment structure, so an
// interface is used to define common rules.

interface Payment {
  amount: number;
  pay(): void;
}

class PhonePePayment implements Payment {
  constructor(public amount: number) {}

  pay(): void {
    console.log(`Payment of Rs.${this.amount} done using PhonePe`);
  }
}

class GooglePayPayment implements Payment {
  constructor(public amount: number) {}

  pay(): void {
    console.log(`Payment of Rs.${this.amount} done using Google Pay`);
  }
}

let payment1 = new PhonePePayment(500);
payment1.pay();

let payment2 = new GooglePayPayment(1000);
payment2.pay();
