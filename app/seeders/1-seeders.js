'use strict';

const config = require('../config/config')
const models = require('../models')

module.exports = {
  up: function (queryInterface, Sequelize) {
    //Sequelize.query("truncate table Customers");

    return queryInterface.bulkInsert('Customers', [{
      name: 'default',
      slug: 'default',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    
    {
      name: 'Apple',
      slug: 'apple',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Unilever',
      slug: 'unilever',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Ford',
      slug: 'ford',
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    
    {
      name: 'Nike',
      slug: 'nike',
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
