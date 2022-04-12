//Desafio lista de telefone
/* acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro */

const cliente = {
  nome: "Rafael",
  idade: 30,
  cpf: "00000000000",
  email: "rafa@gmail.com",
  fones: ["559412345698", "55292022222"],
};

cliente.fones.forEach((fones) => {
  console.log(fones);
});
