//acessando objetos
//Desafio acessar um objeto com informações de um cliente e exibir essas informações

const cliente = {
  nome: "Rafael",
  idade: 30,
  cpf: "00000000000",
  email: "rafa@gmail.com",
};

console.log(`Meu nome é ${cliente.nome}`);

console.log(cliente.cpf.substring(0, 3)); //metodo para printar somente os 3 primeiros algoritmos
