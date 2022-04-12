/*Desafio puxando relatório
Percorrer um objeto e extrair informações básicas do cliente em um formato mais legivel e de forma autoomatizada para fornecer a outros departamentos do banco*/

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
let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
    ${info} ==> ${cliente[info]}
     `;
  }
}
console.log(relatorio);
