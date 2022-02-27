const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const paginationUserController = {
    'paginationUsers': (req, res) => {
        let page = parseInt(req.params.page);
        console.log(page);
        if(page < 1 || page > 4) {
            return "No es posible observar la pagina"
        } else if (page == 1) {
            db.users.findAll({
                attributes: ['id','name','surname','email','avatar'],
                limit: 10,
            })
            .then(users => {
                let respuesta = {
                    data: users,
                    meta: {
                        status: 200,
                        url: 'api/users/paginationProducts/:page'
                    },
                    nextPage: '/api/users/paginationUsers/' + (page + 1)
                }
                res.json(respuesta); 
            })
            .catch(err => err);
        } else {
            let page = parseInt(req.params.page);
            db.users.findAll({
                attributes: ['id','name','surname','email','avatar'],
                limit: 10,
                offset: 10 * page
            })
            .then(users => {
                let respuesta = {
                    data: users,
                    meta: {
                        status: 200,
                        url: 'api/users/paginationUsers/:page'
                    },
                    nextPage: '/api/users/paginationUsers/' + (page + 1),
                    previousPage: '/api/users/paginationUsers/' + (page - 1)
                }
                res.json(respuesta); 
            })
            .catch(err => err);
        }
    },
}

module.exports = paginationUserController;