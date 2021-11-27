const fs = require('fs');
const { get } = require('https');
const path = require('path');
const {productsModel}=require('../data/productsModel')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productosData = require('../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller ={

    getProducts: (req, res) => {
        let idProductoUrl = req.params.idProducto;
        let busquedaProducto = productosData.find(item => item.id == idProductoUrl);
        res.render(path.join(__dirname, "../views/products/listaProductos.ejs"), {productos: busquedaProducto});
    },

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
    editarProducto:(req, res) => {

        let idProductoUrl = req.params.idProducto;
        let busquedaProducto = productosData.find(item => item.id == idProductoUrl);
    
            if(busquedaProducto) {
                res.render("products/editarProducto", { busqueda: busquedaProducto, idProducto: idProductoUrl});
            } else {
                res.render("products/productoInexistente");
            }
        // res.render(path.join(__dirname, "../views/products/editarProducto.ejs"));
    },

    productoEditado: (req, res) => {
        console.log(req.body);
        productsModel.updateProduct(req.params.idProducto, req.body);
        res.redirect('/products/listaProductos');
    },
    getProductsMen:(req, res) => {
        res.render('../views/products/productsMen.ejs',{products: productsModel.getProductsMen()});
    },
    getProductsWomen:(req, res) => {
        res.render('../views/products/productsWomen.ejs',{products: productsModel.getProductsWomen()});
    }

}

module.exports = controller;
