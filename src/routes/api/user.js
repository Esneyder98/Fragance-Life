const express = require('express');
const router = express.Router();
const cors = require('cors');
const userAPIController = require('../../controllers/api/userAPIController');
const paginationUserController = require('../../controllers/api/paginationUserController');

//Rutas

router.get('/', cors(), userAPIController.list);
//Detalle de una usuario
router.get('/:id', cors(), userAPIController.detail)

//paginacion de usuarios
router.get('/paginationUsers/:page', paginationUserController.paginationUsers);

module.exports = router;