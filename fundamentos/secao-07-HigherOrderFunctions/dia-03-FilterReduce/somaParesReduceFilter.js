//faça uma função que some todos os números pares do array numbers:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54, 2, 1, 2, 10];

// const sumPair = numbers.reduce((acc, curr) => {
//     if (curr % 2 === 0 && acc % 2 === 0) {
//         return curr + acc;
//     }
//     return acc;
// },0);

const sumPair = numbers.reduce((acc, curr) => (curr % 2 === 0) ? curr + acc : acc, 0);

// const sumPair = (n1, n2) => (n2 % 2 === 0 && n1 % 2 === 0) ? n2 + n1 : n1;

// console.log(numbers.reduce(sumPair));


// const sumPair = numbers.filter((element)=>
//     element % 2 === 0).reduce((acc, curr) =>
//     acc + curr);
console.log(sumPair);