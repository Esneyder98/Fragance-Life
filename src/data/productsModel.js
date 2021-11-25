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
    }

}

module.exports = {productsModel};
