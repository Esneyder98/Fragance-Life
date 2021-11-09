const path = require("path");

const controller ={

    detalle_producto:(req, res) =>{
        res.render(path.join(__dirname, "../views/products/detalle_producto.ejs"));

    },
    CarritoDeCompras:(req, res) =>{
        res.render(path.join(__dirname, "../views/products/CarritoDeCompras.ejs"));
    },
    crearNuevoProducto:(req, res) => {
        res.render(path.join(__dirname, "../views/products/crearNuevoProducto.ejs"));
    },
    editarProducto:(req, res) => {
        res.render(path.join(__dirname, "../views/products/editarProducto.ejs"));
    }

}

module.exports = controller;
