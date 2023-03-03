const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
//  emailListInData.forEach((element) => {
//    return console.log(`O email ${element} está cadastrado em nosso banco de dados!`)
//  });

 emailListInData.forEach((element) => console.log(`O email ${element} está cadastrado em nosso banco de dados!`));
 // faz a mesma coisa de antes

 console.log(emailListInData.find((element) => {
    return element === 'fabiano@email.com';
 }));

 const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((element) => element < 20)); // 18

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

console.log(numbers.find((element) => {
    return element % 3 === 0 && element % 5 === 0;
}));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

console.log(names.find((element) => {
    return element.length === 5;
}));

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

  console.log(musicas.find((element) => {
    return element.id === '31031685';
  }))

