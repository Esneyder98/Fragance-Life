const express = require("express");
const router = express.Router();


const { body } = require('express-validator');
const path = require('path');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const guestMideleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddleware');
// const adminMiddleware = require('../middlewares/adminMiddleware');

const validaciones = [
    body('document').notEmpty().withMessage('¡Debes ingresar un numero de documento!'),
    body('names').notEmpty().withMessage('¡Debes ingresar al menos un nombre!'),
    body('surnames').notEmpty().withMessage('¡Debes ingresar al menos un apellido!'),
    body('email').isEmail().withMessage('¡Debes ingresar un email valido!'),
    body('password').notEmpty().withMessage('¡Debes ingresar una contraseña!'),
    body('confirmpassword').notEmpty().withMessage('¡Debes ingresar una contraseña!'),
    body('category').notEmpty().withMessage('¡Debes ingresar una categoria!')
];

const userController = require('../controllers/user.controller');


router.get('/register',guestMideleware, userController.register);
router.post('/register', uploadFile.single('avatar'), validaciones, userController.processRegister);

router.get('/login',guestMideleware, userController.login);
router.post('/login', userController.loginProcess);


// Perfil de Usuario
router.get('/profile', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);

module.exports = router;