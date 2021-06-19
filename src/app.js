const path = require('path');
const express = require ('express');
const app = express();

app.use(express.static(path.resolve(__dirname,"../public")))
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), ()=> console.log("Server starts in http://localhost:" + app.get('port')))

app.set("view engine", "ejs");
app.set("views", (path.resolve(__dirname,"./views")));

const home = require('./routes/mainRoute.js')
app.use(home)

const register = require('./routes/mainRoute.js')
app.use(register)

const login = require('./routes/mainRoute.js')
app.use(login)

const product = require('./routes/mainRoute.js')
app.use(product)

const productCart = require('./routes/mainRoute.js')
app.use(productCart)

const productDetail = require('./routes/mainRoute.js')
app.use(productDetail)