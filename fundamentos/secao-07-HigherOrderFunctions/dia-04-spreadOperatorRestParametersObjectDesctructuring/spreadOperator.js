const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, 'mes', ...fall, ...winter, ...spring];
console.log(months);


const product = {
    id: 1,
    name: {
      item1: 'Camiseta',
      item2: 'shorts',
    },
};

const productPrice = {
  price: 23
}

const newProducts = {...product, ...productPrice, price: 30};
console.log(newProducts);


//faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.


const specialFruit = ['melão', 'banana', 'maça'];
const additionalItens = ['granola', 'mel', 'pasta de amendoin'];

const fruitSalad = (fruit, additional) => {
  const saladFruit = [...specialFruit, ...additionalItens];
  return saladFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));

