let arr = []

for (let i = 0; i < 11; i++) {
    arr.push(0)
}

let num

do {
    num = parseInt(prompt("Introduce un valor del 0 al 10"))

    if (num >= 0 && num < 11 ) {
        arr[num] += 1
    } else if (num < 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i}____${arr[i]}`)
        }
    } else {
        console.log("Número incorrecto")
    }

} while (!isNaN(num))