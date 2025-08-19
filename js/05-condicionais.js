'use strict';

/* Comandos Condicionais mais comuns 
if -> Se
else - SE NÃO
*/

console.log("Exemplo 1");

let numero = 50;

// Condicional SIMPLES (usa apenas if)
if(numero >= 10){
    console.log("Se você está lendo essa mensagem, é porque a condição é VERDADEIRA!");
}

console.log("\nExemplo 2");

let aluno = "Bob";
let idade = 18;

/* Lógia: verificar se o aluno é maior ou menor de idade. */
if(idade < 18){
    console.log("Você é menor de idade!");
} else{
    console.log("Você é maior de idade!");
}