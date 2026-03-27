//A
const saludar = (nombre) => {
  return "Hola, " + nombre + "!";
};
//B
const cuadrado = (num) => {
  return num * num;
};
//C
const mayor = (a, b) => {
  let resultado = 0;

  if (a > b) {
    resultado = a;
  } else {
    resultado = b;
  }

  return resultado;
};
//D
const cuadrados = (arr) => {
  return arr.map(num => num * num);
};