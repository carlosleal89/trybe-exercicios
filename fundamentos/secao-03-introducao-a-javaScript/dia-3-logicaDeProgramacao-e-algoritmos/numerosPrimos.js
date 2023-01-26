/*Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, 
escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.*/

let maiorPrimo = 0;
let numPrimos = [];

for(let num=2;num<=50;num+=1){
    let divisores = 0;
    for(let div=1;div<=num;div+=1){        
        if(num%div == 0){
            divisores += 1;           
        }
    }
    if(divisores <= 2){
        numPrimos.push(num);
    }
}
maiorPrimo = numPrimos[0];
for(let i=0;i<numPrimos.length;i+=1){
    if(numPrimos[i]>maiorPrimo){
        maiorPrimo = numPrimos[i];
    }
}
console.log(numPrimos);
console.log(maiorPrimo);
