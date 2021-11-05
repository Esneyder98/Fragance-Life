const express = require("express");
const router = express.Router();


const controller = require('../controller/index.controller');


router.get('/', controller.index);

router.get('/detalleproducto', controller.detalle_producto);

router.get('/CarritoDeCompras', controller.CarritoDeCompras);

router.get('/login', controller.login);

router.get('/register', controller.register);

/*
router.get('/detalle_producto',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/detalle_producto.html'))
})

router.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

router.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

router.get('/CarritoDeCompras',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/CarritoDeCompras.html'))
})
*/

module.exports = router;
