class KeyValuePair<K, V> {
  constructor(
    public key: K,
    public value: V
  ) {}
}

let object = new KeyValuePair<string, number>("Value", 1);
