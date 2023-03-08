// Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. 
// Detalhe: você precisa fazer essa função gastando apenas 1 linha. 
// O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

const swap = ([n1,n2,n3]) => [n3, n2, n1];
//o parametro [n1,n2,n3] diz para a função que ela vai receber um array e que cada elemento dele
//vai ser atribuido a uma variavel, respectivamente. 
//o retorno diz a ordem que esses elementos devem ser retornados.

console.log(swap(myList));
