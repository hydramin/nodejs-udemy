const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const insert = require("./routes/insert");
const search = require("./routes/search");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/insert", insert);
app.use("/search", search);

app.use("/", (req, res, next) => {
    return res.send(" <h1>404 NO PAGE AVAILABLE</h1> ");
});


app.listen(8080);