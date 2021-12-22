const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');

const path = require('path');
const methodOverride = require('method-override');
const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());

app.use(userLoggedMiddleware);

const port = process.env.PORT || 3000;
//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.set('views',path.resolve(__dirname,'./views'))
//Debemos indicar cual es el motor de plantillas que estamos usando EJS
app.set('view engine','ejs');
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride('_method'));
//Requerir las rutas
const mainRoutes = require("./routes/main.routes");
const productsRoutes = require("./routes/product.routes");
const usersRoutes = require("./routes/user.routes");
//Para usar las rutas
app.use('/',mainRoutes);
app.use('/products', productsRoutes)
app.use('/user',usersRoutes)

// definir que archivos son publicos
const publicPath =path.resolve(__dirname,'public');
 app.use(express.static(publicPath));



app.listen(port, () =>console.log(`server is listening on ${port}`));