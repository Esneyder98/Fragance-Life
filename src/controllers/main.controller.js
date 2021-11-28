const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const lastOfert = () => {
	let ultimo = 0;
    let lastO={};
	products.forEach(product => {
		if ((product.id > ultimo) && product.promotion==true) {
			lastO = product;
		}
	});
	return lastO
}

const controller ={

    index: (req, res) =>{
        let last=lastOfert();
        let promotion = products.filter(product => (product.promotion==true) && product.id != last.id)
        let nuevos=products.slice(products.length-5);
        res.render(path.join(__dirname, "../views/index.ejs"),{last,promotion,nuevos});
    },
}


module.exports = controller;