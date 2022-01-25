const fs = require('fs');
const { get } = require('https');
const path = require('path');
const {validationResult}= require('express-validator')
const {productsModel}=require('../data/productsModel')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productosData = require('../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller ={

    getProducts: (req, res) => {
        let productos = productosData;
        res.render(path.join(__dirname, "../views/products/listaProductos.ejs"), {productos: productos});
    },

    CarritoDeCompras:(req, res) =>{
        res.render(path.join(__dirname, "../views/products/CarritoDeCompras.ejs"));
    },
    crearNuevoProducto:(req, res) => {
        res.render(path.join(__dirname, "../views/products/crearNuevoProducto.ejs"));
    },
    storee:(req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length >0){
            return res.render('products/crearNuevoProducto',{
                errors: resultValidation.mapped(),
                oldData:req.body
            })
        }
        let request = req;
        let productos = productsModel.getproducts();
        productsModel.processRegister(req);
        // let prod = products.filter(item => item.id == req.params.id)[0];
        // console.log(prod);
            res.render(path.resolve(__dirname, '../views/products/listaProductos.ejs'), {productos});

    },
   // Detail - Detail from one product
	detail: (req, res) => {
	    let id = req.params.id;
     	let prod = products.filter(item => item.id == id)[0];

        let pricefull=prod.price;
        let pricediscount=prod.discount > 0 ? prod.price-(prod.price*prod.discount/100): prod.price;
		// let pric = {
		// 	full : toThousand(prod.price),
		// 	disc: toThousand(prod.discount > 0 ? prod.price-(prod.price*prod.discount/100): prod.price)
		// }
	 	res.render(path.join(__dirname, "../views/products/detalle_producto.ejs"), {prod, pricefull,pricediscount});
        
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

    deleteProduct: (req, res) => {
        let idProducto = req.params.idProducto;
        const newDb = productosData.filter(item => item.id != idProducto);
        fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"),
        JSON.stringify(newDb, null, 4),  { encoding: "utf8" }
        
    );
        res.redirect('/products/administrar');
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
    },
    getProductsBrand:(req, res) => {
        res.render('../views/products/productsBrand.ejs',{productsBrand: productsModel.getproducts()});
    },
    getProductsSmellFamily:(req, res) => {
        res.render('../views/products/productsSmellFamily.ejs',{productsSmellFamily: productsModel.getproducts()});
    },
    administrar:(req, res) => {
        res.render('../views/products/administrar.ejs',{administrar: productsModel.getproducts()});
    },
    promotion:(req, res) => {
        res.render('../views/products/productpromotion.ejs',{promotion: productsModel.getproducts()});
    },
    
}

module.exports = controller;
