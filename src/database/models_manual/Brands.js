module.exports = (sequelize, dataTypes) => {
    const nameModel = "Brands";
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
    };
    const options = {
      tableName: "brands",
      timestamps: false,
    };
  
    const Brands = sequelize.define(nameModel, columns, options);
    Brands.associate = (models)=>{
      //un descuento pertenece a muchos productos
    Brands.hasMany(models.Products,{
      as: "brands",
      foreignKey: "brand_id"
    })
    }
    return Brands;
  };