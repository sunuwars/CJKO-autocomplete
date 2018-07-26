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
            response.writeHead(
                200,
                `Content-Type: ${extensionType[extension]}`
            );
            response.end(file);
        }
    });
}

function dinoHandler(request, response, url) {
    //console.log("URL=" + url);
    let suggestionResult = filterDinos(url);

    response.end(JSON.stringify(suggestionResult));
}

module.exports = {
    mainHandler,
    handlerPublic,
    dinoHandler
};
