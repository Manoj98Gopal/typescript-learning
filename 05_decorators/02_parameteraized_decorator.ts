type ComponentOption = {
  selector: string;
};

function Component1(options: ComponentOption) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = options;
    constructor.prototype.insertInDom = () => {
      console.log("Inserting the component in the Dom");
    };
  };
}

@Component1({selector:"#my-profile"})
class ProfileComponent1 {}
