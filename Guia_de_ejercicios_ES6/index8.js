//A
let persona = {
  nombre: "Luciano",
  edad: 25,
  profesion: "Programador"
};

// Destructuring
let { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

//B
const mostrarPersona = ({ nombre, edad }) => {
  return `Nombre: ${nombre}, Edad: ${edad}`;
};

console.log(mostrarPersona(persona));

//C
let ciudad = ["Buenos Aires", "Argentina", 3000000];

// Destructuring
let [provincia, pais, poblacion] = ciudad;

console.log(provincia);
console.log(pais);
console.log(poblacion);
