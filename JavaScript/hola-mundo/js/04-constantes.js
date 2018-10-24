"use strict"

// Constantes
// Las constantes son valores únicos no modificables
// Ejemplo:

var web = "https://victorroblesweb.es";
// lo anterior es una variable por lo que su valor puede cambiar

const ip = "192.168.21.103";
// lo anterior entonces es una constante por lo que su valor no lo puedo cambiar

//intentaré cambiar el valor de la variable y la constante para validar lo aprendido
web = "https://victorroblescursos.es";
//ip = "25556163";
// en el navegador nos saldrá un error donde nos dice que no podemos modificar o cambiar el valor de la constante
// asi que comentaremos la linea de intento de cambio del valor a ip para que la página ya no nos arrojé el error
console.log(web, ip);