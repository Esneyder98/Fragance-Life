module.exports = (sequelize, dataTypes) => {
    const nameModel = "ProductUser";
    const columns = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      users_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      products_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    const options = {
      tableName: "product_user",
      timestamps: false,
    };
  
    const ProductUser = sequelize.define(nameModel, columns, options);
    
    ProductUser.associate = (models)=>{
      User.belongsTo(models.Users,{
        as: "usersProduct",
        foreignKey: "users_id"
      })
    }
    ProductUser.associate = (models)=>{
      User.belongsTo(models.ProductUser,{
        as: "productUser",
        foreignKey: "products_id"
      })
    }
    return ProductUser;
  };