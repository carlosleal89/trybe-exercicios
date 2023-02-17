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

function addKeyValue(object, key, value) {
    return object[key] = value;
}

addKeyValue(lesson2, 'turno', 'noite');
console.log(lesson2);

function listKeys(object) {
    return Object.keys(object)
}
console.log(listKeys(lesson2));

function objectLength(object) {
    return Object.keys(object).length; //retornar o tamanho do objeto
}

console.log(objectLength(lesson2));

function listValues(object) {
    return Object.values(object);
}

console.log(listValues(lesson3));

const allLessons = Object.assign({}, {
    lesson1,
    lesson2,
    lesson3
});

console.log(allLessons);

const totalStudents = () => {
    const lessons1 = allLessons.lesson1['numeroEstudantes'];
    const lessons2 = allLessons.lesson2['numeroEstudantes'];
    const lessons3 = allLessons.lesson3['numeroEstudantes'];
    return `O total de estudantes é ${lessons1 + lessons2 + lessons3}`;
}

console.log(totalStudents());