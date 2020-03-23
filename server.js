
const http = require('http');
const port = process.env.port || 8090;
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const template = fs.readFileSync('./index.html');
    res.end(template);
});

server.listen(port);

