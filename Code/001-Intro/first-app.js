const fs = require('fs');

const msg = "Hello World from nodejs";

if (!fs.existsSync("temp")) {
    fs.mkdirSync("temp");
}

fs.writeFileSync("temp/hello.txt", msg);

setTimeout(() => {
    const hello = fs.readFileSync("temp/hello.txt");
    let newmsg = hello.toString();
    console.log("==> ", newmsg);
}, 3000);

console.log("Hello from node js");