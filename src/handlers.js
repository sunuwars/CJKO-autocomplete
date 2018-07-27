const fs = require("fs");
const path = require("path");
const json = require("./obj.json");
const filterDinos = require("./dino-search.js");

function mainHandler(request, response) {
  fs.readFile(path.join(__dirname, "..", "public", "index.html"), function(
    error,
    file
  ) {
    if (error) {
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Ooops! Nothing here</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
}

function publicHandler(request, response, url) {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
  };

  fs.readFile(path.join(__dirname, "..", url), function(error, file) {
    if (error) {
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Ooops! Nothing here</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
}

function dinoHandler(request, response, url) {
  let suggestionResult = filterDinos(url);
  response.end(JSON.stringify(suggestionResult));
}

module.exports = {
  mainHandler,
  publicHandler,
  dinoHandler
};
