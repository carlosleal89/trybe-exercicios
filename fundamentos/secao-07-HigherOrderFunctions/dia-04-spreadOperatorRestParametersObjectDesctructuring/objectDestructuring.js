// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

//   const {name} = product;
// // console.log(name); // Smart TV Crystal UHD

// const obj = {
//     nome: 'carlos',
//     idade: 33
// }

// function teste({nome, idade}) {
//     return nome + idade;
// }

// // console.log(teste(obj));


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userDetails = {...user, ...jobInfos};

  console.log(userDetails);

  // "Hi, my name is Maria, I'm 21 years old and I'm Brazilian.
  // I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

  // const {name, age, nationality, profession, squad, squadInitials} = userDetails;

  // console.log(`Hi, my name is ${name}, i'm ${age} old and i'm ${nationality}. 
  // I work as a ${profession} and my squad is ${squad}`);
  