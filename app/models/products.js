"use strict";
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define(
    "Products",
    {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      slug: {
        type : DataTypes.STRING
      },
      price: {
        type: DataTypes.FLOAT
      },
      name: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Products;
};
