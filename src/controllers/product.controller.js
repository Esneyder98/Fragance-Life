const fs = require('fs');
const { get } = require('https');
const path = require('path');
const {validationResult}= require('express-validator')
const {productsModel}=require('../data/productsModel')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productosData = require('../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const newId = () => {
	let ultimo = 0;
	products.forEach(product => {
		if (product.id > ultimo){
			ultimo = product.id;
		}
	});
	return ultimo + 1
}
const controller ={

    getProducts: (req, res) => {
        let productos = productosData;
        res.render(path.join(__dirname, "../views/products/listaProductos.ejs"), {productos: productos});
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
    store:(req, res) => {
        let promo=false;
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length >0){
            return res.render('products/crearNuevoProducto',{
                errors: resultValidation.mapped(),
                oldData:req.body
            })
        }
            if (req.body.discount >= 0){
            promo=true;
        }
        
        let newProduct={
            id: newId(),
            name : req.body.nombreProducto,
            available: true,
            price: req.body.precioProducto,
            brand: req.body.brand,
            smellFamily:req.body.smellFamily,
            gender:req.body.gender,
            promotion: promo,
            discount: req.body.discount,
            imagen1: req.file.filename,
            ddescription: req.body.description,
        }
        products.push(newProduct)
        let nuevoProductoGuardar = JSON.stringify(products,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productsDataBase.json'), nuevoProductoGuardar);
    },
    // Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id;
		let product = products.filter(product => product.id == id)[0];
		let price = {
			full : toThousand(product.price),
			discount: toThousand(Math.round(product.price * (1 - product.discount / 100)))
		}
		res.render(path.join(__dirname, "../views/products/detalle_producto.ejs"), {product, price});
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
