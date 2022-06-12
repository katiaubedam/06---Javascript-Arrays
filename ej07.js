let arr = [6,8,3,6,9,2,5,7,5,9]
let suma = 0

for (let i = 0; i < arr.length; i++) {
    suma += arr[i]
}

console.log(`La media de los valores es: ${suma/arr.length}`)