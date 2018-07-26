const fs = require("fs");
const path = require("path");
const json = require("./obj.json");

function mainHandler(request, response) {
  fs.readFile(path.join(__dirname, "..", "public", "index.html"), function(
    error,
    file
  ) {
    if (error) {
      console.log(error);
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Ooops! Nothing here</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
}

function handlerPublic(request, response, url) {
  // const loc = path.join(__dirname, '..', url);
  // console.log({loc});
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
  };

  fs.readFile(path.join(__dirname, "..", url), function(error, file) {
    // const loc = path.join(__dirname, '..',  url);
    // console.log({loc});
    if (error) {
      console.log(error);
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Ooops! Nothing here</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
}

function dinoHandler(request, response, url) {
  //console.log("URL=" + url);
  var search = url.split("=")[1];
  var searchLen = search.length;
  //console.log(json);
  //console.log(search);
  var suggestionArr = [];
  var suggestionResult = [];
  //26 = letters of alphabets which are keys in the json object of dinosaur names
  var keys = Object.keys(json);
  //console.log(keys);
  for (var i = 0; i <= keys.length; i++) {
    if (search[0] === keys[i]) {
      //console.log(keys[i] + "yey");
      //console.log(json[keys[i]]);
      suggestionArr = json[keys[i]];
      for (var j = 0; j < suggestionArr.length; j++) {
        suggestionResult.push(suggestionArr[j].name);
      }
    }
  }
  console.log(suggestionResult);
  //response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(suggestionResult));
}

// console.log(path.join(__dirname, '/public/', url));

module.exports = {
  mainHandler,
  handlerPublic,
  dinoHandler
};
