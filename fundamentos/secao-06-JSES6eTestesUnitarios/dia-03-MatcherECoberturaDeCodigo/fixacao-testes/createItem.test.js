const createItem = require('./createItem');
describe('a função createItem recebe os parametros e retorna um objeto. ', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 10, 2)).toEqual({ name: 'banana', quantity: 2, unit: 'kg', price: 10 });
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 10)).toEqual({ name: 'banana', quantity: 0, unit: 'kg', price: 10 });
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {createItem()}).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(1, 'kg', 10, 2)}).toThrow(Error);
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana', 'kg', -10, 2)}).toThrow(Error);
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana', 'kg', 0, 2)}).toThrow(Error);
  });
});