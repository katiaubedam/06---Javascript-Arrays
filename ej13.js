let arr = ["Luke Skywalker", "Leia Organa", "Han Solo"]

console.log("Lista de personajes:")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.sort()

console.log("\nLista de personajes ordenada alfabéticamente:")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let newCharacter = prompt("Introduce un nuevo personaje")

if (arr.indexOf(newCharacter) === -1) {
    arr.push(newCharacter)
    console.log(`\nSe ha introducido el nuevo personaje ${newCharacter}`)
} else {
    console.log(`\nEl personaje ya existe en la posición ${arr.indexOf(newCharacter)}`)
}

console.log(`\nLa lista contiene ${arr.length} personajes`)