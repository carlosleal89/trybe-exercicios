// 5 - Crie um array de objetos e calcule a média de notas. 
//Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// const expectedResult = [
//  { name: 'Pedro Henrique', average: 7.8 },
//  { name: 'Miguel', average: 9.2 },
//  { name: 'Maria Clara', average: 8.8 },
// ];

const studentAverage = () => {
  return students.map((name, i) => ({
    name: name,
    average: grades[i].reduce((acc, curr) => (acc + curr / grades[i].length), 0).toFixed(1),
  }))
}
/*grades é um array de arrays. para especificar em qual array dentro de grades o reduce vai iterar, se usar o parametro
index do map. nesse caso é possivel pq students e grades tem o mesmo tamanho*/

console.log(studentAverage());