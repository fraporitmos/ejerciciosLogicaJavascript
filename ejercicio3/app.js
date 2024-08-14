let numero = 7
const MAX_INTENTOS = 3
let i = 0

while(i < MAX_INTENTOS){
    let adivina = parseInt(prompt("Ingresa el nuevo numero"))
    i = i +1
    if(adivina === numero){
          alert("ENCONTRASTE EL NUMERO. INTENTOS: "+i)
          break
    }else{
         alert("NO ES EL NUMERO :(")
    }
}

console.log("finalizo el programa")