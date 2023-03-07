// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha', 
  ];
  const expectedResult = 20;
//   const countA = () => {
//    const newNames = names.toString().toLowerCase().split('');
//    return newNames.reduce((acc, curr) => {
//     if (curr === 'a') {
//         return acc += 1
//     }
//     return acc
//    }, 0)
//   }

const countA = () =>
    names.toString().toLowerCase().split('').reduce((acc, curr) =>
        curr === 'a' ? acc += 1: acc, 0);
        
/*.toString() transforma o array em uma string.
  .toLowerCase() transforma todas as letrar para minuscula
  .split() separa to a string em um array de caracteres
  .reduce() testa os caracteres e incrementa o contador*/ 
console.log(countA());