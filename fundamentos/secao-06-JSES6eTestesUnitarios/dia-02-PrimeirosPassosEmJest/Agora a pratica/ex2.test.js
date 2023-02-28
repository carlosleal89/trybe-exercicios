const myFizzBuzz = require('./ex2.js');

describe('Verifica se a função retorna o código esperado', () => {
    test('Recebe o parametro 15 e retorna o esperado fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('Recebe o parametro 9 e retorna o esperado fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    test('Recebe o parametro 10 e retorna o esperado  buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    test('Recebe um numero não divisivel por 3 ou 5 e retorna o esperado(pŕoprio numero)', () => {
        expect(myFizzBuzz(11)).toBe(11);
    });

    test('Recebe um parametro que não é um numero e retorna o esperado false', () => {
        expect(myFizzBuzz('oi')).toBe(false);
    });
})