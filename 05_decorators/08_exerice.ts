function Sauce(value: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = value;
  };
}

@Sauce("tomato sas")
class Pizza {}
