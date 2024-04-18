// Aula 1: Introdução às Funções
// Declaração de uma função nomeada
function saudar() {
  console.log("Olá, mundo!");
}
saudar(); // Invoca a função

// Função anônima armazenada em uma variável
let mostrarMensagem = function () {
  console.log("Função anônima chamada!");
};
mostrarMensagem(); // Invoca a função anônima

// Aula 2: Parâmetros e Retornos
// Função com parâmetros
function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3)); // Saída: 8

// Função que retorna uma string baseada na condição
function verificaMaioridade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
console.log(verificaMaioridade(20)); // Saída: "Maior de idade"
console.log(verificaMaioridade(16)); // Saída: "Menor de idade"

// Aula 3: Funções de Seta
// Função de seta simples
const quadrado = (x) => x * x;
console.log(quadrado(5)); // Saída: 25

// Função de seta com múltiplos parâmetros
const adicionar = (a, b) => a + b;
console.log(adicionar(10, 5)); // Saída: 15

// Função de seta que retorna um objeto
const criarPessoa = (nome, idade) => ({ nome: nome, idade: idade });
console.log(criarPessoa("Ana", 22)); // Saída: {nome: "Ana", idade: 22}

// Função de seta com corpo extenso
const fatorial = (n) => {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};
console.log(fatorial(6)); // Saída: 720

// Demonstrando o tratamento de 'this' em funções de seta
let grupo = {
  titulo: "Desenvolvedores",
  membros: ["Alice", "Bob", "Carol"],
  listarMembros() {
    this.membros.forEach((membro) => console.log(this.titulo + ": " + membro));
  },
};
grupo.listarMembros();

// Aula: Closures em JavaScript
// Demonstração de Closure
function externa() {
  let variavelExterna = "Valor externo";

  function interna() {
    // A função interna acessa a variável da função externa
    console.log(variavelExterna);
  }

  return interna;
}

let minhaFuncao = externa();
minhaFuncao(); // Saída: Valor externo

// Closure em um exemplo prático
function criarContador() {
  let contador = 0;

  return function () {
    contador += 1;
    console.log(contador);
  };
}

let contador = criarContador();
contador(); // Saída: 1
contador(); // Saída: 2
contador(); // Saída: 3

// Aula: Contexto `this` em Funções
// Contexto this em função regular
function funcaoRegular() {
  console.log(this);
}

funcaoRegular(); // Saída: Window (ou global em Node.js)

// Contexto this em um objeto
let obj = {
  numero: 123,
  mostrarNumero: function () {
    console.log(this.numero);
  },
};

obj.mostrarNumero(); // Saída: 123

// Mudança de contexto com call e apply
function mostrar() {
  console.log(this.texto);
}

let meuObj = {
  texto: "Olá",
};

mostrar.call(meuObj); // Saída: Olá
mostrar.apply(meuObj); // Saída: Olá

// Arrow function e this
let arrowFuncao = () => {
  console.log(this);
};

arrowFuncao(); // Saída: Window (em browser), o this não muda em arrow functions

// Aula: Funções Recursivas
// Função recursiva para calcular o n-ésimo número da sequência de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n; // Retorna n porque os dois primeiros números são 0 e 1, respectivamente.
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Soma dos dois números anteriores na sequência.
}

console.log(fibonacci(10)); // Saída: 55

// Função recursiva para contar até um número
function contarAte(max, atual) {
  if (atual > max) {
    return;
  }
  console.log(atual);
  contarAte(max, atual + 1);
}

contarAte(5, 1); // Saídas: 1, 2, 3, 4, 5
