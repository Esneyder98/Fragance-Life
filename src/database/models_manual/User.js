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
    User.associate = (models)=>{
      //un Usuario pertenece a una categoria
      User.belongsTo(models.Category,{
        as: "users",
        foreignKey: "category_id"
      })
    //Un usuario puede comprar muchos productos
    User.belongsToMany(models.Products,{
      as: "produts_buy",
      through: "shopping_car", //nombre tabla intermedia
      foreignKey:"users_id",// columna que hace referencia a este modelo o tabla
      otherKey:"products_id", // otra llave foranea que hace referencia ala otra tabla 
      timestamps: false
    });
    
    //Un usuario puede registrar muchos productos
    User.belongsToMany(models.Products,{
      as: "products",
      through: "product_user", //nombre tabla intermedia
      foreignKey:"users_id",// columna que hace referencia a este modelo o tabla
      otherKey:"products_id", // otra llave foranea que hace referencia ala otra tabla 
      timestamps: false
    });

    User.hasMany(models.ProductUser,{
      as: "product_user",
      foreignKey: "users_id"
    })

    User.hasMany(models.ProductUser,{
      as: "shopping_car",
      foreignKey: "users_id"
    })
    
    }
    return User;
  };