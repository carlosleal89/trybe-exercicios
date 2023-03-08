const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

const [n1, n2, n3] = primeNumbers;

sum(n1, n3) // 54

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

const array = ['arroz', 'gato', 'água'];
const [comida, animal, bebida] = array;

console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numeros = [1, 3, 5, 6, 8, 10, 12];

const [,,, ...numerosPares] = numeros; //cada virgula se refere a um elemento do array que será ignorado. O spread antes da variavel numerosPares significa que os elementos restantes serão atribuidos a essa variavel.

console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log acima

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;
// aqui esta sendo atribuido o valor padrão de zero para a variavel z caso ele seja chamada. x e y recebem o valores que estão nos indices 0 e 1;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


//retorne 'João is Brazilian

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

  const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

//escreva uma função multiply que multiplique dois números passados como argumentos. 
//Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.


const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8, 2));
