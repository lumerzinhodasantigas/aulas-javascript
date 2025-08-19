'use strict';

/* Comandos Condicionais mais comuns 
if -> Se
else - SE NÃO
*/

console.log("Exemplo 1");

let numero = 50;

// Condicional SIMPLES (usa apenas if)
if (numero >= 10) {
    console.log("Se você está lendo essa mensagem, é porque a condição é VERDADEIRA!");
}

console.log("\nExemplo 2");

let aluno = "Bob";
let idade = 18;

/* Lógia: verificar se o aluno é maior ou menor de idade. */
if (idade < 18) {
    console.log("Você é menor de idade!");
} else {
    console.log("Você é maior de idade!");
}

// Exercício Condicional

/* 1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)*/

let Nota1 = 9;

let Nota2 = 10;

/* 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2. */

let media = (Nota1 + Nota2) / 2;

/* 3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado". */

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// Condicionada E

/* Verificando o desempenho do aluno conforme a média:
 - Média acima de 9? Ótimo
 - Média acima de 7? Bom
 - Média acima de 5? Ruim
 - Média até 5? Péssimo */

if (media > 9) {
    console.log("ÓTIMO!");
} else if (media > 7) {
    console.log("BOM!");
} else if (media > 5) {
    console.log("RUIM!");
} else {    
    console.log("PÉSSIMO!");
}

console.log("\nExemplo 4");

if(idade >= 18){
    console.log("maior");
} else{
    console.log("menor");
}

// OU, pode ser feito da seguinte forma...:

let situacao = idade >= 18 ? "maior" : "menor";

console.log(situacao)