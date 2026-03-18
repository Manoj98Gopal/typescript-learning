


let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 456,
  name: "Manoj",
  retire: (date: Date) => {
    console.log(date);
  }
};
