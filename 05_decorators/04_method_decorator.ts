// here it is accept three parameters   target,methodName,descriptor
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...arg: any) {
    console.log("before function");
    original.call(this, ...arg);
    console.log("after function");
  };
}

class Person45 {
  @Log //method decorators
  say(message: string) {
    console.log("Person says ", message);
  }
}

let p1 = new Person45();

p1.say("Hello Sky");
