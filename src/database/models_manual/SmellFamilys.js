module.exports = (sequelize, dataTypes) => {
    const nameModel = "SmellFamilys";
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
      tableName: "SmellFamilys",
      timestamps: false,
    };
  
    const SmellFamilys = sequelize.define(nameModel, columns, options);
    SmellFamilys.associate = (models)=>{
      //una familia aromatica pertenece a muchos productos
    SmellFamilys.hasMany(models.Products,{
      as: "SmellFamilys",
      foreignKey: "SmellFamily_id"
    })
  }
    return SmellFamilys;
  };