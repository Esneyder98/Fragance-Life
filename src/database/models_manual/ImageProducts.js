module.exports = (sequelize, dataTypes) => {
    const nameModel = "Image_products";
    const columns = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING(200),
        allowNull: false,
      },
      product_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    const options = {
      tableName: "images_products",
      timestamps: false,
    };
  
    const Image_products = sequelize.define(nameModel, columns, options);
    Image_products.associate = (models)=>{
    //una imagen pertenece a un producto
    Image_products.belongsTo(models.Image_products,{
      as: "image_products",
      foreignKey: "product_id"
    })
    }
    return Image_products;
  };