// Aula 1: Introdução aos Tipos de Dados
// Tipos primitivos
let nome = "Ana"; // String
console.log(nome); // Ana
console.log(typeof nome); // string

let idade = 30; // Number
console.log(idade); // 30
console.log(typeof idade); // number

let ativo = true; // Boolean
console.log(ativo); // true
console.log(typeof ativo); // boolean

let indefinido; // Undefined
console.log(indefinido); // undefined
console.log(typeof indefinido); // undefined

let nulo = null; // Null
console.log(nulo); // null
console.log(typeof nulo); // object

let identificador = Symbol("id"); // Symbol
console.log(identificador); // Symbol(id)
console.log(typeof identificador); // symbol

let grandeNumero = BigInt(9007199254740991); // BigInt
console.log(grandeNumero); // 9007199254740991n
console.log(typeof grandeNumero); // bigint

// Tipo de referência - Objeto
let pessoa = { nome: "João", idade: 30 };
console.log(pessoa); // { nome: "João", idade: 30 }
console.log(typeof pessoa); // object

// Aula 1.5: Exemplos práticos com BigInt e Symbol

// Calcular o fatorial de um número grande, como 100,
// que rapidamente ultrapassa o limite superior para números em JavaScript.

function calcularFatorial(n) {
  let resultado = BigInt(1); // Inicializa como BigInt para suportar números grandes
  for (let i = BigInt(2); i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

let fatorialDeCem = calcularFatorial(BigInt(100)); // Usa BigInt para o cálculo
console.log(fatorialDeCem.toString()); // Imprime o fatorial de 100

// Usar Symbol para definir propriedades de um objeto que devem ser únicas e não enumeráveis,
// garantindo que elas não sejam sobrescritas ou listadas em loops normais.

let obj = {
  [Symbol("id")]: 1,
  nome: "João",
  idade: 30,
};

// Adicionando outro Symbol com o mesmo descrição
obj[Symbol("id")] = 2;

console.log(obj); // Os Symbols são únicos, mesmo com a mesma descrição
for (let prop in obj) {
  console.log(`${prop}: ${obj[prop]}`); // Symbols não são mostrados no loop for...in
}

// Acessando propriedades Symbol
let idSymbols = Object.getOwnPropertySymbols(obj);
console.log("ID Symbols: ", obj[idSymbols[0]], obj[idSymbols[1]]);

// Aula 2: Entendendo a Conversão de Tipos
// Conversão implícita - números como strings
let valor1 = "O total é: " + 299;
console.log(valor1); // "O total é: 299"

// Conversão explícita - String para Number
let valor2 = "150";
console.log(Number(valor2)); // 150
console.log(typeof Number(valor2)); // number

// Conversão explícita - Number para String
let valor3 = 85;
console.log(String(valor3)); // "85"
console.log(typeof String(valor3)); // string

// Aula 3: Variáveis em JavaScript: var, let e const

// Exemplo de hoisting com var
console.log(varElevada); // undefined - var é elevada com valor undefined
var varElevada = "Apareço antes de ser declarada!";
console.log(varElevada); // "Apareço antes de ser declarada!"

// Demonstração de escopo com var, let e const
function testarEscopo() {
  if (true) {
    var variavelVar = "Visível fora do if";
    let variavelLet = "Visível apenas dentro do if";
    const variavelConst = "Também visível apenas dentro do if";
  }
  console.log(variavelVar); // "Visível fora do if" - var não tem escopo de bloco
  // console.log(variavelLet); // Erro - let tem escopo de bloco
  // console.log(variavelConst); // Erro - const tem escopo de bloco
}

testarEscopo();

// Exemplo de erro de redeclaração com let e const
let saudacao = "Olá";
// let saudacao = "Mundo"; // Gera erro: saudacao já foi declarada

const pi = 3.14159;
// pi = 3.14; // Gera erro: reatribuição não é permitida em constantes

// Aula 4: Práticas de Declaração de Variáveis
// Uso apropriado de let em loops
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime números de 0 a 4
}

// Constantes para valores que não mudam
const URL_BASE = "http://api.exemplo.com";
console.log(URL_BASE); // "http://api.exemplo.com"

// Aula 5: Imutabilidade e Tipos de Referência

// Uso de Object.freeze para evitar mutações
const configuracoes = Object.freeze({ tema: "escuro" });
console.log(configuracoes); // { tema: "escuro" }
// configuracoes.tema = "claro"; // Gera erro: não pode atribuir a propriedades de um objeto congelado

// Criação de cópias imutáveis com spread
const objetoOriginal = { nome: "Original" };
const objetoCopia = { ...objetoOriginal, nome: "Cópia" };
console.log(objetoOriginal); // { nome: "Original" }
console.log(objetoCopia); // { nome: "Cópia" }

// Manipulação de arrays sem mutação
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map((n) => n * 2); // retorna um novo array
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosDobrados); // [2, 4, 6, 8, 10]

// Adicionando elementos a arrays sem mutação
const maisNumeros = [...numeros, 6];
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(maisNumeros); // [1, 2, 3, 4, 5, 6]

// Atualizando um objeto de forma imutável
const carro = { marca: "Toyota", modelo: "Corolla" };
const carroAtualizado = { ...carro, ano: 2021 };
console.log(carro); // { marca: "Toyota", modelo: "Corolla" }
console.log(carroAtualizado); // { marca: "Toyota", modelo: "Corolla", ano: 2021 }

// Filtrando um array sem mutação
const menoresQueTrês = numeros.filter((n) => n < 3);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(menoresQueTrês); // [1, 2]

// Usando Object.assign para cópias de objetos
const detalhesCarro = { cor: "preto" };
const carroComDetalhes = Object.assign({}, carro, detalhesCarro);
console.log(carro); // { marca: "Toyota", modelo: "Corolla" }
console.log(carroComDetalhes); // { marca: "Toyota", modelo: "Corolla", cor: "preto" }
