console.log("Bienvenido a Alquileres Pepito")

let noches = "";
let _menores = "";
let total_inicial = 5000;
let _seña = Number;

function calcular_total ( noches , adultos , _menores ){
    noches = parseInt(noches);
    adultos = parseInt(adultos);
    _menores = parseInt(_menores);

    if (adultos + _menores> 7 ){
        console.log("La cantidad total de adultos y menores supera el limite (7)");
    }
    else if (adultos + _menores <= 7) {
        total = (noches * total_inicial) + (adultos * 600) + (_menores * 300);
        return total;
    }
    else if (adultos <= 0 && _menores <=0 ) {
        console.log("Los datos ingresados son incorrectos");
    }
}

while ( noches != "FIN") {
    noches = prompt("Ingrese la cantidad de noches que desea o ingrese FIN para finalizar");
    if ( noches != "FIN") {
        let _menores = prompt("Ingrese la cantidad de personas menores a 3 años")
        let adultos = prompt("Ingrese la cantidad de personas mayores a 3 años")
        let total = calcular_total ( noches , adultos , _menores );
        let _seña = total / 3 ;  
        console.log("Noches:", noches)
        console.log("Cantidad de menores:" , _menores)
        console.log("Cantidad de adultos:" , adultos)
        console.log("Total de la reserva:" , total)
        console.log("Valor de la seña:", _seña)
    }
}





