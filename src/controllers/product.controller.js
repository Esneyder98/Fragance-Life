const fs = require('fs');
const { get } = require('https');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    },
    womenDetail:(req, res) => {
        res.render(path.join(__dirname, "../views/products/perfumes-mujer.ejs"), { products:products } );
          }
}   
   
console.log(products[0].name);
module.exports = controller;
