//Desafio Listas de dependentes
/*Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente*/

const cliente = {
  nome: "Rafael",
  idade: 30,
  cpf: "00000000000",
  email: "rafa@gmail.com",
  fones: ["559412345698", "55292022222"],
  dependentes: [
    {
      nome: "Helena Bitencourt",
      parentesco: "Filha",
      dataNasc: "21/10/2020",
    },
  ],
};

cliente.dependentes.push({
  nome: "Michelle Lopes",
  parentesco: "Esposa",
  dataNasc: "28/04/1989",
});

console.log(cliente);

const dependentesNovo = cliente.dependentes.filter(
  (dependentes) => dependentes.dataNasc === "28/04/1989"
);

console.log(dependentesNovo[0].nome);
