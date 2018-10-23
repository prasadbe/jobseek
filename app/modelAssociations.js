const models = require("./models");

module.exports = () => {
  //specify model relations
  models.Customers.belongsTo(models.Offers, { foreignKey: "customerId" });
  models.Products.belongsTo(models.Offers, { foreignKey: "productId" });
};
