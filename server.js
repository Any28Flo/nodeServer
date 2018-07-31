var http = require("http");
// Provee métodos que nos permiten extraer las partes de una URL
var url = require("url");
// Puede ser usado para parsear el string de consulta con los parámetros requeridos
// var querystring = require("querystring")

function start(route, handle) {
function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
route(handle, pathname, response, request);
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}
exports.start = start;



exports.start = start;
