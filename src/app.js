const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');

const mainRoutes = require("./routes/main.routes");
const productsRoutes = require("./routes/product.routes");
const usersRoutes = require("./routes/user.routes");

const app = express();

app.use(express.static(path.resolve(__dirname,'../public')));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());  

app.set('views',path.resolve(__dirname,'./views'))
app.set('view engine', 'ejs');


app.use('/',mainRoutes);
app.use('/products', productsRoutes)
app.use('/user',usersRoutes)

// definir que archivos son publicos
const publicPath =path.resolve(__dirname,'public');
 app.use(express.static(publicPath));

app.listen(port, () =>console.log(`server is listening on ${port}`));