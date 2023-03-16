//Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
  // const filterPeople = (listPeople) => {
  //   return listPeople.filter((people) =>
  //       people.nationality === 'Australian' && (people.bornIn > 1900 && people.bornIn <= 2000));
  // }

  const filterPeople = (listPeople) => {
    return listPeople.filter(({bornIn, nationality}) => nationality === 'Australian' && (bornIn > 1900 && bornIn <= 2000))
  } // aqui é passado as chaves do objeto como parametro para o filter.

  console.log(filterPeople(people));