const path = require('path');
const { validationResult } = require('express-validator')
const { productsModel } = require('../model/productsModel');

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

const controller = {

    getProducts: (req, res, next) => {
        productsModel.getproducts()
            .then(products => {
                res.render(path.join(__dirname, "../views/products/listaProductos.ejs"), { productos: products });
            })
            .catch((err) => next(err));
    },

    // Detail - Detail from one product
    detail: (req, res, next) => {
        let { id } = req.params;
        productsModel.detail(id)
            .then(prod => {
                let pricefull = prod.price;
                let pricediscount = prod.percentage > 0 ? prod.price - (prod.price * prod.percentage / 100) : prod.price;
                res.render(path.join(__dirname, "../views/products/detalle_producto.ejs"), { prod, pricefull, pricediscount })
            })
            .catch((err) => next(err));
    },

    CarritoDeCompras: (req, res) => {
        res.render(path.join(__dirname, "../views/products/CarritoDeCompras.ejs"));
    },

    crearNuevoProducto: (req, res, next) => {
        productsModel.crearNuevoProducto()
            .then((function ([brand, smellFamilys]) {
                res.render(path.join(__dirname, "../views/products/crearNuevoProducto.ejs"), { brand, smellFamilys })
            }))
            .catch((err) => next(err));
    },

    storee: (req, res, next) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            productsModel.crearNuevoProducto()
            .then((function ([brand, smellFamilys]) {
                return res.render('products/crearNuevoProducto', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    brand, smellFamilys
                })
            }))
            .catch((err) => next(err));
        }else{
            productsModel.storee(req.body,req.file)
            .then((producto) => {
                res.redirect('/')
            })
            .catch((err) => next(err));
        }

        
    },

    deleteProduct: (req, res) => {
            try {
                const { idProducto } = req.params;
                productsModel.deletee(idProducto)
                res.redirect('/')
    
            } catch (err) {
                console.log(err)
            }
        
            
            

    },

    editarProducto: (req, res, next) => {
        let { idProducto } = req.params;
        productsModel.editarProducto(idProducto)
            .then(function ([brand, smellFamilys, productoBuscado]) {
                console.log("producto Buscado"+productoBuscado)
                res.render(path.join(__dirname, "../views/products/editarProducto.ejs"), { brand, smellFamilys, productoBuscado })
            })
            .catch((err) => next(err));
    },

    productoEditado: (req, res, next) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            let { idProducto } = req.params;
            productsModel.editarProducto(idProducto)
            .then(function ([brand, smellFamilys, productoBuscado]) {
                res.render(path.join(__dirname, "../views/products/editarProducto.ejs"), 
                { errors: resultValidation.mapped(),brand, smellFamilys, productoBuscado })
            })
            .catch((err) => next(err));
        }else{
        let id = req.params.idProducto;
        productsModel.updateProduct(id, req.body,req.file)
            .then((producto) => {
                res.redirect(`/products/detalle/${id}`)
            })
            .catch((err) => next(err));
        }
        
        
    },

    getProductsMen: (req, res, next) => {
        productsModel.getProductsGender("HOMBRE")
            .then(products => {
                res.render('../views/products/productsMen.ejs', { products });
            })
            .catch((err) => next(err));
    },

    getProductsWomen: (req, res) => {
        productsModel.getProductsGender("MUJER")
            .then(products => {
                res.render('../views/products/productsWomen.ejs', { products });
            })
            .catch((err) => next(err));

    },

    getProductsBrand: (req, res) => {
        productsModel.getproducts()
            .then(products => {
                res.render('../views/products/productsBrand.ejs', { productsBrand: products });
            })
            .catch((err) => next(err));

    },

    getProductsSmellFamily: (req, res) => {
        productsModel.getproducts()
            .then(products => {
                res.render('../views/products/productsSmellFamily.ejs', { productsSmellFamily: products });
            })
            .catch((err) => next(err));

    },

    administrar: (req, res) => {
        productsModel.getproducts()
            .then(products => {
                res.render('../views/products/administrar.ejs', { administrar: products })
            })
            .catch((err) => next(err));
    },

    promotion: (req, res) => {
        productsModel.getproducts()
            .then(products => {
                res.render('../views/products/productpromotion.ejs', { promotion: products });
            })
            .catch((err) => next(err));
    },

    searchProductname: (req, res, next) =>{
        let buscar = req.body.search
        productsModel.searchProductname(buscar)
            .then(productos => {
                res.render('../views/products/busqueda.ejs', { productos });
            })
            .catch((err) => next(err));
    }

}

module.exports = controller;
