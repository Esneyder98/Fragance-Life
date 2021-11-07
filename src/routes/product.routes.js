const express = require("express");
const router = express.Router();


const controller = require('../controllers/product.controller');


router.get('/detalleproducto', controller.detalle_producto);

router.get('/carritoDeCompras', controller.CarritoDeCompras);

module.exports = router;