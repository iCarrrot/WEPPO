function sum(...args) {
    suma = 0;
    for (var i in args) {
        suma += args[i]
    }
    return suma;
}

console.log(sum(1))
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3))