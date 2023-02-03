// Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, 
// ela não deve ser acessível fora do escopo em que esteja sendo declarada.

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
  //console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade()
console.log(" ");

// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome='Luna';
  pessoa.idade=19;
//   pessoa = {
    // nome: 'Luna',
    // idade: 19
  //}  Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

  console.log(' ');

//   Modifique a variável para que não ocorra Erro;

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

console.log(' ');

// Modifique as concatenações para template literals.

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}! `);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(3,5)}`);

console.log(' ');

// Transforme a função numeroAleatorio em uma arrow function;

// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.floor(Math.random()*3)+1;
console.log(numeroAleatorio());

console.log(' ');

// Transforme a função hello em uma arrow function;

// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

const hello = nome => `Olá, ${nome}`;
let nome = 'Ivan';
console.log(hello(nome));

console.log(' ');

// Transforme a função nomeCompleto em uma arrow function;

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
    const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

  let nome1 = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome1, sobrenome));

  console.log(' ');

//   Altere a expressão if/else utilizando ternary operator;

let speed = 900;
const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }

    return (speed >= 120) ? `Você ultrapassou o limite de velocidade`:`Voce está na velocidade permitida`;

};
console.log(speedCar(speed));

