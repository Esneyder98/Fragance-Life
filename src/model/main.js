const path = require('path');
const db = require("../database/models");
let Op = db.Sequelize.Op
let Sequelize = require("sequelize");
const { DatabaseError } = require('sequelize');

const products = {
    getPromotionProducts: function (number){
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" }, {association:"images_products"}],
            where:{
                promotion: number
            }, order: Sequelize.literal('rand()'),
            limit : 3
            
        })
            .then((products) => products)
            .catch(function(error){
                console.log(error);
            })
},
    getBestPromotion: function (number){
        return db.products.findAll({
            include: [{ association: "brand" }, { association: "smellFamily" }, {association:"images_products"}],
            where:{
                promotion: number
            },
            order: [["promotion" , "DESC"]], limit : 1
            
        })
            .then((products) => products)
            .catch(function(error){
                console.log(error);
            })
    },   
    getAleatoryProducts : function(){
        return db.products.findAll({
             include: [{ association: "brand" }, { association: "smellFamily" }, {association:"images_products"}],
            order: Sequelize.literal('rand()'), limit: 5
        })
        .then((products) => products)
        .catch(function(error){
			console.log(error);
		})
    },
    getLastProducts : function(){
        return db.products.findAll({
             include: [{ association: "brand" }, { association: "smellFamily" }, {association:"images_products"}],
            order: [["id" , "DESC"]], limit : 4
        })
        .then((products) => products)
        .catch(function(error){
			console.log(error);
		})
    }
}
module.exports = {products}
products.getAleatoryProducts()







