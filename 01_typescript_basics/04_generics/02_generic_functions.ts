
function makeArray<T>(value:T){
    return[value]
}

let custom = makeArray(1)
let custom1 = makeArray("One")


class Utils{
    static makeArray<T>(value:T){
        return [value]
    }
}

const newArray = Utils.makeArray(5)