//A)
let libro = {
  titulo: "Dragon Ball",
  autor: "Akira Toriyama",
  anio: 1984
};

// Acceder e imprimir
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.anio);

//B)
let persona = {
  nombre: "Luciano",
  edad: 48
};

// Agregar propiedad
persona.hobby = "futbol";

// Modificar propiedad
persona.edad = 26;

console.log(persona);

//C)
let calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    if (b === 0) {
      return "No se puede dividir por cero";
    }
    return a / b;
  }
};

// Usar métodos
console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(10, 4));
console.log(calculadora.multiplicar(2, 6));
console.log(calculadora.dividir(8, 2));
//D)
let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020
};

let propiedad = "marca";

// Acceso dinámico
console.log(auto[propiedad]);