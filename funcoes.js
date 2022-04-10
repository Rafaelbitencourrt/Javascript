let x = "";

console.log(x);

x = "oi";

// utilizamos função quando precisamos utilizar o mesmo código mais de uma vez

function alteracao(texto) {
  console.log(texto);
}

alteracao("Hello world");

/////três formas de escrever funções

//1) ///declara a função

function imprimeTexto(texto) {
  console.log(texto);
}
imprimeTexto("Boa tarde");
imprimeTexto("Outro texto");

function soma() {
  return 2 + 2;
}
console.log(soma());
