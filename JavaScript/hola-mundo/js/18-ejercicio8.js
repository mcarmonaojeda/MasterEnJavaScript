'use strict'

/*
 Calculadora:
 - Pida dos numeros por pantalla
 - Si metemos uno mal, que nos lo vuelva pedir
 - En el cuerpo de la página en una alerta y por la consola el resulatado de
 sumar, restar, multiplicar y dividir esas dos cifras
*/

var n1 = parseInt(prompt('Ingresa el primer numero:',0));
var n2 = parseInt(prompt('Ingresa el segundo numero:',0));


while(isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0){
    alert("Asegurate que sean numeros los que introduciste");
    n1 = parseInt(prompt('Ingresa el primer numero:',0));
    n2 = parseInt(prompt('Ingresa el segundo numero:',0));
}

var resultado = "La suma es: " + (n1 + n2) + "<br/>" +
                 "La resta es: " + (n1 - n2) + "<br/>"+
                 "La multiplicacion es: " + (n1 * n2) + "<br/>"+
                 "La division es: " + (n1 / n2) + "<br/>";

var resultado2 = "La suma es: " + (n1 + n2) + "\n" +
                 "La resta es: " + (n1 - n2) + "\n"+
                 "La multiplicacion es: " + (n1 * n2) + "\n"+
                 "La division es: " + (n1 / n2) + "\n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);
