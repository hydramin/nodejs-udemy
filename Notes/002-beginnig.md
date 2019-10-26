**Course Content**

- How web works,
- Create node server
- Using node core modules
- Using Request and Responses
- Async code and Event loop of node js

**How the Web works**

- client send a request, or url
- the Domain Lookup resolves it and sends it to the server
- the server contains the code we write and our code serves the appropriate response.
- The data transfer uses a protocol: http or https (http with ssl encryption)
- The core node modules are
    http, https : http response or request hanling
    fs
    path : path to files
    os
**creating node server**
create server.js or app.js

```js
const http = require("http");
//require(./http) would look for a local http.js file

const server = http.createServer(requestListnerFunction); 
    // request listner function recieves the request and processes it
    // it creates a server
function requestListnerFunction(httpRequest, httpResponse) {
    console.log(httpRequest);
}

server.listen(8080);

```