const { body } = require('express-validator');
const bcryptjs = require('bcryptjs')

const validationLogin = [
    body('email')
    .notEmpty()
    .isEmail()
    .withMessage('¡Debes ingresar un email valido!'),
    body('passsword')
    .notEmpty()
    .withMessage('¡Debes ingresar una contraseña válida')
]

module.exports = validationLogin;