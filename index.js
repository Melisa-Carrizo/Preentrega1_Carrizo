console.log("Bienvenido a Alquileres Pepito")

let noches = "";
let menores = "";
let total_inicial = 5000;
let seña = Number;

function calcular_total ( noches , adultos , menores ){
    noches = parseInt(noches);
    adultos = parseInt(adultos);
    menores = parseInt(menores);

    if (adultos + menores> 7 ){
        console.log("La cantidad total de adultos y menores supera el limite (7)");
    }
    else if (adultos + menores <= 7) {
        total = (noches * total_inicial) + (adultos * 600) + (menores * 300);
        return total;
    }
    else if (adultos <= 0 && menores <=0 ) {
        console.log("Los datos ingresados son incorrectos");
    }
}

while ( noches != "FIN") {
    noches = prompt("Ingrese la cantidad de noches que desea o ingrese FIN para finalizar");
    if ( noches != "FIN") {
        let menores = prompt("Ingrese la cantidad de personas menores a 3 años")
        let adultos = prompt("Ingrese la cantidad de personas mayores a 3 años")
        let total = calcular_total ( noches , adultos , menores );
        let seña = total / 3 ;  
        console.log("Noches:", noches)
        console.log("Cantidad de menores:" , menores)
        console.log("Cantidad de adultos:" , adultos)
        console.log("Total de la reserva:" , total)
        console.log("Valor de la seña:", seña)
    }
}





