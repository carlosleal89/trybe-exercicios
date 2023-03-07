// criar a função que busca o maior valor do array numbers utilizando apenas o reduce.

// const numbers = [50, 85, -30, 3, 15];

// const numMaior = numbers.reduce((acc, curr) => {
//     let maior = acc;
//     if(curr > acc) {
//         maior = curr;
//         return curr;
//     } return acc;
// },0);


// const numMaior = numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0); // melhor não usar o paramentro valorInicial quando precisar achar o maior valor do array

// const numMaior = (acc, curr) => ((curr > acc) ? curr : acc);

// console.log(numbers.reduce(numMaior)); // declarei a função de callback separada.