const path = require("path");

const controller ={


    login:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    },

    register:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/register.ejs"));
    }

}

module.exports = controller;