'use strict';

// Declarando um array (vetor)
let guitarristas = ["Dimebag" ,"Kirk", "Marty", "Wes"];

// Se quisermos visualizar a estrutura do array inteiro:
// console.log(guitarristas[0]);

// Acessando um determinado elemento através do índice
console.log(guitarristas);

// O Kirk está em turnê tocando Metallica
console.log(`O ${guitarristas[1]} está em turnê tocando Metallica`);

// Relembrando como criar/usar arrays (vetor)
// No JS, vc pode colocar qualquer coisa em um array
let seiLa = 6;
const coisas = [10, "Senac", "<h2>Oie</h2>"];
console.log(coisas[1]);
console.log(coisas[4]);

/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida...seil á, inventa!)

let bandas = ["Death" ,"Metallica", "Megadeth", "Slayer", "Limp Bizkit", "Korn", "Pantera"];
console.log(bandas);

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string

console.log(`As bandas ${bandas[1]}, ${bandas[4]} e a ${bandas[6]} estão em turnê juntas`);

/* Array como MATRIZ DE 2 DIMENSÕES */

const tecnologias = [
    ["HTML", "CSS", "JAVASCRIPT",],
    ["Figma", "Photoshop"],
    ["PHP", "SQL", "Node.js", "Express"]
];

// console.log(tecnologias);
console.log(tecnologias[0][2]);//  JAVASCRIPT
console.log(tecnologias[1][0]); // Figma
console.log(tecnologias [2][3]); // Express

