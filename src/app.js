const express = require('express');
const path = require('path');
const route = require('./router/index.routes.js');
const app = express();

app.use(express.static(path.resolve(__dirname,'../public')));
app.use('/',route);
app.set('view engine', 'ejs');


const port = process.env.PORT || 3000;
// definir que archivos son publicos
const publicPath =path.resolve(__dirname,'public');
app.use(express.static(publicPath));

app.listen(port, () => console.log('listen in port 3000'))