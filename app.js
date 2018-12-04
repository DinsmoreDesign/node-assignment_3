const http = require('http');
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

});

server.on('request', homeRoute);
server.on('request', usersRoute);

server.listen(3000, () => console.log('Server listening on localhost:3000.'));