# Understanding the Basics of NodeJS

- The http.Server.listen() triggers an event loop and it keeps listening for requests.
    - the function we passed into .createServer() fuction is the event listner registered.
    - whenever the 'request' event is triggered the event listner registered is triggered.
    - node is a single threaded js runtime

```js
const http = require("http");

var reqHandler = function(req, res) {
    console.log(req.url);
}

var someFunction = function() {
    console.log("==> Hello World");
    
}

const server = http.createServer(reqHandler);
server.on("connection", someFuction) // for every onnection it triggers the function passed

server.listen(8000);
```

to send responses 
```js
reqHandler = function(req, res) {
    res.writeHead("application/json");
    res.setHeader('Content-Type','text/html');
    res.write(
        "
        <http><body><h1>Hello World!</h1></body></http>
        "
    );
    res.end(); // cannot .write after .end
}
```
# Routing requests
- in the server callback function we add if statements and based on the url we render a page.
```js
if(req.url === "/") { // Home page

        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Home</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>This is HomePage</h1>");
        res.write("<hr>");
        res.write("<form action=\"/welcome\" method=\"POST\">");
        res.write("<label for=\"fname\">Name</label><br>");
        res.write("<input type=\"text\" name=\"fname\"><br>");
        res.write("<input type=\"submit\" name=\"submit\"/>");
        res.write("</form>");
        res.write("<div id=\"test\">");
        res.write("</div>");
        res.write("<script>");
        res.write("var doc = document.getElementById(\"test\");");
        res.write("doc.innerText= \"Hello User\";");
        res.write("doc.style.backgroundColor= \"black\";");
        res.write("</script>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else if(req.url === "/welcome"&& req.method === "POST") {
        res.write("this is welome page")
        res.end();
    } else {
        res.end();
    }
```
- A post requiest sends a body and it doesn't add request params to the url. Node request object does not contain the actual body but it represents it as a Stream or Buffer. We must take this data stream and convert it to our body.
```js
//register callbacks to fetch the streams of data
    const stream = [];
    req.on("data", (chunk) => {
        stream.push(chunk);        
    })

    const body = {};

    req.on("end", () => {
        const buff = Buffer.concat(stream).toString(); 

        // any code dependent on the buff variable, it should move into the async code
    }
```
