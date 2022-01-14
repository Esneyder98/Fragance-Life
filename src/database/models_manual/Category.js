module.exports = (sequelize, dataTypes) => {
    const nameModel = "Categorys";
    const columns = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    const options = {
      tableName: "categorys",
      timestamps: false,
    };
  
    const Category = sequelize.define(nameModel, columns, options);
    Category.associate = (models)=>{
      //una categoria pertenece a muchos productos
    Category.hasMany(models.User,{
      as: "category",
      foreignKey: "category_id"
    })
  }
    return Category;
  };
  