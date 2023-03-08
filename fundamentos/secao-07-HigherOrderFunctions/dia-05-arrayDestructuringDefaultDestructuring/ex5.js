// Usando array destructuring, armazene cada nome presente na variável moreStudents em variáveis separadas:

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [student1, [student2, student3], [student4, student5]] = moreStudents;
  //visto que existem arrays dentro do array, se usa os colchetes para especificar que o nome das variaveis sera
  //para os elementos dentro desses arrays

console.log(student1, student2, student3, student4, student5);