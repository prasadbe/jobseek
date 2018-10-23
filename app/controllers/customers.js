const models = require("../models");

const getCustomers = () => {
    return models.Customers
    .findAll().then(response => {
        console.log(response);
      return response;
    });
};


module.exports = {
    getCustomers : getCustomers
}