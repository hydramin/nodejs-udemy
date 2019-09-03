#Node JS

- It is a javascript runtime. JS is used to manipulate the DOM in the browser. NodeJs is built on js and puts it in a different environment ie server.
- we can run js outside of the browser. The js engine is called V8. The engine takes js and compiles it to machine code and runs it. it allows to process files which js cant do on the browser.
- nodejs cant interact with the DOM. 

- create a new js file and run this

```js
    console.log("Hello from nodejs");
```

or try
```js
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
```
We can create a server that stands as a middle-man to access services like database, authentication and stuff.

We can use utility scripts that is used in Angular, React and non server-side language.

It can be used to run a server, it listens and executes code.

We can use it to run our business logic: handle requests, validate input, connect db

We can render responses, html, json, ...

Alternative to Node are python, ASP.NET, Ruby on Rails, php, ...

Node uses js and it gives it an advantage.

Course Outline:
    - JS refresher
    - NodeJs basics: data streams
    - Development: error handlers
    - Express.js
    - Templating Engines
    - MVC pattern
    - Advanced Routing and Models
    - Databases: MySQL, Sequelize
    - NoSql DB: Mongoose
    - Sessions and Cookies
    - Auth
    - Sending emails
    - Authorization
    - user input validation
    - Error Handling for user entries
    - File up/down loads, auto generate pdfs
    - pagination: data serving in chunks
    - Async requists
    - Handling payments: with stripe
    - REST Apis
    - Advanced REST api
    - using async, await features 
    - Websockets and Socket.io
    - GraphQL api: for building apis
    - Deploy node app in the web, ssl encryption
    - non web nodejs
    - End of NodeJs

**Running node code**
- write node in the terminal, run node code immediately, for playground. REBL
- execute files and execute them from the cmd line

**js refresher**
 
