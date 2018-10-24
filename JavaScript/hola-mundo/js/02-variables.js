'use strict' 
// Buenas prácticas de programación es usado para que la sintaxis del js sea estricto
// de la forma que si queremos declarar una variable sin definir previamente ( var variable = x)
// Mostrará un error donde la variable si no se le pone var al principio, que la variable no 
// ha sido declarada.

// VARIABLES
// Una variables es un contenedor de información

var pais = "España"
var continente = "Europa"
var antiguedad = 2019
var pais_y_continente = pais + ' ' + continente

pais = "México"
continente = "Latinoamerica"

console.log(continente,pais, antiguedad)
alert(pais_y_continente);