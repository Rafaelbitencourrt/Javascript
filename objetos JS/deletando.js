const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};
//Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
delete objPersonagem.aliado;
delete objPersonagem["status"];

console.log(objPersonagem.aliado);
console.log(objPersonagem.status);
