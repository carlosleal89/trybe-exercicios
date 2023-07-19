const readline = require('readline-sync');

const imcCalc = (peso, altura) =>  (peso / altura**2).toFixed(2);

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

const imc = Number(imcCalc(peso, altura));

if (imc < 18.5) console.log('magro');
if (imc >= 18.5 && imc < 25) console.log('normal');
if (imc >= 25 && imc < 30) console.log('sobrepeso');
if (imc >= 30 && imc < 35) console.log('obesidade 1');
if (imc >= 35 && imc < 40) console.log('obesidade 2');
if (imc > 40) console.log('obesidade 3');