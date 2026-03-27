//A
const sumar = (...numeros) => {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  return total;
};

console.log(sumar(1, 2, 3, 4)); // 10

//B
let numeros = [10, 5, 20, 8];

let maximo = Math.max(...numeros);

console.log(maximo);

//C
let persona = { nombre: "Luciano", edad: 25 };
let extra = { hobby: "futbol", pais: "Argentina" };

let combinado = { ...persona, ...extra };

console.log(combinado);

//D
let array = [1, [2, 3], [4]];

// NO alcanza solo con spread
let plano = [].concat(...array);

console.log(plano);