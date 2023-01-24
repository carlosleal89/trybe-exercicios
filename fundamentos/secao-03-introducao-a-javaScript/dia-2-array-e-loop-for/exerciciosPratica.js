console.log("Percorra o array imprimindo todos os valores nele contidos com a função console.log();")

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i+=1){
    console.log(numbers[i]);
}

console.log("Some todos os valores contidos no array e imprima o resultado;");

let soma = 0;
for(let i=0;i<numbers.length;i+=1){
    soma += numbers[i];
}
console.log(soma);

console.log("Calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.");

let media = soma/numbers.length;
console.log(media);

console.log("Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;")

if(media > 20){
    console.log("Valor maior que 20.");
} else console.log("valor menor ou igual a 20");

console.log("Utilizando for, descubra qual o maior valor contido no array e imprima-o;");
let numMaior = 0;
for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]>numMaior){
        numMaior = numbers[i];
    }
}
console.log(numMaior);

console.log("Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;")

let impar = 0;
for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]%2!=0){
        impar+=1;
    }
}
if(impar == 0){
    console.log("nenhum valor impar");
}else console.log(impar);;

console.log("Utilizando for, descubra qual o menor valor contido no array e imprima-o;")
let numMenor = numbers[0];
for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]<numMenor){
        numMenor = numbers[i];
    }
}
console.log(numMenor);

console.log("Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;");

let array = [];
for(let i=0;i<25;i+=1){
    array.push(i+1);
    console.log(array[i]);
}

/*let array = [];
for(let i=1;i<=25;i+=1){
    array.push(i);
    console.log(array[i]); // assim não funciona porque ele tenta imprimir uma posição do array que ainda não existe. teria que imprimir fora do laço for.
}*/ 

console.log("Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.");

for(let i=0;i<array.length;i+=1){
    console.log(array[i] + " dividido por 2 é " + array[i]/2);    
}