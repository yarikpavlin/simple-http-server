const http = require('http');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('End of the response.');
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`)
});