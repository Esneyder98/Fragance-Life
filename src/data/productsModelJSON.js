const fs = require('fs');
const path = require('path');
const dbProducts = require('./productsDataBase.json');
const {validationResult}= require('express-validator')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let producto="HQM";
const newId = () => {
	let ultimo = 0;
	products.forEach(product => {
		if (product.id > ultimo){
			ultimo = product.id;
		}
	});
	return ultimo + 1
}
const productsModel = {
    getproducts: function()  {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "./productsDataBase.json"),{encoding: "utf8"}));
      },

    getProductsMen: function (){
        const productMen = this.getproducts().filter(product => product.gender == 'HOMBRE')
        return productMen;
    },

    getProductsWomen: function (){
        const productWomen = this.getproducts().filter(product => product.gender == 'MUJER')
        return productWomen;
    },
    searchProductname:(prod)=>{
        const search = productsModel.getproducts().find(producto => producto.name == prod);
        return search;
    },
    processRegister: function (request, response) {
        let promo=false;

            if (request.body.discount >= 0){
            promo=true;
        }
        
        let newProduct={
            id: newId(),
            name : request.body.nombreProducto,
            available: true,
            price: request.body.precioProducto,
            brand: request.body.brand,
            smellFamily:request.body.smellFamily,
            gender:request.body.gender,
            promotion: promo,
            discount: request.body.discount,
            imagen1: request.file.filename,
            description: request.body.description,
        }
        products.push(newProduct)
        
        let nuevoProductoGuardar = JSON.stringify(products,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productsDataBase.json'), nuevoProductoGuardar);
        
        // if(prod) {
        //     return prod.id;
        // }

        // return false;
        
    },
    updateProduct: function(id, producto) {
        const indiceProducto = this.getproducts().findIndex(producto => producto.id == id);
        if(indiceProducto < 0) {
            return "No existe este producto en la base de datos";
        } 
        let productDb = this.getproducts();
        productDb[indiceProducto] = producto;
        productDb[indiceProducto].id = id;
        fs.writeFileSync(path.resolve(__dirname, './productsDataBase.json'), JSON.stringify(productDb, null, 4), {encoding: "utf8"});
        return "Producto Actualizado exitosamente";
    }

}

module.exports = {productsModel};
