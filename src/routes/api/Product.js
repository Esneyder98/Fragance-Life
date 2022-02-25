const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

//Rutas

router.get('/', productAPIController.list);

//detalle de un producto
router.get('/:id', productAPIController.detail);

module.exports = router;