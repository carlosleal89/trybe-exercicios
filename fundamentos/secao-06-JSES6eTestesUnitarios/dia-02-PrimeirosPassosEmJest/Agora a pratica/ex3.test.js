const {encode, decode} = require('./ex3.js');
describe('Testa se a funções encode/descode tem o retorno esperado', () => {
    test('Testa se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });

    test('Testa se decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });

    test('Testa se encode converte as vogais a,e,i,o,u em 1,2,3,4,5', () => {
        expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
    });

    test('Testa se decode converte os numero 1,2,3,4,5 em a,e,i,o,u', () => {
        expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
    });

    test('Testa se encode converte apenas vogais', () => {
        expect(encode('b,c,d,f,g')).toBe('b,c,d,f,g');
    });

    test('Testa se decode converte apenas numero de de 1 a 5', () => {
        expect(encode('6,7,8,9,10')).toBe('6,7,8,9,10');
    });

    test('Testa se a string de retorno tem o mesmo numero de caracteres da string de parametro', () => {
        const stringRet = encode('a,e,i,o,u');
        const stringParam = 'a,e,i,o,u';
        expect(stringRet.length).toBe(stringParam.length);
    });
})