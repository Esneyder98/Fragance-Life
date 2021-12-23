const path = require('path');

function buyerMiddleware(req, res, next) {
    if(req.session.userLogged){
        if(req.session.userLogged.category == "Comprador"){
            return res.redirect('/')
        }
    }

    next();
}

module.exports = buyerMiddleware;