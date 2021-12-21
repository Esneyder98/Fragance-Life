const express = require("express");
const router = express.Router();
const multer = require('multer');
const guestMideleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddleware');

const { body } = require('express-validator');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, '../../public/img/userImages'));
    },
    filename: (req, file, callback) => {
        console.log(file);
        let imageName = "imageUser" + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

let fileUpload = multer({storage});
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



router.get('/login',guestMideleware, userController.login);
router.post('/login', userController.loginProcess);

router.get('/register',guestMideleware, userController.register);
router.post('/register', fileUpload.single('avatar'), validaciones, userController.afterRegister);



module.exports = router;