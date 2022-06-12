let arr = []

for (let i = 0; i < 3; i++) {
    arr.push(parseInt(prompt("Introduce un valor")))
}

if (arr[0] < arr[1] && arr[0] < arr[2]) {
    console.log(`El número menor es ${arr[0]}`)
} else if (arr[1] < arr[0] && arr[1] < arr[2]) {
    console.log(`El número menor es ${arr[1]}`)
} else if (arr[2] < arr[0] && arr[2] < arr[1]) {
    console.log(`El número menor es ${arr[2]}`)
} else {
    console.log(`Tienes valores iguales`)
}