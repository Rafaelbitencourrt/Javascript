const nomes = ["Ana", "Edu", "Leo"];

nomes.forEach(imprimeNomes);

function imprimeNomes(nome) {
  console.log(nome);
}

//Desafio map()

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((notas) => (notas == 10 ? notas : ++notas));

console.log(notasAtualizadas);

///Alterando strings com map()

let nomess = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomess.map((nomess) => nomess.toUpperCase());

console.log(nomesAtualizados);

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas); //ALURA
