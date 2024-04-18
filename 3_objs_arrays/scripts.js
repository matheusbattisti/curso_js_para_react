// Aula 1: Introdução a Arrays e Objetos

// Definindo um Array
let frutas = ["Maçã", "Banana", "Pera"];
console.log(frutas); // Saída: ["Maçã", "Banana", "Pera"]

// Acessando elementos de um Array
console.log(frutas[0]); // Saída: Maçã

// Definindo um Objeto
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2021,
};
console.log(carro); // Saída: {marca: "Toyota", modelo: "Corolla", ano: 2021}

// Acessando propriedades de um Objeto
console.log(carro.marca); // Saída: Toyota

// Aula 2: Manipulação de Arrays: Métodos Básicos

let numeros = [1, 2, 3, 4, 5];

// Usando push para adicionar um elemento ao final do array
numeros.push(6);
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

// Usando pop para remover o último elemento do array
numeros.pop();
console.log(numeros); // Saída: [1, 2, 3, 4, 5]

// Usando shift para remover o primeiro elemento do array
numeros.shift();
console.log(numeros); // Saída: [2, 3, 4, 5]

// Usando unshift para adicionar elementos no início do array
numeros.unshift(0);
console.log(numeros); // Saída: [0, 2, 3, 4, 5]

// Aula 3: Explorando slice, splice e concat

let items = [1, 2, 3, 4, 5];

// Usando slice para copiar elementos do array
let copia = items.slice(1, 3); // Copia elementos de índice 1 até 2 (3-1)
console.log(copia); // Saída: [2, 3]

// Usando splice para remover elementos
let removidos = items.splice(1, 2); // Remove 2 elementos a partir do índice 1
console.log(removidos); // Saída: [2, 3]
console.log(items); // Saída: [1, 4, 5]

// Resetando o array para estado original
items = [1, 2, 3, 4, 5];
// Usando splice para adicionar elementos
items.splice(3, 0, "a", "b"); // Adiciona 'a' e 'b' antes do índice 3
console.log(items); // Saída: [1, 2, 3, 'a', 'b', 4, 5]

// Usando concat para combinar arrays
let combinado = items.concat([6, 7]);
console.log(combinado); // Saída: [1, 2, 3, 'a', 'b', 4, 5, 6, 7]

// Aula 5: Uso de map, filter, e reduce

// Usando map para transformar dados
const numeros2 = [1, 2, 3, 4, 5];
const quadrados = numeros2.map((num) => num * num);
console.log("Quadrados:", quadrados); // Saída: [1, 4, 9, 16, 25]

// Usando map para converter temperaturas de Celsius para Fahrenheit
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map((temp) => temp * 1.8 + 32);
console.log("Fahrenheit:", fahrenheit); // Saída: [32, 50, 68, 86, 104]

// Usando filter para filtrar dados
const pares = numeros2.filter((num) => num % 2 === 0);
console.log("Números pares:", pares); // Saída: [2, 4]

// Usando filter para obter números maiores que 10
const maioresQueDez = fahrenheit.filter((temp) => temp > 50);
console.log("Maiores que 50°F:", maioresQueDez); // Saída: [68, 86, 104]

// Usando reduce para acumular dados
const soma = numeros2.reduce((acc, num) => acc + num, 0);
console.log("Soma:", soma); // Saída: 15

// Usando reduce para multiplicar elementos
const produto = numeros2.reduce((acc, num) => acc * num, 1);
console.log("Produto:", produto); // Saída: 120

// Aula 6: Iteração em Objetos
const pessoa = {
  nome: "Alice",
  idade: 25,
  cidade: "São Paulo",
};

// Usando for...in para iterar sobre propriedades
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
} // Saída: nome: Alice, idade: 25, cidade: São Paulo

// Usando Object.keys() para obter chaves do objeto
Object.keys(pessoa).forEach((chave) => {
  console.log(`${chave}: ${pessoa[chave]}`);
}); // Saída: nome: Alice, idade: 25, cidade: São Paulo

// Aula 7: Técnicas Avançadas com find e findIndex

// Usando find para localizar um elemento
const primeiroPar = numeros2.find((num) => num % 2 === 0);
console.log("Primeiro número par:", primeiroPar); // Saída: 2

// Usando find para encontrar o primeiro número maior que 10
const primeiroMaiorQueDez = fahrenheit.find((temp) => temp > 50);
console.log("Primeiro maior que 50°F:", primeiroMaiorQueDez); // Saída: 68

// Usando findIndex para encontrar a posição de um elemento
const posicao = numeros2.findIndex((num) => num === 3);
console.log("Posição do número 3:", posicao); // Saída: 2

// Usando findIndex para encontrar a posição do primeiro número maior que 10
const posicaoMaiorQueDez = fahrenheit.findIndex((temp) => temp > 50);
console.log("Posição do primeiro maior que 50°F:", posicaoMaiorQueDez); // Saída: 2

// Aula 8: Desestruturação e Mais Operadores Spread

// Desestruturação de Arrays
const frutas2 = ["Maçã", "Banana", "Laranja"];
const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1); // Saída: Maçã
console.log(fruta2); // Saída: Banana
console.log(fruta3); // Saída: Laranja

// Desestruturação de Objetos
const carro2 = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 2022,
};
const { marca, modelo, ano } = carro;
console.log(marca); // Saída: Ford
console.log(modelo); // Saída: Mustang
console.log(ano); // Saída: 2022

// Uso do Operador Spread em Arrays
const primeiros = [1, 2, 3];
const numeros3 = [...primeiros, 4, 5, 6];
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

// Uso do Operador Spread em Objetos
const novoCarro = { ...carro, ano: 2023 };
console.log(novoCarro); // Saída: {marca: 'Ford', modelo: 'Mustang', ano: 2023}

// Aula 9: JSON

// Convertendo um Objeto JavaScript para String JSON
const aluno = {
  nome: "Alice",
  idade: 24,
  departamento: "Engenharia",
};
const jsonAluno = JSON.stringify(aluno);
console.log(jsonAluno); // Saída: '{"nome":"Alice","idade":24,"departamento":"Engenharia"}'

// Convertendo uma String JSON para Objeto JavaScript
const strJson = '{"nome":"Bob","idade":30,"departamento":"Artes"}';
const objAluno = JSON.parse(strJson);
console.log(objAluno); // Saída: {nome: 'Bob', idade: 30, departamento: 'Artes'}

// Exemplo com Arrays
const professores = ["Alice", "Bob", "Carol"];
const jsonProfessores = JSON.stringify(professores);
console.log(jsonProfessores); // Saída: '["Alice","Bob","Carol"]'

const strProfessores = '["Dave", "Eve", "Fay"]';
const objProfessores = JSON.parse(strProfessores);
console.log(objProfessores); // Saída: ['Dave', 'Eve', 'Fay']
