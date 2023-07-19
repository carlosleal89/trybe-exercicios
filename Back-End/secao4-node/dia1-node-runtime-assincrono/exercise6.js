const { readFile, writeFile } = require('fs').promises;
const path = require('path');

async function readData() {
  try {
    const response = await readFile(path.resolve(__dirname, './simpsons.json'));
    const data = JSON.parse(response);
    return data;
  } catch(error) {
    console.log(error.message);
  }
};

async function printData() {
  try {
    const simpsonsData = await readData();
    simpsonsData.map((char) => console.log(`${char.id} - ${char.name}`) );
  } catch(error) {
      console.log('Ocorreu o erro: ', error);
  }
}

async function printDataById(id) {
  try {
    const simpsonsData = await readData();
    const char = simpsonsData.find((char) => char.id === id);
    if (char === undefined) {
      throw new Error('id invalido')
    } else console.log(`${char.id} - ${char.name}`);
    } catch(error) {
      console.log(error.message);
  }
}

async function removeDataEntries() {
  try {
    const simpsonsData = await readData();
    const newData = simpsonsData.filter(({ id }) => id !== '6' && id !== '10');
    await writeFile('./simpsons.json', JSON.stringify(newData));
    //console.log(simpsonsData);
  } catch(error) {
    console.log('ocorreu um erro', error.message);
  }
}

async function createNewFile() {
  try {
    const simpsonsData = await readData();
    const newData = simpsonsData.filter(({ id }) => id <= '4');
    await writeFile('./simpsonsFamily.json', JSON.stringify(newData));
  } catch(error) {
    console.log('ocorreu um erro', error.message);
  }
}

async function addNewCharacter() {
  try {
    const response = await readFile(path.resolve(__dirname, './simpsonsFamily.json'));
    const data = JSON.parse(response);
    const newData = [...data, { id: '5', name: 'Nelson Muntz'}]
    await writeFile('./simpsonsFamily.json', JSON.stringify(newData));
  } catch(error) {
    console.log('ocorreu um erro', error.message);
  }
}

async function replaceCharacter() {
  try {
    const response = await readFile(path.resolve(__dirname, './simpsonsFamily.json'));
    const data = JSON.parse(response);
    data.forEach((char) => {
      if (char.name === 'Nelson Muntz') {
        char.name = 'Maggie Simpson'
      }      
    })
    await writeFile('./simpsonsFamily.json', JSON.stringify(data));
  } catch(error) {
    console.log('ocorreu um erro', error.message);
  }
}

// async function run() {
  //   await removeDataEntries(); // Aguarda a remoção dos registros antes de prosseguir
  //   printData(); // Chama a função printData() após a remoção e exibe o arquivo ja editado
  // }
  
  // run(); // Executa o conjunto de operações de forma assíncrona
  
  //printDataById('5');
  //removeDataEntries();
  //printData();
  //createNewFile();
  //addNewCharacter();
  replaceCharacter();




