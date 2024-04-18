// Exercício 1: Arrays e Objetos Aninhados
const diretor = {
  nome: "Christopher Nolan",
  anoNascimento: 1970,
  filmes: [
    {
      titulo: "Inception",
      ano: 2010,
      atores: ["Leonardo DiCaprio", "Ellen Page"],
    },
    {
      titulo: "Interstellar",
      ano: 2014,
      atores: ["Matthew McConaughey", "Anne Hathaway"],
    },
  ],
};
console.log(diretor);

// Exercício 2: Manipulações Avançadas de Array
let numeros = [10, 20, 30, 40, 50];
numeros.splice(3, 0, 35); // Adiciona 35 antes do 40
numeros.splice(5, 0, 45); // Adiciona 45 antes do 50
console.log(numeros); // Adicionando elementos mantendo ordem
numeros.splice(1, 2, 25); // Remove 20, 30; adiciona 25
console.log(numeros); // Removendo e substituindo
numeros.reverse(); // Reversão do array
console.log(numeros);

// Exercício 3: Trabalhando com Slice, Splice e Concat
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subArray = items.slice(2, 7);
console.log(subArray); // Usando slice
items.splice(3, 3, 20, 30);
console.log(items); // Usando splice para remover e adicionar
let finalArray = items.concat([11, 12, 13], [14, 15]);
console.log(finalArray); // Usando concat

// Exercício 4: Complexidade com Find e FindIndex
let numbers = [5, 10, 15, 20, 25, 30];
let divisibleByTen = numbers.find((num) => num % 10 === 0 && num > 15);
console.log(divisibleByTen); // Usando find
let squarePosition = numbers.findIndex((num) => Math.sqrt(num) % 1 === 0);
console.log(squarePosition); // Usando findIndex

// Exercício 5: Desafios com Map, Filter, e Reduce
const array = [2, 4, 6, 8, 10];
const fatorial = (n) => (n <= 1 ? 1 : n * fatorial(n - 1));
const fatoriais = array.map(fatorial);
console.log(fatoriais); // Usando map para fatoriais
const comZero = array.filter((num) => num.toString().includes("0"));
console.log(comZero); // Usando filter para números com '0'
const produto = array.reduce((acc, num) => acc * num, 1);
console.log(produto); // Usando reduce para produto
