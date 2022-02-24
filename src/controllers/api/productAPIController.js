const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



const productAPIController = {
    'list': (req, res) => {
        res.send("hola mundo")
    },
    
    
}

module.exports = productAPIController;