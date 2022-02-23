const { body } = require('express-validator');
const path = require('path');

const validationEdit = [
    body('document')
        .notEmpty()
        .withMessage('¡Debes ingresar un numero de documento!').bail()
        .isLength({min: 5}).withMessage('¡Debes ingresar minimo de 5 caracteres!'),
    body('names')
        .notEmpty()
        .withMessage('¡Debes ingresar al menos un nombre!').bail()
        .isLength({min: 2}).withMessage('¡Debes ingresar minimo de 2 caracteres!'),
    body('surnames')
        .notEmpty()
        .withMessage('¡Debes ingresar al menos un apellido!').bail()
        .isLength({min: 2}).withMessage('¡Debes ingresar minimo de 2 caracteres!'),
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
        .withMessage('¡Debes ingresar una categoria!'),
        body('avatar')
        .custom((value,{req}) =>{
            let file = req.file
            if(!file){
                throw new Error('Tienes que subir una imagen')
            }else{
                let fileExtension = path.extname(file.originalname)
                let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
                if (!acceptedExtensions.includes(fileExtension)){
                    throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}`)
                }
            }
            return true;
        })
];

module.exports = validationEdit;