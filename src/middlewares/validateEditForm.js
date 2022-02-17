const { body } = require('express-validator');
const path = require('path');
const validateEditForm =[
    body('nombreProducto')
        .notEmpty()
        .withMessage('Debes completar el campo nombre')
        .isLength({min: 5}).withMessage('El nombre debe tener minomo 5 caracteres'),
    body('precioProducto')
        .notEmpty()
        .withMessage('Debes completar el campo de precio').bail()
	    .isInt().withMessage('Debes ingresar un numero'),
    body('brand')
        .notEmpty()
        .withMessage('Debes seleccionar una marca'),
	body('smellFamily')
        .notEmpty()
        .withMessage('Debes seleccionar una Familia Aroma'),
	body('gender')
        .notEmpty()
        .withMessage('Debes seleccionar un genero'),
	body('discount')
        .notEmpty()
        .withMessage('Debes ingresar un descuento de 0 a 100').bail()
	.isInt().withMessage('Debes ingresar un numero'),
    body('available')
        .notEmpty()
        .withMessage('Debes ingresar una cantidad valida'),
	body('imagenProducto')
    .custom((value,{req}) =>{
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
        
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}`)
            }
        }
    

        return true;
    }),
body('description')
    .notEmpty()
    .withMessage('Debes agregar una descripcion de al menos 20 caracteres')
    .isLength({min:20}).bail()
    .withMessage('Debes ingresar una descripcion valida'),
]

module.exports = validateEditForm;