// Módulos
const path = require('path');
const express = require ('express');
const app = express();
const method = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userMiddleware = require('./middlewares/userMiddleware');


// Configuración y seteo de Server
app.use(express.static(path.resolve(__dirname,"../public")));
app.use(session({secret: 'lookingood', resave: false, saveUninitialized: true}));
app.use(cookies());

app.use(userMiddleware);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=> console.log("Server starts in http://localhost:" + app.get('port')));

// Template engine
app.set("view engine", "ejs");
app.set("views", (path.resolve(__dirname,"./views")));

app.use(express.urlencoded({ extended : false}));
app.use(method("_method"));
app.use(express.json());





// Rutas
app.use(require('./routes/mainRoute.js'));
app.use(require('./routes/userRoute.js'));
app.use(require('./routes/productRoute.js'));
app.use(require('./routes/cartRoute.js'));
app.use(require('././routes/api/productApiRoute.js'));
app.use(require('././routes/api/userApiRoute.js'));