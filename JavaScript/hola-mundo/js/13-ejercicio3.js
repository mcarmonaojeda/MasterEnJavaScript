'use strict'
/*
    Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var n1 = parseInt(prompt('Ingresa el primer numero:',0));
var n2 = parseInt(prompt('Ingresa el último numero:',0));


while(isNaN(n1) || isNaN(n2) || (n1 >= n2)){
    
    alert("Asegurate que sean numeros los que introduciste, y que el primer numero sea mayor que el segundo numero: ");
    n1 = parseInt(prompt('Ingresa el primer numero:',0));
    n2 = parseInt(prompt('Ingresa el último numero:',0));
}


//console.log('Los numeros que hay entre el ' + n1 + ' y el ' + n2 + ' son: ');

document.write("<h1> Los numeros que hay entre el "+n1+" y el "+n2+" son los siguientes: </h1>");

for(var i = n1; i <= n2; i++){
    document.write(i+"<br/>");
    //console.log(i);
}