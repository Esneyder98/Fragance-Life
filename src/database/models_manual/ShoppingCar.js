module.exports = (sequelize, dataTypes) => {
    const nameModel = "ShoppingCar";
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
      tableName: "shopping_car",
      timestamps: false,
    };
  
    const ShoppingCar = sequelize.define(nameModel, columns, options);
    ShoppingCar.associate = (models)=>{
      User.belongsTo(models.Users,{
        as: "shopUser",
        foreignKey: "users_id"
      })
    }
    ShoppingCar.associate = (models)=>{
      User.belongsTo(models.ProductUser,{
        as: "shopProduct",
        foreignKey: "products_id"
      })
    }
    return ShoppingCar;
  };
  