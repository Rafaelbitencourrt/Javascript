// Desafio - Acessar chaves
//Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela

const cliente = {
  nome: "Rafael",
  idade: 30,
  cpf: "00000000000",
  email: "rafa@gmail.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

chaves.forEach((info) => console.log(cliente[info]));

//desafio Adicionando campos
//Adicionar informações importantes que estão faltando, como telefone e tambem seus valores
