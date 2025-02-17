const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the response hangs
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});