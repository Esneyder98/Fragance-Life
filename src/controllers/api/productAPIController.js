const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



const productAPIController = {
    'list': (req, res) => {
        db.products.findAll({
            include: ['brand','smellFamily','images_products']
        })
        .then(products => {
            function brand(prods){
                let ids={}
                for (let i = 0; i < prods.length; i++) {
                    let element =  prods[i].brand.name;
                    ids[element] = 0
                }
                for (let i = 0; i < prods.length; i++) {
                    let element =  prods[i].brand.name;
                    ids[element]+=1
                }
                    return ids
            }
            let fullProducts=products.map(product => {
                return {
                'id':product.id,
                'name':product.name,
                'avaible':product.available,
                'price':product.price,
                'gender':product.gender,
                'promotion':product.promotion,
                'description':product.description,
                'discount':product.discount,
                'brand':product.brand,
                'smellFamily':product.smellFamily,
                'images_products': product.images_products,
                'detail' :'/api/products/'+product.id
                }
            })
            let respuesta = {
                meta: {
                    status : 200,
                    count : products.length,
                    countBrands : brand(products),
                    url: 'api/products'
                },
                data: fullProducts
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.products.findByPk(req.params.id,
            {include: ['brand','smellFamily','images_products']})
            .then(product => {
                let protocol= req.protocol
                let hosname= req.hostname
                let host= req.headers.host
                 let img=protocol+'://'+host+'/img/Perfumes/'+product.images_products[0].name
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: product,img
                }
                res.json(respuesta);
            });
    }
    
}

module.exports = productAPIController;