### Exercício 1: Tipos de Dados e Conversões

**Descrição:**  
Escreva um script que declare variáveis para armazenar seu nome, idade, se está chovendo ou não (valor booleano) e a data de hoje (usando o objeto `Date`). Em seguida, converta a idade para string e a variável booleana para número. Imprima todos os valores e seus tipos após as conversões.

**Objetivo:**  
Praticar a declaração de variáveis com diferentes tipos de dados e realizar conversões explícitas entre tipos.

---

### Exercício 2: Escopo e Hoisting

**Descrição:**  
Crie uma função que tente acessar uma variável definida com `let` e `const` dentro de um bloco `if` e fora dele. Tente também acessar uma variável `var` antes e depois de sua declaração. Imprima os resultados e observe o comportamento.

**Objetivo:**  
Demonstrar o entendimento sobre o escopo de bloco versus escopo de função e o conceito de hoisting.

---

### Exercício 3: Imutabilidade de Objetos

**Descrição:**  
Dado o objeto `usuario = { nome: "João", idade: 28 }`, tente modificar a idade do usuário para 29 usando um método que mantenha a imutabilidade do objeto original. Crie e imprima um novo objeto baseado no original, mas com a idade modificada.

**Objetivo:**  
Praticar técnicas para manter a imutabilidade de objetos em JavaScript.

---

### Exercício 4: Manipulação de Arrays sem Mutação

**Descrição:**  
Crie um array de números e realize as seguintes operações, gerando novos arrays sem modificar o original:

1. Dobre os valores de cada elemento.
2. Filtre os elementos para obter apenas números maiores que 10.
3. Adicione o número 25 ao final do array.

Imprima o array original e os arrays resultantes após cada operação.

**Objetivo:**  
Reforçar o conceito de imutabilidade e praticar métodos de array que não alteram o array original (`map`, `filter`, e uso de spread para adicionar elementos).

---

### Exercício 5: Uso Prático de `Object.freeze` e `Object.assign`

**Descrição:**  
Dado um objeto congelado `config = Object.freeze({ tema: "claro" })`, tente adicionar uma nova propriedade `fonte: "Arial"` e alterar a propriedade `tema` para "escuro". Após falhar em mudar o objeto congelado, use `Object.assign` para criar uma cópia do objeto e modifique esta cópia conforme necessário. Imprima ambos os objetos.

**Objetivo:**  
Entender a função de `Object.freeze` para prevenir mutações e usar `Object.assign` para criar e modificar cópias de objetos.
