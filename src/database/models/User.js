module.exports = (sequelize, dataTypes) => {
    const nameModel = "Users";
    const columns = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      document: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING(200),
        allowNull: false,
      },
      surname: {
        type: dataTypes.STRING(200),
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING(200),
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING(200),
        allowNull: false,
      },
      category_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      avatar: {
        type: dataTypes.BLOB,
        allowNull: false,
      },
    };
    const options = {
      tableName: "users",
      timestamps: false,
    };
  
    const User = sequelize.define(nameModel, columns, options);
    return User;
  };