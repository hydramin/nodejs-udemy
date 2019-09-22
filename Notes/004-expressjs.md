# Why ExpressJS
- it simplifies development, we dont have to reinvent the wheel.
- it eastablishes a framework: how to organize our code and a bunch of libraries
- Alternatives: Vanila NodeJS, AdonisJS, Koa, SailsJS, ...
- npm i --save express
```js
const http  = require('http');
const express = require('express');

const app = express();

app.use((req, res, next)=> {
    res.write("<h1>First middleware</h1>");
    next();
    // next has to be called to allow the http req, res objects to pass onto the next middleware
})

app.use((req, res, next)=> {
    res.end("<h2>The message has ended</h2>");
})

const server = http.createServer(app);

server.listen(8000);
```

- express is a middleware. MiddleWare is like an interceptor between a request and the response.

- instead of using *res.write* and *res.end()* we can simply use **res.send()** for sending back responses.

- since express handles the server creation and listening on its own we can remove the http import and server listning codes.

```js
const express = require('express');

const app = express();

app.use((req, res, next)=> {
    res.send("<h2>The message has ended</h2>");
})

app.listen(8000);
```

- the order of the express middlewares matters, the /route has to come last since 

# Parsing incomming requests
- install body parser and add this above all the other app.use() commands. This is so that the body is parsed before it is passed on to the next middleware
```js
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
```
app.use is for get requests, we can specifically write post and get requests separately using 
app.get() and app.post()

# Spread routing to multiple files
- under routes folder create shop.js
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1> This is the shop </h1><br>\
              <a href="/add-product">Add product</a>');
})

module.exports = router;
```
- Then in the app.js
```js
//add this
const shopRoute = require('./routes/shop');
app.use(shopRoute);
```

- app.get and .post find the exact route match unlike app.use ('/')which says find a route that starts with ... /

# Filterning paths based on a start path
- simply add the filter path :
    app.use('/admin',adminRoute);
# HTML pages
- instead of creating the html pages inside node, we can create them separately and serve the html file.
- for this we can use app.sendFile('absolute-path-of-the-file')
- to generate the absolute path we use the path module, this module, despite the OS type we are running on, it generates the path.
```js
router.post("/product", (req, res, next)=> {        
    
    const filePath = path.join(__dirname,'..','pages','displayProduct.html');    
    
    res.sendFile(filePath, (err)=>{
        if (err) {
            console.log(err);            
        } else {
            console.log("file sent");
        }
    })
})
```

# Helper function for navigation and path construction
- export this module
```js
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
// returns the directory of the file that is the entry point of the application, app.js, ie root directory of the process
```
- and call it whenever needed

```js
const rootDir = require('../util/path');

  const filePath = path.join(rootDir,'pages','displayProduct.html');    
```

# Serving files statically
- we use the express.static(root-directory of the folder) method
- we keep js and css files in here