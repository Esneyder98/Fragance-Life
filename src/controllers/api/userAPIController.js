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
            attributes: ['id','name','surname','email','avatar']
        })
        .then(users => {
            let protocol= req.protocol
            let hosname= req.hostname
            let host= req.headers.host
            let fullUsers=users.map(user => {
                return {
                'id':user.id,
                'name':user.name,
                'surname':user.surname,
                'email':user.email,
                'avatar':protocol+'://'+host+'/img/users/'+user.avatar,
                'detail' :'/api/users/'+user.id
                }
            })
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: fullUsers
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.users.findByPk(req.params.id,
            {attributes: ['id','name','surname','email','avatar']})
            .then(user => {
                let protocol= req.protocol
                let hosname= req.hostname
                let host= req.headers.host
                user.avatar=protocol+'://'+host+'/img/users/'+user.avatar
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
    
    
}

module.exports = userAPIController;