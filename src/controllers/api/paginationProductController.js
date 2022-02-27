const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const paginationProductController = {
    'paginationProducts': (req, res) => {
        let page = parseInt(req.params.page);
        let pages = [];
        console.log(page);
        if(page < 1 || page > 4) {
            return "No es posible observar la pagina"
        } else if (page == 1) {
            db.products.findAll({
                include: ['brand','smellFamily','images_products'],
                limit: 10,
            })
            .then(products => {
                let respuesta = {
                    data: products,
                    meta: {
                        status: 200,
                        url: 'api/products/paginationProducts/:page'
                    },
                    nextPage: '/api/products/paginationProducts/' + (page + 1)
                }
                res.json(respuesta); 
            })
            .catch(err => err);
        } else {
            let page = parseInt(req.params.page);
            db.products.findAll({
                include: ['brand','smellFamily','images_products'],
                limit: 10,
                offset: 10 * page
            })
            .then(products => {
                let respuesta = {
                    data: products,
                    meta: {
                        status: 200,
                        url: 'api/products/paginationProducts/:page'
                    },
                    nextPage: '/api/products/paginationProducts/' + (page + 1),
                    previousPage: '/api/products/paginationProducts/' + (page - 1)
                }
                res.json(respuesta); 
            })
            .catch(err => err);
        }
    },
}

module.exports = paginationProductController;