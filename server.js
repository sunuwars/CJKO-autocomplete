const http = require('http')
const port = 3000

const message = 'All working so far :D';

function mainHandler (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(message);
  response.end();
}

const server = http.createServer(mainHandler)

server.listen(port, () => {
  console.log(`server is listening on ${port}`)
})