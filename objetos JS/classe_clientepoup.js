class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const rafael = new ClientePoupanca(
  "Rafael",
  "rafael@gmail.com",
  "02514725836",
  100,
  200
);

console.log(rafael);
