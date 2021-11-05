const path = require("path");

const controller ={

    index: (req, res) =>{
        res.render(path.join(__dirname, "../views/index.ejs"));
    },
    detalle_producto:(req, res) =>{
        res.render(path.join(__dirname, "../views/detalle_producto.ejs"));

    },
    CarritoDeCompras:(req, res) =>{
        res.render(path.join(__dirname, "../views/CarritoDeCompras.ejs"));
    },

    login:(req, res) =>{
        res.render(path.join(__dirname, "../views/login.ejs"));
    },

    register:(req, res) =>{
        res.render(path.join(__dirname, "../views/register.ejs"));
    }


    /*
    getLogin: (req, res) =>{
        res.sendFile(path.join(__dirname, "../views/login.html"));
    },
    login: (req, res) =>{
        if(true){
            res.sendFile(path.join(__dirname, "../views/mainpage.html"));
        }else{
            res.redirect('/');
        }
    }
    */
}

module.exports = controller;
