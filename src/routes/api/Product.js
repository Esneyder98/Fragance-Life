const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

//Rutas

router.get('/', productAPIController.list);


module.exports = router;