const express = require('express');
const router = express.Router();
const cors = require('cors');
const productAPIController = require('../../controllers/api/productAPIController');

//Rutas

router.get('/', cors(), productAPIController.list);

//detalle de un producto
router.get('/:id', cors(), productAPIController.detail);

module.exports = router;