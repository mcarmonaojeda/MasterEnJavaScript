'use strict'

/*
    Muestre todos los numeros divisores de un numero introducido en promt
*/

var numero = parseInt(prompt("Mete un numero", 1));

for(var i = 1; i <= numero; i++){

    //Un numero es divisor de otro numero cuando al dividirlo entre si da 0
    // Entonces:

    if (numero%i == 0) {
        console.log("Divisor " + i);   
    }
}