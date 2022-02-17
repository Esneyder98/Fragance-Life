const { body } = require('express-validator');

const validationRegister = [
    body('document')
        .notEmpty()
        .withMessage('¡Debes ingresar un numero de documento!')
        .isLength({min: 5}),
    body('names')
        .notEmpty()
        .withMessage('¡Debes ingresar al menos un nombre!')
        .isLength({min: 2}),
    body('surnames')
        .notEmpty()
        .withMessage('¡Debes ingresar al menos un apellido!')
        .isLength({min: 2}),
    body('email')
        .isEmail()
        .withMessage('¡Debes ingresar un email valido!'),
    body('password')
        .notEmpty()
        .withMessage('¡Debes ingresar una contraseña valida!').bail()
        .isLength({min: 8}).withMessage('Debe ingresar al menos 8 caracteres'),
    body('confirmpassword')
        .notEmpty()
        .withMessage('¡Debes ingresar una contraseña valida!').bail()
        .isLength({min: 8}).withMessage('Debe ingresar al menos 8 caracteres'),
    body('category')
        .notEmpty() 
        .withMessage('¡Debes ingresar una categoria!')
];

module.exports = validationRegister;