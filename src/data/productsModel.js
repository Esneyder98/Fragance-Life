const fs = require('fs');
const path = require('path');
const dbProducts = require('./productsDataBase.json');

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
