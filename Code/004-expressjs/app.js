const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin').Router;
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, "public")))

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);


app.use((req, res, next) => {
    res.sendFile(require('path').join(rootDir,'pages',"404.html"))
})

app.listen(8000);