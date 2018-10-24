//Otra forma de delcarar una variable es con la palabra reservada let ejemplo:
let prueba = "hola";//típica de typeScript, ahora se puede usar en JS
//Diferencias entre la declaracion de variables con 'let' y 'var'
// 'let' permite definir variables limitando su alcance al bloque de declaración o expresión donde se está usando
// 'var' define una s  global o local en una funcion sin importar el ámbito del bloque
// Ejemplo práctico: Pruebas let y var

// Prueba con 'var'

var numero = 40;
console.log(numero);//en la impresión es el valor 40

if (true) {
    var numero = 50;
    console.log(numero);// en la impresión es el valor 50
}

console.log(numero); // valor 50

// Prueba con 'let'

var texto = "Curso JS victorroblesweb.es";
console.log(texto); // valor JS

if (true) {
    let texto = "Curso Larabel 5 victorrobles.es";
    // como podemos ver hicimos una declaración de la variable 'texto' con otro valor que el original
    // pero como el 'let' funciona a nivel de bloque, significa que sólo dentro del if la variable 'texto' 
    // tendrá el valor de Larabel
    console.log(texto); // valor Larabel
}
console.log(texto); // valor JS
