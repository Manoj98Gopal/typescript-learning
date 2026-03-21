// never type use for  to tell the compiler to it wont go to next line
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {}
}

reject("...");

// unreachable codes if you remove the comment compiler won't build your ts file
// processEvents();
// console.log("Hello world");
