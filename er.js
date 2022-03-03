
let lenguajes = ["ruby", "php", "javascript"];
 
let nuevoarreglo1 = lenguajes.forEach(function  (lenguaje) { //recorre el arreglo como un for
    console.log(lenguaje);
});

let nuevoarreglo2 = lenguajes.map(function  (lenguaje) { //retorna un arreglo modificado
    return lenguaje+"x2";
});

let nuevoarreglo3 = lenguajes.filter(function  (lenguaje) {
    return lenguaje != "ruby";
});

let nuevoarreglo4 = lenguajes.reduce(function  (acc,lenguaje) {     //acc acumulador
    return acc+lenguaje;
}, 0);                      //0 inicializador
 
//console.log("1",nuevoarreglo1);
console.log("[2]",nuevoarreglo2);
console.log("[3]",nuevoarreglo3);
console.log("[4]",nuevoarreglo4);