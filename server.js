const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Define the path to the HTML file
  const filePath = path.join(__dirname, '/index.html');

  // Read the HTML file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If there's an error, send a 500 response
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      // If no error, send the HTML file
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

// Start the server and listen on the defined port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
