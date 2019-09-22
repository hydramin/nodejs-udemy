require('http').createServer((req,res)=>{
    res.write("<h1>This is a good life.</h1>");
    res.end("hello world");
}).listen(8000);