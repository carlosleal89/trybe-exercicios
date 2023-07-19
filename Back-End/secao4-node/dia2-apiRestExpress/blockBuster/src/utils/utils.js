const { readFile, writeFile } = require('fs').promises;
const path = require('path');

async function readData(filePathName) {
    try {
        const response = await readFile(path.resolve(__dirname, filePathName));
        const data = JSON.parse(response);
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

async function writeData(file, filePathName) {
    try {
        await writeFile(path.resolve(__dirname, filePathName), JSON.stringify(file));
    } catch (error) {
        console.error('ocorreu um erro ao inserir os dados', error.message);
    }
}

module.exports = {
    readData,
    writeData,
};