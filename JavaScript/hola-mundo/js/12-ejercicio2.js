'use strict'

/*
    Utilizando un bucle, mostrar la suma y la media de los 
    numeros introducidos, hasta introducir un numero negativo
    y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numero hasta que metas uno negativo', 0));

    if (isNaN(numero)) {
        numero = 0;
    }else if(numero >= 0){
        var auxNum = suma;
        //suma = suma + numero;
        suma += numero;
        
        contador++; // se usa el contador para sacar la media dado que conociendo que la media se saca con la suma de los elementos entre la cantidad de elementos itroducido
    }
    console.log(auxNum + ' + ' + numero + ' = ' + suma + ' la media hasta este punto es: ' + (suma / contador));
    //console.log(contador);


}while(numero >= 0)

alert("La suma de todos los numeros es: " + suma);
alert("la media de todos los numeros es: "+ (suma / contador));
