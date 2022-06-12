let arr = []
let suma = 0
let producto = 1

for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 100) + 1
    arr.push(num)
    
    i % 2 === 0 ? suma += num : producto *= num
}

console.log(`La suma total de los números pares es ${suma}`)
console.log(`El producto total de los números impares es ${producto}`)