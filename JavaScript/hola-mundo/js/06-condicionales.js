'use strict'

// Condicional IF
// Si A es igual a B haz algo, intrucciones de comparación

/*var edad1 = 10;
var edad2 = 12;

// SI pasa esto
if(edad1 > edad2){
    // Ejecita esto
    console.log("Edad uno es mayor que edad2");
}
else {
    console.log("La edad uno es inferior");
}*/

var edad = 23;
var nombre = "David Suarez";

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años");
    if (edad == 33) {
        console.log("Todavía eres milenial");
    } else if (edad >= 70) {
        console.log("Eres un ancianito Ya");
    } else {
        console.log("Ya no eres milenial :(");
    }
} else {
    //Es menor de edad
    console.log(nombre + " tiene " + edad  + ", es Menor de edad ");
}

/*
// Operadores lógicos
AND(Y): &&
OR(O): ||
NEGACION: !
*/

var year = 2018;
//Negacion

 if(year != 2016){
     console.log("El año no es 2016 realmente es: "+year);
 }

 //AND

 if (year >= 2000 && year <= 2020 && year != 2018) {
     console.log("Estamos en la era actual");
 }
 else {
     console.log("Estamos en la era postmoderna");
 }

 // OR

 if (year == 2008 || (year >= 2018 && year == 2028)) {
     console.log("El año acaba en 8");
 }else{
     console.log("Año no registrado");
 }
