const express = require("express");
const guestMideleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddleware');
const buyerMiddleware = require('../middlewares/buyerMiddleware');
const router = express.Router();
const path = require('path');
const multer= require('multer')
const {body} = require('express-validator')
const controller = require('../controllers/product.controller');
const validateCreateForm = require('../middlewares/validateCreateForm')
const validateEditForm = require('../middlewares/validateEditForm')
const storage = multer.diskStorage({
	destination : function(req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/img/Perfumes'))
	},
	filename : function(req, file, cb){
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
}
);
const uploadFile = multer({ storage });


//router.get('/detalleproducto', controller.detalle_producto);


router.get('/listaProductos', buyerMiddleware,controller.getProducts);


router.get('/carritoDeCompras', controller.CarritoDeCompras);

router.get('/crearProducto',buyerMiddleware,authMiddleware, controller.crearNuevoProducto);
router.post('/crearProducto',uploadFile.single('imagenProducto'),validateCreateForm, controller.storee);

/*** GET ONE PRODUCT detail ***/
router.get('/detalle/:id',controller.detail);

router.get('/editarProducto',buyerMiddleware,authMiddleware, controller.editarProducto);

router.get('/productsMen',controller.getProductsMen);

router.get('/productsWomen',controller.getProductsWomen);

router.get('/productsBrand',controller.getProductsBrand);

router.get('/productsSmellFamily',controller.getProductsSmellFamily);

// router.get('/editarProducto/:idProducto/editar',authMiddleware, controller.editarProducto);

router.get('/editarProducto/:idProducto/editar', buyerMiddleware,authMiddleware, controller.editarProducto);

router.put('/editarProducto/:idProducto', validateEditForm,controller.productoEditado);

router.get('/eliminar/:idProducto',authMiddleware, controller.deleteProduct);

router.get('/administrar',buyerMiddleware,authMiddleware, controller.administrar);

router.get('/promotion', controller.promotion);

router.post('/busqueda', controller.searchProductname);

module.exports = router;
