let a: number = 100;
let b: string = "coffee";
let c: boolean[] = [true, false, false];
let d: { age: number } = { age: 30 };
let e: number[] = [3];
let f: any;
let g: number[] = [];

let song: {
  title: string;
  releaseYear: number;
} = {
  title: "Doom",
  releaseYear: 2004
};

let prices: number[] = [100, 200, 300];

function myfunc(a: number, b: number): number {
  console.log(a, b);
  return 8;
}
