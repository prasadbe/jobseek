'use strict';

const config = require('../config/config')
const models = require('../models')

module.exports = {
  up: function (queryInterface, Sequelize) {
     //Sequelize.query("truncate table Products");
    return queryInterface.bulkInsert('Products', [{
      name: 'Classic Ad',
      slug: 'classic',
      price: '269.99',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    
    {
      name: 'Standout Ad',
      slug: 'standout',
      price: '322.99',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },

    {
      name: 'Premium Ad',
      slug: 'premium',
      price: '394.99',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }]).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  },
  down: function (queryInterface, Sequelize) {

  }
};
