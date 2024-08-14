let numero = parseInt(prompt("Ingresa el numero para calcular el factorial"))

let factorial = 1
let i = 1

while(i<=numero){
   factorial = factorial * i
   i = i + 1
}

console.log("El factorial es: "+factorial)