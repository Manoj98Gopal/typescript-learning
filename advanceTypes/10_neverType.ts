// never type use for  to tell the compiler to it wont go to next line
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {}
}

reject("...");
processEvents();
console.log("Hello world");
