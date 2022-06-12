// Este ejercicio me ha hecho sentir muy vieja :')

let arr = []
let suma = 0

for (let i = 0; i < 20; i++) {
    let edad = Math.floor(Math.random() * 18) + 18
    arr.push(edad)
    suma += edad
    console.log(edad)
}

console.log(`Media de edad: ${suma/arr.length}`)