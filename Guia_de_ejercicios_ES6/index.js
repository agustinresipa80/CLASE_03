
let edad = 25;
const nombre = "Luciano";

// Reasignación
edad = 30;        //Permitido
nombre = "Juan";  // No permite reasignar una constante

// Con let
for (let i = 0; i < 5; i++) {
  console.log(i);
}// Funciona perfecto

// Con const
for (const i = 0; i < 5; i++) {
  console.log(i);
}// Con const no permite cambiar i


const persona = {
  nombre: "Luciano",
  edad: 25
};

// Modificar propiedad
persona.edad = 30;  //Permitido

// Reasignar objeto
persona = { nombre: "Juan" };  // Da error porque no se puede cambiar todo el objeto

function prueba() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Dentro del bloque:");
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
  }

  console.log("Fuera del bloque:");
  console.log(a); // 10
  console.log(b); // 2
  console.log(c); // 3
}

prueba();