const { mainHandler, handlerPublic, dinoHandler } = require("./handlers.js");

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    mainHandler(request, response);
  } else if (url.indexOf("/public/") !== -1) {
    handlerPublic(request, response, url);
  } else if (url.indexOf("?search=") !== -1) {
    dinoHandler(request, response, url);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>Oops. You're at 404!</h1>");
  }
};

module.exports = router;
