"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("./routes/admin");
const shop_1 = require("./routes/shop");
const path_1 = __importDefault(require("path"));
const app = express_1.default();
let p = path_1.default.dirname(process.mainModule.filename);
app.use(express_1.default.static(path_1.default.join(p, '..', 'static')));
app.use('/admin', admin_1.adminRoute);
app.use('/shop', shop_1.shopRouter);
app.use('/', (req, res) => {
    res.render('home');
});
app.set('view engine', 'pug');
app.set('views', 'src/views');
app.listen(8000, (err) => {
    console.log('listening on http://localhost:8000');
});
//# sourceMappingURL=app.js.map