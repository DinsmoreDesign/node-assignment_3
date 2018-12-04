const http = require('http');
const homeRoute = require('./routes/Home');
const usersRoute = require('./routes/Users');
const createRoute = require('./routes/CreateUser');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

});

server.on('request', homeRoute);
server.on('request', usersRoute);
server.on('request', createRoute);

server.listen(3000, () => console.log('Server listening on localhost:3000.'));