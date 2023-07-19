const app = require('./app');

const server = app.listen(3001, () => console.log('Server running on 3001'));

server.on('error', (error) => console.error('An error has ocorrured', error.message));