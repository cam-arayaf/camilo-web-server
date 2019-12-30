const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify({ name: 'Camilo', age: 27, url: req.url }));
    resp.end();
}).listen(8080);

console.log('Port: 8080');