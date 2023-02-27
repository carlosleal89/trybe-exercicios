const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  function newKey(object, key, value) {
    return object[key] = value;
  }

  console.log(newKey(lesson2, 'turno', 'noite'));
  console.log(lesson2);

  // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  function objKey(object) {
    return Object.keys(object);
  }

  console.log(objKey(lesson2));

  // Crie uma função para mostrar o tamanho de um objeto.

  function objLength(object) {
    return Object.keys(object).length;
  }

  console.log(objLength(lesson2));

  // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

  function objValues (object) {
    return Object.values(object);
  }

  console.log(objValues(lesson2));

  // Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); // cria um objeto de objetos
  console.log(allLessons);

  // Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

  function totalStudents() {
    let quantEstudantes = 0;
    const objKeys = Object.keys(allLessons);
    for (let key of objKeys) {
        quantEstudantes += allLessons[key].numeroEstudantes;
    }
    return `O numero de estudantes é ${quantEstudantes}`;
  }

  console.log(totalStudents());

  // Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

  function getValue(object, index) {
    const objValues = Object.values(object);
    return objValues[index];
  }

  console.log(getValue(lesson1, 1));

  // Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:

  function verifyPair(obj, key, value) {
    const objEntries = Object.entries(obj);
    console.log(objEntries);
    let entries = false;
    for (let entrie of objEntries) {
        console.log(entrie);
        if (entrie[0] === key && entrie[1] === value) {
            entries = true;
        }
    }
    return entries;
  }

  console.log(verifyPair(lesson3, 'turno', 'manhã'));

  // Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

  console.log(allLessons);
  
  function lessonCounter(object) {
    const objKeys = Object.keys(allLessons);    
    let count = 0;    
    for (let obj of objKeys) {
      if (object[obj].materia === 'Matemática') {
        count += object[obj].numeroEstudantes;
      }
    }
    return count;
  }

  console.log(lessonCounter(allLessons));

  // Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

  function getInfo(object, teacher) {
    const objKeys = Object.keys(object);
    const lessons = [];
    let quantEstudantes = 0;
    for (i in objKeys) {
        console.log(object[objKeys[i]].professor)
        if (object[objKeys[i]].professor === teacher) {
        lessons.push(object[objKeys[i]].materia);
        quantEstudantes += object[objKeys[i]].numeroEstudantes;
    }
}
    return { aulas: lessons, estudantes: quantEstudantes };  
}
  function createReport(object, teacher) {
    const newReport = {};
    newReport.name = teacher;
    return Object.assign(newReport, getInfo(object, teacher))
  }

  console.log(createReport(allLessons, 'Maria Clara'));
