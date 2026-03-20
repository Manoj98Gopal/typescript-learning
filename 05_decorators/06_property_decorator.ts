// property decorator enhance the existing property
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at list ${length} characters long.`
          );
        }
        value = newValue;
      }
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User33 {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let u1 = new User33("12345");
console.log(u1.password);
