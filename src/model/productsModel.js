const db = require('../database/models');
const productsModel = {

    getproducts: function () {
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" }, { association: "discount" },{association: "images_products"}]
        })
            .then((products) => products)
            .catch((err) => { throw new Error('error de conexion') })
    },

    detail: function (id){
        return db.products.findByPk(id,{
            include: [{ association: "brand" }, { association: "smellFamily" }, { association: "discount" },{association: "images_products"}]
        })
        .then((products) => products)
        .catch((err) => { throw new Error('error de conexion') })
    },

    crearNuevoProducto: function () {
        let brands = db.brands.findAll();
        let smellFamilys = db.smellfamilys.findAll();

        return Promise.all([brands,smellFamilys])
            .then((function ([brands,smellFamilys]) {
               return [brands,smellFamilys]
            }))
            .catch((err) => { throw new Error('error de conexion') })
    },

    storee: function (nuevoProducto,nuevaImagen) {
        const { nombreProducto, available, precioProducto, brand, smellFamily,
                gender, promo, discount, description } = nuevoProducto
        const {filename} = nuevaImagen
                                  
                return db.products.create({
                name: nombreProducto, available: available, price: precioProducto, brand_id: brand,
                smellFamily_id: smellFamily, gender: gender, promotion: promo, discount_id: discount,
                description: description
                 })
                .then(function (nuevoProducto) {
                   return nuevoProducto 
                }) 
                .then (function (nuevoProducto) {
                   return db.images_products.create({
                     name:filename, product_id:nuevoProducto.id})     
                })
                .catch((err) => { throw new Error('error de conexion') })
                             
    },

    deleteProduct: function (id) {  
        return db.products.destroy({ 
            where:{
            id:id
            }
        })
        .then((producto) => producto)
        .catch((err) => { throw new Error('error de conexion') })
    },
    
    editarProducto: function (id) {
        let brands = db.brands.findAll();
        let smellFamilys = db.smellfamilys.findAll();
        let productoBuscado = db.products.findByPk(id,{
            include: [{association:"discount"},{association: "images_products"}]
        })

        return Promise.all([brands,smellFamilys,productoBuscado])
            .then((function ([brands,smellFamilys,productoBuscado]) {
               return [brands,smellFamilys,productoBuscado]
            }))
            .catch((err) => { throw new Error('error de conexion') })

        },

    updateProduct: function(id, editarProducto) {
         const { nombreProducto, precioProducto, marca, familiaAroma,
            categoria, discount, descripcionProducto,imagenProducto } = editarProducto;

            console.log(editarProducto,id)

        return db.products.update({
            name: nombreProducto, price: precioProducto, brand_id: marca,
            smellFamily_id: familiaAroma, gender: categoria,  discount_id: discount,
            description: descripcionProducto, images_products:imagenProducto
        },{
            where: {
                id: id
        }
        })
        .then((producto) => producto)
        .catch((err) => { throw new Error('error de conexion')})
    },

    getProductsGender: function (gender){
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" }, { association: "discount" }, {association:"images_products"}],
            where:{
                gender: gender
            }
        })
            .then((products) => products)
            .catch((err) => { throw new Error('error de conexion') })
    },

   
    searchProductname:(buscar)=>{
    
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" }, { association: "discount" },{association: "images_products"}],
            where:{
                name:{[db.Sequelize.Op.like]:`%${buscar}%`}
            }
        })
            .then((products) => products)
            .catch((err) => { throw new Error('error de conexion') })
    },

   

}

module.exports = {productsModel};
