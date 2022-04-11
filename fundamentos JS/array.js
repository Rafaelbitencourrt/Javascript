/*desafio calcular a media de alunos 10,6.5,8 e 7.5

let nota = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

const notas = [10, 6.5, 8, 7.5];

let media = (nota1 + nota2 + nota3 + nota4) / 4;

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media); */

//adicionando elementos
/* 
const notas = [10, 6, 8];
notas.push(7);
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; */

//deletando elementos

/* const notas = [10, 7, 8, 5, 10];
notas.pop(); //retira  o ultimo elemento
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);
 */

//Desafio sala dividida

/* const nomes = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Rafa",
  "Dani",
  "Chelly",
];

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos sala 1 ${sala1}`);
console.log(`Alunos sala 2 ${sala2}`);

console.log(nomes.length); */

//Desafio atualizando elementos
/* 
const nomes = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Rafa",
  "Dani",
  "Chelly",
];

nomes.splice(1, 2, "Helena");
nomes.splice(3, 0, "Vinicius");

console.log(nomes); */

//Concatenando arrays

/* const salaPython = ["Melissa", "Helena", "Rodrigo"];
const salaJs = ["Raquel", "Juliana", "Bernardo"];

const salaUnificada = salaPython.concat(salaJs);

console.log(salaUnificada); */

//array com  2 dimensões
/* 
const alunos = ["Rafa", "Dani", "Chelly"];

const mediaDosAlunos = [10, 7, 8, 9];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

console.log(
  `${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`
); */

//desafio procurando na lista
/* const alunos = ["Rafa", "Dani", "Chelly"];

const mediaDosAlunos = [10, 7, 8, 9];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return (
      listaDeNotasEAlunos[0][indice] +
      " , sua média é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não cadastrado";
  }
};

console.log(exibeNomeNota("Dani")); */

//Desafio For

/* const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);
} */

//Desafio media com for
/* 
const notas = [10, 6.5, 9, 8];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(media); */

///Desafio media com forEach

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach((notas) => {
  somaDasNotas += notas;
});

let media = somaDasNotas / notas.length;

console.log(media);

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media2 = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media2 += notasGerais[i][j] / notasGerais[i].length;
  }
}
media2 = media2 / notasGerais.length;

console.log(media2);
