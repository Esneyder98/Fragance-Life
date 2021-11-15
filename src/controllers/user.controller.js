const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const controller ={


    login:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    },

    register:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/register.ejs"));
    }

}

module.exports = controller;