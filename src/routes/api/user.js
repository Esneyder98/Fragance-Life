const express = require('express');
const router = express.Router();
const cors = require('cors');
const userAPIController = require('../../controllers/api/userAPIController');

//Rutas

router.get('/', cors(), userAPIController.list);
//Detalle de una usuario
router.get('/:id', cors(), userAPIController.detail)

module.exports = router;