const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

//Rutas

router.get('/', userAPIController.list);
//Detalle de una usuario
router.get('/:id', userAPIController.detail)

module.exports = router;