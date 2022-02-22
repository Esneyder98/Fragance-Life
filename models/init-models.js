var DataTypes = require("sequelize").DataTypes;
var _brands = require("./brands");
var _categorys = require("./categorys");
var _discounts = require("./discounts");
var _images_products = require("./images_products");
var _product_user = require("./product_user");
var _products = require("./products");
var _shopping_car = require("./shopping_car");
var _smellfamilys = require("./smellfamilys");
var _users = require("./users");

function initModels(sequelize) {
  var brands = _brands(sequelize, DataTypes);
  var categorys = _categorys(sequelize, DataTypes);
  var discounts = _discounts(sequelize, DataTypes);
  var images_products = _images_products(sequelize, DataTypes);
  var product_user = _product_user(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var shopping_car = _shopping_car(sequelize, DataTypes);
  var smellfamilys = _smellfamilys(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(products, { as: "products", foreignKey: "brand_id"});
  users.belongsTo(categorys, { as: "category", foreignKey: "category_id"});
  categorys.hasMany(users, { as: "users", foreignKey: "category_id"});
  images_products.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(images_products, { as: "images_products", foreignKey: "product_id"});
  product_user.belongsTo(products, { as: "product", foreignKey: "products_id"});
  products.hasMany(product_user, { as: "product_users", foreignKey: "products_id"});
  shopping_car.belongsTo(products, { as: "product", foreignKey: "products_id"});
  products.hasMany(shopping_car, { as: "shopping_cars", foreignKey: "products_id"});
  products.belongsTo(smellfamilys, { as: "smellFamily", foreignKey: "smellFamily_id"});
  smellfamilys.hasMany(products, { as: "products", foreignKey: "smellFamily_id"});
  product_user.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(product_user, { as: "product_users", foreignKey: "users_id"});
  shopping_car.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(shopping_car, { as: "shopping_cars", foreignKey: "users_id"});

  return {
    brands,
    categorys,
    discounts,
    images_products,
    product_user,
    products,
    shopping_car,
    smellfamilys,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
