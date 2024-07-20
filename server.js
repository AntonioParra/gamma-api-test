const { createServer } = require('node:http')
const port = 3000;

const server = createServer((req, res) => {
  fetch('http://gamma-rp-internal:80/internal/email/sendEmail', {
    method: 'POST',
    body: JSON.stringify({
      to: '',
      subject: 'asunto asunto asunto',
      body: 'mensaje mensaje mensaje'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(data=>data.text()).then(data => {
    res.statusCode = 200
    res.end(JSON.stringify(data))
  }).catch(error => {
    res.statusCode = 500
    res.end(JSON.stringify(error.toString()))
  });
});

server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});