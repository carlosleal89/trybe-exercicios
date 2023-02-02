function createTags(quantTags, tag, destinyClass, className, contentText){
    let quant = 1;
        while (quant <= quantTags){    
        const tagName = document.createElement(tag);        
        document.querySelector(destinyClass).appendChild(tagName);
        if ( className != undefined && className != 0){
        tagName.className = className;
        } 
        if ( contentText != undefined){
            tagName.innerText = contentText;
        };
        quant += 1;
        }        
    }
// const h1 = document.createElement('h1');
//     h1.innerText = 'TrybeTrip - Agência de Viagens';
//     document.querySelector('body').appendChild(h1);
createTags(1, 'h1', 'body', 0, 'TrybeTrip - Agência de Viagens' )    
// const main = document.createElement('main');
//     main.className = 'main-content';
//     document.querySelector('body').appendChild(main);
createTags(1, 'main','body','main-content');
// const sectionCenterContent = document.createElement('section');
//     sectionCenterContent.className = 'center-content'
//     document.querySelector('.main-content').appendChild(sectionCenterContent);
createTags(1, 'section', '.main-content', 'center-content' );
// const paragraph = document.createElement('p');
//     document.querySelector('.center-content').appendChild(paragraph);
//     paragraph.innerText = 'Espero que continue dando tudo certo.';
createTags(1, 'p','.center-content', 0, 'Espero que continue dando tudo certo.');
// const sectionLeftContent = document.createElement('section');
//     sectionLeftContent.className = 'left-content';
//     document.querySelector('.main-content').appendChild(sectionLeftContent);
createTags(1, 'section', '.main-content', 'left-content')    
// const sectionRightContent = document.createElement('section');
//     sectionRightContent.className = 'right-content';    
//     document.querySelector('.main-content').appendChild(sectionRightContent);
createTags(1, 'section', '.main-content', 'right-content')
const image = document.createElement('img');
    image.src = 'https://picsum.photos/200';
    image.className = 'small-image';
    document.querySelector('.left-content').appendChild(image);
const unOrderList = document.createElement('ul');
    document.querySelector('.right-content').appendChild(unOrderList);
    unOrderList.className = 'list-numbers';

const numbersText = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
    function numbersList(){
        for ( let i = 0; i < numbersText.length; i += 1){
            let listItens = document.createElement('li');
            listItens.innerText = numbersText[i];
            unOrderList.appendChild(listItens);
        }
}
numbersList();

createTags(3,'h3', '.main-content');

document.querySelector('h1').className = 'title';

document.querySelectorAll('.main-content h3')[0].className = 'description';
document.querySelectorAll('.main-content h3')[1].className = 'description';
document.querySelectorAll('.main-content h3')[2].className = 'description';

const leftContent = document.querySelector('.left-content');
document.querySelector('.main-content').removeChild(leftContent);

document.querySelector('.right-content').style.marginRight = 'auto';
document.querySelector('.main-content').style.backgroundColor = 'green';

const list = document.querySelectorAll('li');
document.querySelector('.list-numbers').removeChild(list[8]);
document.querySelector('.list-numbers').removeChild(list[9]);




