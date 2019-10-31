const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin').Router;
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');
const db = require('./database/db');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, "public")))

app.use('/admin',adminRoute); // can add products
app.use('/shop',shopRoute); // displays products set for purchase

app.set("view engine", "pug");
app.set("views","views/pug");


app.use((req, res, next) => {
    res.render('404');
})

app.listen(8000);