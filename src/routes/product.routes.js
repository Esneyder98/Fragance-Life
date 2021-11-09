const express = require("express");
const router = express.Router();


const controller = require('../controllers/product.controller');


router.get('/detalleproducto', controller.detalle_producto);

router.get('/carritoDeCompras', controller.CarritoDeCompras);

router.get('/crearProducto', controller.crearNuevoProducto);

router.get('/editarProducto', controller.editarProducto);

module.exports = router;
