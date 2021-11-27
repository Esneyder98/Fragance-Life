const express = require("express");
const router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/listaProductos', controller.getProducts);

router.get('/detalleproducto', controller.detalle_producto);

router.get('/carritoDeCompras', controller.CarritoDeCompras);

router.get('/crearProducto', controller.crearNuevoProducto);

router.get('/editarProducto', controller.editarProducto);

router.get('/productsMen',controller.getProductsMen);

router.get('/productsWomen',controller.getProductsWomen);

router.get('/editarProducto/:idProducto/editar', controller.editarProducto);

router.put('/editarProducto/:idProducto', controller.productoEditado);

module.exports = router;
