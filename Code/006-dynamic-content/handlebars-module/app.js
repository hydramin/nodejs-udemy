const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin').Router;
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, "public")));

app.engine('handlebars', handlebars());
app.set('view engine','handlebars');
app.set('views', 'pages');

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);


app.use((req, res, next) => {
    res.render('404');
})

app.listen(8000);