//Desafio - compondo um objeto
/*adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco*/
const cliente = {
  nome: "Rafael",
  idade: 30,
  cpf: "00000000000",
  email: "rafa@gmail.com",
  fones: ["559412345698", "55292022222"],
};

cliente.dependentes = {
  nome: "Helena",
  parentesco: "Filha",
  dataNasc: "21/10/2020",
};

cliente.dependentes.nome = "Helena Bitencourt";

console.log(cliente);
