const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
 people.sort((a, b) => a.age - b.age);
 people2.sort((a, b) => b.age - a.age);
  
  console.log('Elementos em ordem crescente por idade ', people);
  console.log('Elementos em ordem decrescente por idade ', people2);

  