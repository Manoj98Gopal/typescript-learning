interface Product {
  name: string;
  price: number;
}

class Stores<T> {
  protected objects: T[] = [];

  add(object: T) {
    this.objects.push(object);
  }

  // T is product
  // keyof T => "name" | "price"
  find(property: keyof T, value: unknown): T | undefined {
    return this.objects.find((obj) => obj[property] === value);
  }
}

let s = new Stores<Product>();

s.find("name", "a");
