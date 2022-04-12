/*Desafio lista de dependentes 
Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para analise de outros departamentos*/

const clientes = [
  {
    nome: "Rafael",
    cpf: "00000000000",
    dependentes: [
      {
        nome: "Helena Bitencourt",
        parentesco: "Filha",
        dataNasc: "21/10/2020",
      },
    ],
  },
  {
    nome: "Juliana",
    cpf: "99999999999",
    dependentes: [
      {
        nome: "Michelle Oliveira",
        parentesco: "Filha",
        dataNasc: "21/11/1975",
      },
    ],
  },
];

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

console.log(listaDependentes);
