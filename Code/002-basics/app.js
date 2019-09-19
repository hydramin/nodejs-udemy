const http = require("http");
const fs = require("fs");
const util = require("util");
const parser = require("./parser").parser;

const server = http.createServer(
    function(req, res) {
        
        if(req.url === "/" && req.method === "GET") { // Home page
    
            res.write("<!DOCTYPE html>");
            res.write("<html>");
            res.write("<head>");
            res.write("<title>Home</title>");
            res.write("</head>");
            res.write("<body>");
            res.write("<h1>This is HomePage</h1>");
            res.write("<hr>");
            res.write("<form method=\"POST\">");

            res.write("<label for=\"fname\">Name</label><br>");
            res.write("<input type=\"text\" name=\"fname\"/><br>");
            res.write("<label for=\"fname\">School</label><br>");
            res.write("<input type=\"text\" name=\"school\"/><br>");
    
            res.write("<input type=\"submit\" name=\"submit\"/>");
            res.write("</form>");
            res.write("<div id=\"test\">");
            res.write("</div>");

            res.write("<script>");
            res.write("var doc = document.getElementById(\"test\");");
            res.write("doc.innerText= \"Hello User\";");
            res.write("doc.style.backgroundColor= \"orange\";");
            res.write("</script>");
            res.write("</body>");
            res.write("</html>");
            res.end();
        } else if(req.url === "/"&& req.method === "POST") {        
            parser.parser(req);
            console.log(util.inspect(parser.prototype));
            
            parser.on('body', (body) => {
                res.end(util.inspect(body));
            })
            
        } else {
            res.end("404");
        }
        
    }
);

server.listen(8000);