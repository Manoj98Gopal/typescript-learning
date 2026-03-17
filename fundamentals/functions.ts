function calculateTax(income: number, taxYear = 2010): number {
  //   let num: number = 30;

  if (taxYear > 2012) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(10000);
