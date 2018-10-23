"use strict";
module.exports = (sequelize, DataTypes) => {
  var Offers = sequelize.define(
    "Offers",
    {
       offerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      slug: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      buy_qty: {
        type: DataTypes.INTEGER
      },
      get_qty : {
        type: DataTypes.INTEGER
      },
      min_qty : {
        type: DataTypes.INTEGER
      },
      discount_price : {
        type: DataTypes.FLOAT
      },
      productId: {
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER
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
  return Offers;
};
