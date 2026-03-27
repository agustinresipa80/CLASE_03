//A)
let frutas = ["manzana", "banana", "pera", "naranja", "uva"];

// Agregar al inicio
frutas.splice(0, 0, "kiwi");
// Agregar al final
frutas.splice(6, 0, "mango");

console.log(frutas);
//B)
let numeros = [1, 2, 3, 4, 5];
let dobles = [];

for (let i = 0; i < numeros.length; i++) {
  dobles.push(numeros[i] * 2);
}

console.log(dobles);

//C)
let colores1 = ["rojo", "azul", "verde"];
let colores2 = ["amarillo", "negro"];

let todosLosColores = colores1.concat(colores2);

console.log(todosLosColores);
//Concat no modifica los arrays originales, sino que devuelve uno nuevo.

//D)
let numeros2 = [10, 20, 30, 40, 50, 60];

// Copia sin el primero y último
let resultado = numeros2.slice(1, numeros2.length - 1);

console.log(resultado);