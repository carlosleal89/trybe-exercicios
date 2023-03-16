// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  //visto que os parametros são declarados entre chaves, a função entende que o paramentro vai ser passado com objeto
  //visto que os dois objetos tem as mesmas chaves, a função vai ler elas de acordo com o nome do objeto passado com parametro
  // <nome> tem <anos de idade> e gosta de <gostos da pessoa>
  
  // Retornos esperados:
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'