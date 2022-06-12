let arrNombres = ["Max Caulfield", "Chloe Price", "Rachel Amber", "Warren Graham", "Victoria Chase", "Nathan Prescott", "Kate Marsh"]
let arrNotas = [7,4,10,10,5,3,8]

let notaMax = 0
let notaMin = 10

let suma = 0
for (let i = 0; i < arrNotas.length; i++){
    suma += arrNotas[i]

    if (arrNotas[i] > notaMax) notaMax = arrNotas[i]
    if (arrNotas[i] < notaMin) notaMin = arrNotas[i]
}

let media = suma/arrNotas.length
console.log(`La media de clase es ${media}`)

console.log("\nLos alumnos que han sacado nota superior a la media son:")

for (let i = 0; i < arrNotas.length; i++){
    if (arrNotas[i] > media) {
        console.log(arrNombres[i])
    }
}

console.log(`\nLos alumnos que han sacado nota máxima (${notaMax}) son:`)

for (let i = 0; i < arrNotas.length; i++){
    if (arrNotas[i] === notaMax) {
        console.log(arrNombres[i])
    }
}

console.log(`\nLos alumnos que han sacado nota mínima (${notaMin}) son:`)

for (let i = 0; i < arrNotas.length; i++){
    if (arrNotas[i] === notaMin) {
        console.log(arrNombres[i])
    }
}

console.log(`\nAquí está la lista de todos los alumnos y sus calificaciones:`)

for (let i = 0; i < arrNotas.length; i++){
    console.log(`${arrNombres[i]} - ${arrNotas[i]}`)
}

