import validator from 'validator';
import './style.css';

const btnEl = document.querySelector('button');
const inputTextEl = document.querySelector('#input');
const outputValidationEl = document.querySelector('h2');
const selectMenuEl = document.querySelector('select');

btnEl.addEventListener('click', (event) => {
  const inputText = inputTextEl.value;
  const option = selectMenuEl.options[selectMenuEl.selectedIndex].value;
  const options = {
    cpf: validator.isTaxID(inputText, 'pt-BR') === true ? 'CPF válido' : 'CPF inválido',
    email: validator.isEmail(inputText) === true ? 'Email válido' : 'Email inválido',
    cep: validator.isPostalCode(inputText, 'BR') === true ? 'CEP válido' : 'CEP inválido',
  };
  outputValidationEl.innerHTML = `${options[option]}`; // cada vez que clicar no botão, o elemento vai receber a string sendo preenchida com a chave do objeto acima, dessa forma ele já executa a expressão e retorna o esperado
  event.preventDefault();
});
