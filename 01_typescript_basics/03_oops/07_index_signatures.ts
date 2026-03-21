class SeatAssignment {
  [seat: string]: string;
}

let bus = new SeatAssignment()
bus.s1 = "Manoj"
bus['s2'] = "Varun"

console.log(bus)