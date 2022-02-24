const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const user = db.users;



const userAPIController = {
    'list': (req, res) => {
        db.users.findAll({
            attributes: ['name','surname','avatar']
        })
        .then(users => {
            
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    
    
}

module.exports = userAPIController;