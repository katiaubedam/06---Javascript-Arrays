let arr = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

let month = parseInt(prompt("Introduce el número del mes")) - 1

if (month >= 0 && month < 12) {
    console.log(arr[month])
} else {
    console.log("No existe ese mes!")
}