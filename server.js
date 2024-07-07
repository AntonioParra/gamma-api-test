const { createServer } = require('node:http');
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});