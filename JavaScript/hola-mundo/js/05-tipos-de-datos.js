'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado de la operación es: "+ operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_de_texto = "Hola que tal";
var verdadero_o_falso = true;

var numero_falso = "22";

console.log(Number(numero_falso) + 7); 
// la funcion 'Number()' convierte una variable con numeros entre comillas
// soportando incluso a flotantes y/o enteros
// de otra forma deberíamos usar las funciones 'parseInt()' o 'parseFloat()'

// SI queremos hacerlo de forma inversa , es decir convertir un numero a un string
// deberemos usar 'String()' para convertir cualquier variable a un string

console.log(String(numero_entero)+4);

// Si yo quisiera saber que tipo de dato es una variable, basta con usar 'Typeof()'
// Ejemplo:

console.log(typeof numero_entero);

console.log(typeof cadena_de_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);