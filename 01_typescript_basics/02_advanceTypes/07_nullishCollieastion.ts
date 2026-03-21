let speed: number | null = null;

// if speed is truthy value it will use other wise it will use 30
let ride = {
  speed: speed || 30
};

// In typescript we have better way to implement same code

let ride1 = {
  speed: speed ?? 30
};
