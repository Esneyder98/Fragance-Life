module.exports = (sequelize, dataTypes) => {
    const nameModel = "Discounts";
    const columns = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      percentage: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    const options = {
      tableName: "discounts",
      timestamps: false,
    };
  
    const Discounts = sequelize.define(nameModel, columns, options);
    Discounts.associate = (models)=>{
      //un descuento pertenece a muchos productos
    Discounts.hasMany(models.Products,{
      as: "discounts",
      foreignKey: "discount_id"
    })
    }
    return Discounts;
  };