const express = require('express');
const router = express.Router();
const cors = require('cors');
const productAPIController = require('../../controllers/api/productAPIController');
const paginationProductController = require('../../controllers/api/paginationProductController');
//Rutas

router.get('/', cors(), productAPIController.list);

//detalle de un producto
router.get('/:id', cors(), productAPIController.detail);

//paginacion de productos:
router.get('/paginationProducts/:page', cors(),paginationProductController.paginationProducts);

module.exports = router;