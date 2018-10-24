'use strict'

// Funciones
/*
    Una funcion es una agrupación reutilizable de un conjunto de instrucciones. 
*/

// Defino la función
function calculadora(){
    //Conjunto de instrucciones
    console.log("Hola soy la calculadora:");
    console.log("Hola soy Yo");

    //return "Hola lol"; // aún así puede usarse el return
}

//Invocar y llamar a la función
calculadora();

var resultado =  calculadora();

/* Funciones con parámetros

function calculator(num1, num2){
    console.log("Suma: "+ (num1+num2));
    console.log("Resta: "+ (num1-num2));
    console.log("Multiplicación: "+ (num1*num2));
    console.log("División: "+ (num1/num2));
    console.log("********************");
}

//calculator(12,8);
//calculator(98,2);

for(var i = 1; i <= 10; i++){
    calculator(i,8);// pasamos parámetros
}*/

// Funciones con parámetros opcionales

calculator();



