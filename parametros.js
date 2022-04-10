function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(4, 4));

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade("Rafael", 30));

function multiplicar(n1, n2) {
  return n1 * n2;
}

console.log(multiplicar(4, 5));

///arrow-function

const apresentar = (nome) => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumeros = (num1, num2) => {
  if (num1 || num2 > 10) {
    return "somente numeros de 1 a 9";
  } else {
    return num1 + num2;
  }
};
