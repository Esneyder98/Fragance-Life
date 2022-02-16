const path = require('path')
const { products } = require('../model/main');


const controller ={

    index: (req, res, next) => {
        let aleatory = products.getAleatoryProducts()
        let promotion = products.getPromotionProducts(1)
        let last = products.getLastProducts()
        let best = products.getBestPromotion(1)
         Promise.all([aleatory, promotion, last, best])
         .then(function([aleatory, promotion, last, best]) {
            return res.render('../views/index.ejs', { products : aleatory, promotion : promotion, last : last, best : best });
        })
         .catch((err) => next(err))
         
    }
}


module.exports = controller;