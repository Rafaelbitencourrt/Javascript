/*Desafio fazendo depósitos

Adicionar uma propriedade que permita 'ações, para que os clientes que estão cadastrados consigam fazer operações bancárias.*/

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
    {
      nome: "Michelle Lopes",
      parentesco: "Esposa",
      dataNasc: "28/04/1989",
    },
  ],

  saldo: 100,

  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente.saldo);

cliente.depositar(30);
console.log(cliente.saldo);
