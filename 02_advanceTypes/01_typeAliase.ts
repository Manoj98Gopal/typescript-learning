type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employeeOne: Employee = {
  id: 456,
  name: "Manoj",
  retire: (date: Date) => {
    console.log(date);
  }
};
