const http = require('http');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

const server = http.createServer((req, res) => {
    switch(req.url){
        case '/sayhello':
            res.writeHead(200);
            res.end('Hello World!');
            break;
        case '/geterror':
            res.writeHead(500);
            res.end('Ooops, error on server side..');
            break;
        default:
            res.writeHead(200);
            res.end(`I just dumb server. Try /sayhello or /geterror routes`);
            break;
    }
});

// Logging Interceptor
server.on('request', (req, res) => {
    console.log(`${req.method} ${req.url} ${res.statusCode} ${res.statusMessage}`);
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`)
});