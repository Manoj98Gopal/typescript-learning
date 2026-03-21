interface Product {
    name : string,
    price : number
}

type readOnly<T> = {
    readonly [K in keyof T]:T[K]
}

