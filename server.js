const http = require('http');
const app = require('./app'); // Corrected require statement

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);