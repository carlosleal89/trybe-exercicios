function createEmail(name) {
    const email = name.toLowerCase().replace(' ', '_'); // passa para minusculo e troca o espaço por underline;
    return `${email}@trybe.com`
}

const newEmployees = (functionQueRetornaOsDados) => {
    const employees = {
      id1: functionQueRetornaOsDados('Pedro Guerra'), 
      id2: functionQueRetornaOsDados('Luiza Drumond'),
      id3: functionQueRetornaOsDados('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(createEmail));