/*desafio cliente poupança
  Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança*/

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this.nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const rafael = new ClientePoupanca(
  "Rafael",
  "123456789",
  "rafae@gmail.com",
  150,
  1000
);

console.log(rafael);

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

rafael.depositarPoup(30);

console.log(rafael.saldoPoup);
