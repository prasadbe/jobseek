const models = require("../models");

const getProducts = () => {
    return models.Products
    .findAll().then(response => {
        console.log(response);
      return response;
    });
};


module.exports = {
    getProducts : getProducts
}