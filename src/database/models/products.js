const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    available: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    smellFamily_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'smellfamilys',
        key: 'id'
      }
    },
    gender: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    promotion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'discounts',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_brand_id",
        using: "BTREE",
        fields: [
          { name: "brand_id" },
        ]
      },
      {
        name: "fk_smellFamily_id",
        using: "BTREE",
        fields: [
          { name: "smellFamily_id" },
        ]
      },
      {
        name: "fk_discount_id",
        using: "BTREE",
        fields: [
          { name: "discount_id" },
        ]
      },
    ]
  });
};
