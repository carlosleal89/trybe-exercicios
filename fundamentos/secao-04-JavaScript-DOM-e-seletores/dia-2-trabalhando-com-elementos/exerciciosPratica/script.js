const h1 = document.createElement('h1');
    h1.innerText = 'TrybeTrip - Agência de Viagens';
    document.querySelector('body').appendChild(h1);
const main = document.createElement('main');
    main.className = 'main-content';
    document.querySelector('body').appendChild(main);
const sectionCenterContent = document.createElement('section');
    sectionCenterContent.className = 'center-content'
    document.querySelector('.main-content').appendChild(sectionCenterContent);
const paragraph = document.createElement('p');
    document.querySelector('.center-content').appendChild(paragraph);
    paragraph.innerText = 'Espero que continue dando tudo certo.';
const sectionLeftContent = document.createElement('section');
    sectionLeftContent.className = 'left-content';
const sectionRightContent = document.createElement('section');
    sectionRightContent.className = 'right-content';
    document.querySelector('.main-content').appendChild(sectionLeftContent);
    document.querySelector('.main-content').appendChild(sectionRightContent);
const image = document.createElement('img');
    image.src = 'https://picsum.photos/200';
    image.className = 'small-image';
    document.querySelector('.left-content').appendChild(image);

