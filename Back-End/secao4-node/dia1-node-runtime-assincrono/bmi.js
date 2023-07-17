const readline = require('readline-sync');

const imc = (peso, altura) =>  (peso / altura**2).toFixed(2);

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

console.log(imc(peso, altura));