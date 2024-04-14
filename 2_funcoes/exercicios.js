// Exercício 1
function criarPessoa() {
  let nome = ""; // Variável privada
  let idade = 0; // Variável privada

  return {
    setDados: function (novoNome, novaIdade) {
      nome = novoNome;
      idade = novaIdade;
    },
    getDados: function () {
      console.log(`Nome: ${nome}, Idade: ${idade}`);
    },
  };
}

let pessoa = criarPessoa();
pessoa.getDados(); // Saída: Nome: , Idade: 0
pessoa.setDados("Alice", 30);
pessoa.getDados(); // Saída: Nome: Alice, Idade: 30

// Exercício 2: Entendendo o `this`
const pessoaB = {
  nome: "Ana",
  idade: 30,
  apresentar: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};
pessoaB.apresentar(); // Saída: Olá, meu nome é Ana e tenho 30 anos.
const outraPessoa = { nome: "João", idade: 25 };
pessoaB.apresentar.call(outraPessoa); // Saída: Olá, meu nome é João e tenho 25 anos.
pessoaB.apresentar.apply(outraPessoa); // Saída: Olá, meu nome é João e tenho 25 anos.

// Exercício 3: Funções Recursivas Básicas
function contarDeAte(a, b) {
  if (a > b) {
    return;
  }
  console.log(a);
  contarDeAte(a + 1, b);
}
contarDeAte(1, 5); // Saídas: 1, 2, 3, 4, 5

// Exercício 4: Recursão com Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); // Saída: 55 (Décimo número da sequência de Fibonacci)
