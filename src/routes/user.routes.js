const express = require("express");
const router = express.Router();


const { body } = require('express-validator');
const path = require('path');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const guestMideleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const buyerMiddleware = require('../middlewares/buyerMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const validationLogin = require('../middlewares/validationLogin');
const validationRegister = require('../middlewares/validationRegister')
const validationEdit = require('../middlewares/validationEdit')

const userController = require('../controllers/user.controller');


router.get('/register',guestMideleware, userController.register);
router.post('/register', uploadFile.single('avatar'), validationRegister, userController.processRegister);

router.get('/login',guestMideleware, userController.login);
router.post('/login', validationLogin , userController.loginProcess);

// Perfil de Usuario
router.get('/profile',authMiddleware, userController.profile);

//Logout
router.get('/logout/', userController.logout);

//Edicion de Usuarios
router.get('/profile/edit/:id',  userController.edit)
router.post('/profile/edit/:id',uploadFile.single('avatar'), validationEdit, userController.processEdit)

module.exports = router;