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

module.exports = {
    readData,
};