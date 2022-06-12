let arr = []

for (let i = 0; i < 10; i++) {
    arr.push(1)
}

let num

do {
    num = parseInt(prompt("Introduce un valor del 0 al 9"))

    if (num >= 0 && num < 10 ) {
        console.log(`El valor de la posición ${num} del array es ${arr[num]}`)
        arr[num] *= 2
    } else {
        console.log("Solo se aceptan valores del 0 al 9")
    }

} while (!isNaN(num))