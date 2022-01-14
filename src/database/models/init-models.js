let DataTypes = require("sequelize").DataTypes;
let _brands = require("./brands");
let _categorys = require("./categorys");
let _discounts = require("./discounts");
let _images_products = require("./images_products");
let _product_user = require("./product_user");
let _products = require("./products");
let _shopping_car = require("./shopping_car");
let _smellfamilys = require("./smellfamilys");
let _users = require("./users");

function initModels(sequelize) {
  let brands = _brands(sequelize, DataTypes);
  let categorys = _categorys(sequelize, DataTypes);
  let discounts = _discounts(sequelize, DataTypes);
  let images_products = _images_products(sequelize, DataTypes);
  let product_user = _product_user(sequelize, DataTypes);
  let products = _products(sequelize, DataTypes);
  let shopping_car = _shopping_car(sequelize, DataTypes);
  let smellfamilys = _smellfamilys(sequelize, DataTypes);
  let users = _users(sequelize, DataTypes);

  products.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(products, { as: "products", foreignKey: "brand_id"});
  users.belongsTo(categorys, { as: "category", foreignKey: "category_id"});
  categorys.hasMany(users, { as: "users", foreignKey: "category_id"});
  products.belongsTo(discounts, { as: "discount", foreignKey: "discount_id"});
  discounts.hasMany(products, { as: "products", foreignKey: "discount_id"});
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
