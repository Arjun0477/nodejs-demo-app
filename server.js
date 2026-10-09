const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! Node.js CI/CD Pipeline is working.');
  });
}

if (require.main === module) {
  createServer().listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
}

module.exports = { createServer };
