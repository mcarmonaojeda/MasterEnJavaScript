'use strict'

//Alerta

alert("Esta es mi Alerta");
alert("Este es mi texto");

// Alertas de confirmación
var mi_resultado = confirm("¿Estas seguro de querer continuar?");
console.log(mi_resultado);

// Ventana de ingreso de datos
var mi_edad = prompt("¿Que edad tienes?", 18);
// la funcion prompt devuelve el valor en String
// Dependiendo la funcionalidad usaremos las funciones de 'parse...'
console.log(mi_edad); 
console.log(typeof mi_edad); // comprobación de que el resultado es un string



