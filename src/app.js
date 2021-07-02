// Módulos
const path = require('path');
const express = require ('express');
const app = express();
const method = require('method-override');


// Configuración y seteo de Server
app.use(express.static(path.resolve(__dirname,"../public")))


app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), ()=> console.log("Server starts in http://localhost:" + app.get('port')))

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
