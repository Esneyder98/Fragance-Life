module.exports = (sequelize, dataTypes) => {
    const nameModel = "Movies";
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
  
    const Movie = sequelize.define(nameModel, columns, options);
    return Movie;
  };
  