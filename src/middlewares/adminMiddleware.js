const path = require('path');

function adminMiddleware(req, res, next) {

    if(req.body.category == "Administrador") {
        res.redirect('/products/listaProductos');
    } 

    next();
}

module.exports = adminMiddleware;