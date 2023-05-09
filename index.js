console.log("Bienvenido a Alquileres Pepito")

let noches = "";
let total_inicial = 5000;

function calcular_total ( noches , adultos ){
    noches = parseInt(noches);
    adultos = parseInt(adultos);

    if (adultos > 7 ){
        console.log("La cantidad total de adultos y menores supera el limite (7)");
    }
    else if (adultos <= 7) {
        total = (noches * total_inicial) + (adultos * 600);
        return total;
    }
    else if (adultos >= 0) {
        console.log("Los datos ingresados son incorrectos");
    }
}

while ( noches != "FIN") {
    noches = prompt("Ingrese la cantidad de noches que desea o ingrese FIN para finalizar");
    if ( noches != "FIN") {
        let adultos = prompt("Ingrese la cantidad de personas mayores a 3 años")
        let total = calcular_total ( noches , adultos );
        console.log("Noches:", noches)
        console.log("Cantidad de personas:" , adultos)
        console.log("Total de la reserva:" , total)
    }
}





