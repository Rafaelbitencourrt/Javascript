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

function ofererSeguro(obj) {
  const propsClientes = Object.keys(obj);

  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}

ofererSeguro(cliente);
