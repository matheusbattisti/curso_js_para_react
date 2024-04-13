// Exercício 1: Tipos de Dados e Conversões
let nome = "Maria";
let idade = 30;
let estaChovendo = false;
let dataHoje = new Date();
idade = String(idade);
estaChovendo = Number(estaChovendo);
console.log(`Nome: ${nome}, Tipo: ${typeof nome}`);
console.log(`Idade: ${idade}, Tipo: ${typeof idade}`);
console.log(`Está chovendo: ${estaChovendo}, Tipo: ${typeof estaChovendo}`);
console.log(`Data de hoje: ${dataHoje}, Tipo: ${typeof dataHoje}`);

// Exercício 2: Escopo e Hoisting
function testarEscopo() {
  if (true) {
    let variavelLet = "Visível apenas dentro do if";
    const variavelConst = "Também visível apenas dentro do if";
    var variavelVar = "Visível fora do if";
  }
  console.log(variavelVar); // "Visível fora do if"
  // console.log(variavelLet); // Erro: variavelLet não é definida
  // console.log(variavelConst); // Erro: variavelConst não é definida
}
testarEscopo();
console.log(
  typeof variavelVar === "undefined"
    ? "var não definida fora da função"
    : variavelVar
); // var não definida fora da função

// Exercício 3: Imutabilidade de Objetos
const usuario = { nome: "João", idade: 28 };
const usuarioAtualizado = { ...usuario, idade: 29 };
console.log(usuario); // { nome: "João", idade: 28 }
console.log(usuarioAtualizado); // { nome: "João", idade: 29 }

// Exercício 4: Manipulação de Arrays sem Mutação
const numeros = [1, 5, 10, 15];
const dobrados = numeros.map((numero) => numero * 2);
const maioresQueDez = numeros.filter((numero) => numero > 10);
const incluir25 = [...numeros, 25];
console.log("Original:", numeros); // [1, 5, 10, 15]
console.log("Dobrados:", dobrados); // [2, 10, 20, 30]
console.log("Maiores que 10:", maioresQueDez); // [15]
console.log("Incluindo 25:", incluir25); // [1, 5, 10, 15, 25]

// Exercício 5: Uso Prático de `Object.freeze` e `Object.assign`
const config = Object.freeze({ tema: "claro" });
// Tentativa de alteração falha
// config.tema = "escuro"; // Erro
// config.fonte = "Arial"; // Erro
const novaConfig = Object.assign({}, config, {
  tema: "escuro",
  fonte: "Arial",
});
console.log(config); // { tema: "claro" }
console.log(novaConfig); // { tema: "escuro", fonte: "Arial" }
