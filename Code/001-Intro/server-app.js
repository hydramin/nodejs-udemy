const http  = require("http");

function reqHandler(httpRequest, httpResponse) {
    console.log(httpRequest);
}

const server = http.createServer(reqHandler);

server.listen(8000);