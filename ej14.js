let arr = []
let arrAmount = [0,0,0,0,0,0,0,0,0,0]

for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 9) + 1
    arr.push(num)
    arrAmount[num]++
}

console.log("Contenido del array:")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("")

for (let i = 1; i < arrAmount.length; i++) {
    console.log(`Cantidad de ${i}: ${arrAmount[i]}`)
}