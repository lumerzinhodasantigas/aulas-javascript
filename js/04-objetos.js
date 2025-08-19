'use strict';

// Ex 1.: objeto com dados de uma pessoa

console.log("\nExemplo1\n");

const pessoa = {
    // propriedade: valor
    nome: "Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

// Acessamos as propriedades usando NomeDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);

// Exemplo 2: objeto com array

console.log("\nExemplo2\n");

const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    volumes: [
        "A Pedra Filosofal",
        "A Câmara Secreta",
        "O Prisioneiro de Azkaban"
    ]
};

console.log(livro);
console.log(livro.titulo);

/* Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes), usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice pois se trata de um array. */

console.log(`Meu livro preferido é ${livro.volumes[2]}`);

// Exemplo 3: array de objetos

console.log("\nExemplo 3\n");

const livros = [
    {
        titulo: "O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },
    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },
    {
        titulo: "Um Livro Qualquer",
        autor: "Fulano de Tal"
    }
];

console.log(livros);

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY = []) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO = {} nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

const aluno = {
    nome: "Kennedy",
    nascimento: "17/04/2009",
    telefones: [
        "+55 11 91356-8817", // celular
        "4002-8922"          // fixo
    ],
    endereço: {
        rua: "Goitá",
        número: "272",
        bairro: "Jardim de Lorenzo"
    }
};

console.log(aluno);
console.log(`Meu nome é ${aluno.nome}, nasci em ${aluno.nascimento} e moro no bairro ${aluno.endereço.bairro}.`);
