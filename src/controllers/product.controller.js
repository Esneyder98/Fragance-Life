const fs = require('fs');
const { get } = require('https');
const path = require('path');
const {productsModel}=require('../data/productsModel')

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
    getProductsMen:(req, res) => {
        res.render('../views/products/productsMen.ejs',{products: productsModel.getProductsMen()});
    },
    getProductsWomen:(req, res) => {
        res.render('../views/products/productsWomen.ejs',{products: productsModel.getProductsWomen()});
    }

}

module.exports = controller;
