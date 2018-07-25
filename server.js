const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000

function mainHandler (request, response) {
    fs.readFile(path.join(__dirname, 'public','index.html'), function(error, file) {
      if (error) {
        console.log(error);
        response.writeHead(500, 'Content-Type: text/html');
        response.end('<h1>Ooops! Nothing here</h1>');
      } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(file);
      }
    })
}

const server = http.createServer(mainHandler)

server.listen(port, () => {
  console.log(`server is listening on ${port}`)
})