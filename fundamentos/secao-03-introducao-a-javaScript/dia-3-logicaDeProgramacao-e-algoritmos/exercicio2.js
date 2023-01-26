//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

//1-variavel quantidade de numeros diviseis por 3;
//2-laço for;
//3-laço if que vai verificar se é divisivel por 3;

let quantNum = 0;

for(let i=2;i<=150;i+=1){
    if(i % 3 == 0){
        quantNum+=1;
        if(quantNum == 50){
            console.log("parabens");
            }
    }
}
