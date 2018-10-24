'use strict'

/*
    Que nos diga si un numero es par o impar
*/

var number = parseInt(prompt("Introduce un numero", 0));


while(isNaN(number)){
    
    alert("Asegurate que sean numeros los que introduciste");
    var number = parseInt(prompt("Introduce un numero", 0));
}

if(number % 2 == 0){
    alert("Es par");
}else{
    alert("Es impar");
}