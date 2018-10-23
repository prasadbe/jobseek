const models = require("../models");

const getOffers = () => {
    return models.Offers
    .findAll().then(response => {
        console.log(response);
      return response;
    });
};


module.exports = {
    getOffers : getOffers
}