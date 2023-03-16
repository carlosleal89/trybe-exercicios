const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (arrayProdutos, arrayPrecos) =>  arrayProdutos.map((elements, index) => ({ [elements]: arrayPrecos[index]}))




console.log(updateProducts(products, prices))



