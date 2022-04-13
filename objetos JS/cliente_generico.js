/*DESAFIO CLIENTE GENERICO
Criar uma função que permita a crição de novos clientes a partir de um modelo*/

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const rafael = new Cliente("Rafael", "123456789", "rafae@gmail.com", 150);

console.log(rafael);
