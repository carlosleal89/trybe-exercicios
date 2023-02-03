// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//      -Porque somente ela tem uma classe que esta com uma formatação diferente - class tech;

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// 1-salva em uma variavel o caminho para os itens da lista 
// 2- criar um laço for/of para percorrer os elementos da lista e chamar o addEventListener para cada item
// 3- criar uma função que busca o elemento que ja tem a classe .tech. 
// 4- faz um teste pra saber se o elemento ja tem a classe. se tiver, remove.

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;


const listItem = document.querySelectorAll('.container li');
const textBox = document.getElementById('input');
const top3Spot = document.getElementById('my-spotrybefy');
const titleH1 = document.querySelector('h1');

for (let item of listItem) {
  item.addEventListener("click", addClass);
}

function addClass(event) {
  const classTech = document.querySelector('.tech');
  if (classTech !== null) {
    classTech.classList.remove('tech');
  }
  event.target.className = 'tech';
}

textBox.addEventListener("change", changeText);

function changeText(event) {
  const classTech = document.querySelector('.tech');
  classTech.innerText = event.target.value;
  console.log(event.target);
}

top3Spot.addEventListener('dblclick', () => {
  window.open('https://carlosleal89.github.io/');
});

top3Spot.addEventListener("mouseover", () => {
  event.target.style.color = 'red';
})

top3Spot.addEventListener("mouseout", () => {
  event.target.style.color = 'unset';
})

titleH1.addEventListener("mouseover", () => {
  event.target.style.fontSize = '60px'
});

titleH1.addEventListener("mouseout", () => {
  event.target.style.fontSize = '48px'
});