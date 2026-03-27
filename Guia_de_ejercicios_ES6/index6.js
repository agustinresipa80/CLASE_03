//A
let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter(num => num % 2 === 0);

console.log(pares);

//B
let estudiantes = [
  { nombre: "Anais", edad: 20, calificacion: 8 },
  { nombre: "Juanchin", edad: 25, calificacion: 7 },
  { nombre: "Lucero", edad: 30, calificacion: 9 }
];

let datos = estudiantes.map(est => {
  return {
    nombre: est.nombre,
    edad: est.edad
  };
});

console.log(datos);
//C
let mayor = estudiantes.find(est => est.edad > 25);

console.log(mayor);
//D


let suma = numeros.reduce((acum, num) => {
  return acum + num;
}, 0);

console.log(suma);