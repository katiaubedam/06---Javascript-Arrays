let arrInt = []
let arrFloat = []
let suma = 0
let num

do {
    num = prompt("Introduce un número")

    if (parseInt(num) >= 0) {
        if(num.indexOf(".") === -1) {
            num = parseInt(num)
            arrInt.push(num)
            suma += num
        } else {
            num = parseFloat(num)
            arrFloat.push(num)
        }
    }

} while (num >= 0)

console.log(`Cantidad de números enteros introducidos: ${arrInt.length}`)
console.log(`Cantidad de números decimales introducidos: ${arrFloat.length}`)
console.log(`Suma total de los números enteros: ${suma}`)

let arrUnion = arrInt.concat(arrFloat)
suma = 0

for (let i = 0; i < arrUnion.length; i++) {
    suma += arrUnion[i]
}

console.log(`Media total de TODOS los números: ${suma/arrUnion.length}`)