'use srtict'

/*
    Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var n1 = parseInt(prompt('Ingresa el primer numero:',0));
var n2 = parseInt(prompt('Ingresa el último numero:',0));


while(isNaN(n1) || isNaN(n2) || (n1 >= n2)){
    
    alert("Asegurate que sean numeros los que introduciste, y que el primer numero sea mayor que el segundo numero: ");
    n1 = parseInt(prompt('Ingresa el primer numero:',0));
    n2 = parseInt(prompt('Ingresa el último numero:',0));
}

document.write("<h1> Los numeros impares que hay entre el "+n1+" y el "+n2+" son los siguientes: </h1>");

while (n1 < n2) {
    n1++;
    if (n1%2 != 0) {
        //entonces es un numero impar
        console.log("El " + n1 + " es impar");
    }
}