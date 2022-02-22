const db = require('../database/models');
const productsModel = {

    getproducts: function () {
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" },{association: "images_products"}]
        })
            .then((products) => products)
            .catch((err) => { throw new Error('error de conexion') })
    },

    detail: function (id){
        return db.products.findByPk(id,{
            include: [{ association: "brand" }, { association: "smellFamily" },{association: "images_products"}]
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
                smellFamily_id: smellFamily, gender: gender, promotion: promo, discount: discount,
                description: description
                 })
                .then(function (nuevoProducto) {
                   return nuevoProducto 
                }) 
                .then (function (nuevoProducto) {
                   return db.images_products.create({
                     name:filename, product_id:nuevoProducto.id})     
                })
                .catch((err) => { 
                    
                    throw new Error('error de conexion') 
                })
                             
    },
    editarProducto: function (id) {
        let brands = db.brands.findAll();
        let smellFamilys = db.smellfamilys.findAll();
        let productoBuscado = db.products.findByPk(id,{
            include: [{association: "images_products"}]
        })

        return Promise.all([brands,smellFamilys,productoBuscado])
            .then((function ([brands,smellFamilys,productoBuscado]) {
               return [brands,smellFamilys,productoBuscado]
            }))
            .catch((err) => { throw new Error('error de conexion') })

        },
    updateImgProduct:function(id,imagenProducto){
        db.images_products.update({
            name:imagenProducto
        },{
            where: {
                product_id: id
        }
        }).then((producto) => producto)
        .catch((err) => { 
            console.log(err);
            throw new Error('error de conexion')})
    },
    updateProduct: async function(id, editarProducto,file) {
         const { nombreProducto, precioProducto, brand, smellFamily,
            gender, discount,available, description,imagenProducto } = editarProducto;
            const {filename} = file
            await this.updateImgProduct(id,filename)
        return db.products.update({
            name: nombreProducto, price: precioProducto, brand_id: brand,
            smellFamily_id: smellFamily, gender: gender,available: available,  discount: discount,
            description: description, images_products:imagenProducto
        },{
            where: {
                id: id
        }
        })
        .then((producto) => producto)
        .catch((err) => { 
            console.log(err);
            throw new Error('error de conexion')})
    },

    getProductsGender: function (gender){
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" }, {association:"images_products"}],
            where:{
                gender: gender
            }
        })
            .then((products) => products)
            .catch((err) => { throw new Error('error de conexion') })
    },
    searchProductname:(buscar)=>{
    
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" },{association: "images_products"}],
            where:{
                name:{[db.Sequelize.Op.like]:`%${buscar}%`}
            }
        })
            .then((products) => products)
            .catch((err) => { throw new Error('error de conexion') })
    },
    deleteImg: function(id){
        db.images_products.destroy({
            where:{
                product_id:id
            }
        })
        .then(() =>  true)
        .catch((err) => {
            console.log(err)
             throw new Error('error de conexion')
        })
    },
    deleteProduct: function (id) { 
        db.products.destroy({ 
            where:{
                    id:id
                }
            })
            .then(() =>  true)
            .catch((err) => {
            console.log(err)
            throw new Error('error de conexion')
            })    
    },
    deletee: function(id){
        let img= this.deleteImg(id)
        let product= this.deleteProduct(id)
        Promise.all([img, product])
        .then(([img, product]) => [img,product])
        .catch((err) => { throw new Error('Ocurrio un error') })
    }
}

module.exports = {productsModel};
