const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
// definir que archivos son publicos
const publicPath =path.resolve(__dirname,'public');
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.listen(port, () => console.log('listen in port 3000'))