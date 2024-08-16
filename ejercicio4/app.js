//Variables globales para nuestro programa
let vuelto = 0
let pago = 0
let opcion = 0

//Variables de productos disponibles
let gaseosa = 5
let papita = 4
let golosina = 2
let galleta = 6


pago = prompt("Ingresa tu moneda 🪙") 
if(pago>=golosina){
    opcion = prompt(`
        ===========================
        1.Gaseosa: S/ ${gaseosa}
        2.Papita: S/${papita}
        3.Golosina: S/ ${golosina}
        4.Galleta: S/ ${galleta}
        ===========================
        Ingresa una opcion:`)

    if(opcion == 1){
        vuelto = pago - gaseosa
        alert("Vuelto: "+vuelto)
    }

    if(opcion == 2){
        vuelto = pago - papita
        alert("Vuelto: "+vuelto)
    }

    if(opcion == 3){
        vuelto = pago - golosina
        alert("Vuelto: "+vuelto)
    }

    if(opcion == 4){
        vuelto = pago - golosina
        alert("Vuelto: "+galleta)
    }

}else{
    alert("Saldo insuficiente 😪")
}