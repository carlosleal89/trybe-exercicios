const myRemove = require('./ex1.js'); // nome do arquivo com a função

describe('Recebe um array e retorna uma cópia desse array sem o elemento do segundo parametro', () => {
    test('Recebe os argumentos [1,2,3,4],3 e  retorna o array esperado [1,2,4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });


    test('Recebe os argumentos [1,2,3,4],3 e não retorna o array [1,2,3,4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Recebe os argumentos [1,2,3,4],5 e  retorna o array esperado [1,2,3,4]', () => {
        expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
    });
})