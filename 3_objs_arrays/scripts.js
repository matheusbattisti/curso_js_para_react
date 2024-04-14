// Aula: Introdução a Arrays e Objetos
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

// Aula: Manipulação de Arrays: Métodos Básicos
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

// Aula: Explorando slice, splice e concat
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
