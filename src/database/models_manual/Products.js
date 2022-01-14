module.exports = (sequelize, dataTypes) => {
    const nameModel = "Products";
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
      available:{
        type: dataTypes.INTEGER,
      },
      price:{
        type: dataTypes.DOUBLE,
      },
      gender: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      promotion: {
        type: dataTypes.INTEGER,
      },
      description: {
        type: dataTypes.STRING(200),
        allowNull: false,
      }
    };
    const options = {
      timestamps: false,
    };
  
    const Products = sequelize.define(nameModel, columns, options);
    Products.associate = (models)=>{
      //un producto pertenece a una familia aromatica
      Products.belongsTo(models.SmellFamilys,{
        as: "smellfamilys",
        foreignKey: "smellFamily_id"
      })
       //un producto pertenece a un descuento
       Products.belongsTo(models.Discounts,{
        as: "discounts",
        foreignKey: "discount_id"
      })
       //un producto pertenece a una marca
       Products.belongsTo(models.Brands,{
        as: "brands",
        foreignKey: "brand_id"
      })
       //un producto tiene muchas imagenes
    Products.hasMany(models.Image_products,{
      as: "images_products",
      foreignKey: "product_id"
    })
    //Un producto de venta pertenece a muchos usuarios
    Products.belongsToMany(models.Users,{
      as: "user_buy",
      through: "shopping_car", //nombre tabla intermedia
      foreignKey:"products_id",// columna que hace referencia a este modelo o tabla
      otherKey:"users_id", // otra llave foranea que hace referencia ala otra tabla 
      timestamps: false
    });
    
    //Un producto de registrado pertenece a muchos usuarios
    Products.belongsToMany(models.Users,{
      as: "user",
      through: "product_user", //nombre tabla intermedia
      foreignKey:"products_id",// columna que hace referencia a este modelo o tabla
      otherKey:"users_id", // otra llave foranea que hace referencia ala otra tabla 
      timestamps: false
    });

    Products.hasMany(models.ProductUser,{
      as: "product_user",
      foreignKey: "products_id"
    })

    Products.hasMany(models.ProductUser,{
      as: "shopping_car",
      foreignKey: "products_id"
    })
    }
    return Products;
  };
  