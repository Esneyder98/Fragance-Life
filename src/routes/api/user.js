const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

//Rutas

router.get('/', userAPIController.list);


module.exports = router;