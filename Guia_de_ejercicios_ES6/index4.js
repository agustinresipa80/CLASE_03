//A)
let nombre = "Luciano";
let edad = 25;
let profesion = "Programador";

let mensaje = `Hola, soy ${nombre}, tengo ${edad} años y soy ${profesion}.`;

console.log(mensaje);

//B)
function calcularTotal(precio, cantidad) {
  let total = precio * cantidad;
  let mensaje = `El total es: ${total}`;
  return mensaje;
}

console.log(calcularTotal(100, 3));

//C)
let nombreError = "Error de validación";
let descripcion = "El campo email es obligatorio";

let mensajeError = ` ${nombreError}: ${descripcion}`;

console.log(mensajeError);