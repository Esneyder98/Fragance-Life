const path = require('path');

function buyerMiddleware(req, res, next) {

    if(req.body.category == "Comprador") {
        res.redirect('/');
    }

    next();
}

module.exports = buyerMiddleware;