/*Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. 
Considere o número de caracteres de cada palavra.*/


let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];
for(let i=0;i<array.length;i+=1){
    if(array[i].length > maiorPalavra.length){
        maiorPalavra = array[i];
    } else if(array[i].length < menorPalavra.length){
        menorPalavra = array[i];
    }
}
console.log(maiorPalavra + ' ' + menorPalavra);

