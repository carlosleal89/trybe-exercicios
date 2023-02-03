// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, 
// definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 20;
const b = 10;

function soma(){
    return a + b;
}
console.log(soma());

function subtracao(){
    return a - b;
}
console.log(subtracao());

function multiplicacao(){
    return a * b;
}
console.log(multiplicacao());

function divisao(){
    return a / b;
}
console.log(divisao());

function modulo(){
    return a % b;
}
console.log(modulo());


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, 
// duas constantes com os valores que serão comparados.

const c = 13;
const d = 7;

function numMaior(){
    if(c > d){
        return c;
    } else return d;
}
console.log(numMaior());

// Faça um programa que retorne o maior de três números.
//  Defina, no começo do programa, três constantes com os valores que serão comparados.

const e = 9;
const f = 10;
const g = 14;

function maiorDeTres (){
    if(e > f && e > g){
       return e;
    } else if (f > g){
        return f;
    } else return g;
}
console.log(maiorDeTres());

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, 
// “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function posOrNeg(n){
    if(n>0){
        return 'positive';
    } else if (n<0){
        return 'negative';
    } else return 'zero';
}
console.log(posOrNeg(0));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const x = 80;
const y = 50;
const z = 50;

function triangle(){
    if(x < 0 || y < 0 || z < 0){
        return 'os angulos devem ter valores positivos.'
    } else if (x + y + z == 180){
        return true;
    } else return false;
}
console.log(triangle());