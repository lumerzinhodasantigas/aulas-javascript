'use strict';

// Ex 1.: objeto com dados de uma pessoa
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