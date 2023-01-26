//criar um algoritmo que imprima na tela o fatorial de 10;
//1-criar uma variavel que armazene o fatorial de 10;
//2-criar um laço for para percorrer e calcular o fatorial;

let fatorial = 10;
let resultFatorial = '';
for(let i=fatorial-1;i>0;i-=1){
    fatorial *= i;
    if(i > 1){
    resultFatorial += i + ' x ';
    } else resultFatorial += i;     
}
console.log(10 + '! = ' + 10 + ' x ' + resultFatorial + ' = ' + fatorial);

