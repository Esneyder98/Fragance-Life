const path = require('path');

function adminMiddleware(req, res, next) {

    if(req.session.userLogged){
      
    }
    next();
}
module.exports = adminMiddleware;