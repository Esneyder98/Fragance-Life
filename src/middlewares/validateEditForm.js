const { body } = require('express-validator');
const path = require('path');
const validateEditForm =[
    body('nombreProducto')
        .notEmpty()
        .withMessage('Debes completar el campo nombre').bail()
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
    body('imagenProducto').custom((value,{req}) =>{
        let file = req.body.imagenProducto
        
        let validaciones=[null,undefined,'']
        console.log("file "+file)
        console.log("value "+value)
        let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
        
        if(!file && validaciones.includes(value) ){
            throw new Error('Tienes que subir una imagen')
        }else{
            let extencion=file.slice(file.indexOf("."),file.lengh)
            //let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(extencion)){
                throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}`)
            }
        }
        return true;
    }),
    body('descripcion')
        .notEmpty()
        .withMessage('Debes ingresar una descripcion valida').bail()
        .isLength({min:20}).withMessage('Debes agregar una descripcion de al menos 20 caracteres').bail()
        .isLength({max:200}).withMessage('Se permiten 200 caracteres como max de descripción')
        ,
]

module.exports = validateEditForm;