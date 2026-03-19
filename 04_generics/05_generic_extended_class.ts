interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected objects: T[] = [];

  add(obj: T) {
    this.objects.push(obj);
  }
}

let store = new Store();

// Pass on generic type parameter
class compressStore<T> extends Store<T> {
  compress() {}
}

let store1 = new compressStore<Product>();

// Restrict the generic type parameters
class searchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this.objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
