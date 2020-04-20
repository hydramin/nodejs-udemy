import express from "express";
import { Request, Response } from "express";
import { adminRoute } from "./routes/admin";
import { shopRouter } from "./routes/shop";
import path from "path";


const app = express();

let p = path.dirname(process.mainModule.filename)
app.use(express.static(path.join(p, '..', 'static')));

app.use('/admin', adminRoute);
app.use('/shop', shopRouter);
app.use('/', (req, res)=> {
    res.render('home');
});

app.set('view engine', 'pug');
app.set('views', 'src/views')

app.listen(8000, (err) => {
    console.log('listening on http://localhost:8000');
})