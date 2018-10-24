'use strict'

// Hacer la tabla de multiplicar de un numero introducido por pantalla

var number = parseInt(prompt('Indica que numero deseas ver su tabla de multiplicar ', 1));

//console.log("Esta es la tabla de multiplicar del número: " + number);

document.write("<h1> Tabla del " + number + "</h1>");

for(var i = 1; i <= 10; i++){
    var resultado = number * i;
    document.write(i + " x " + number + " = " + resultado + "<br/>");
}

// Todas las tablas del multiplicar

for(var c = 1; c <= 10; c++){
    document.write("<h1> Tabla del " + c + "</h1>");
    for(var i = 1; i <= 10; i++){
        var resultado = c * i;
        document.write(i + " x " + c + " = " + resultado + "<br/>");
    }
}