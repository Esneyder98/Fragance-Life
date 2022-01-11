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
    return Category;
  };
  