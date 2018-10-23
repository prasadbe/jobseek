'use strict';

const config = require('../config/config')
const models = require('../models')

module.exports = {
  up: function (queryInterface, Sequelize) {
      //Sequelize.query("truncate table Offers");
    return queryInterface.bulkInsert('Offers', [{
      name: '“3 for 2” deal on Classic Ads',
      slug: '3-2-classic-ads-apple',
      discount_price: 0.00,
      type: 'buy_y_get_x',
      buy_qty: 2,
      get_qty: 1,
      min_qty : 0,
      productId: 1,
      customerId: 3,
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    
    {
      name: 'Standout Ads where the price drops to $299.99 per ad',
      slug: 'standout-ads-unilever',
      discount_price: 23.00,
      type: 'direct_debit',
      buy_qty: 0,
      get_qty: 0,
      min_qty : 1,
      productId: 2,
      customerId: 2,
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
    ,
    
    {
      name: 'Premium Ads where 4 or more',
      slug: 'premium-ads-nike',
      discount_price: 15.00,
      type: 'direct_debit',
      buy_qty: 0,
      get_qty: 0,
      min_qty : 4,
      productId: 3,
      customerId: 5,
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }

    ,
    
    {
      name: '“5 for 4” deal on Classic Ads',
      slug: 'get-1-buy-4-classic-ads-ford',
      discount_price: 0.00,
      type: 'buy_y_get_x',
      buy_qty: 4,
      get_qty: 1,
      min_qty : 0,
      productId: 1,
      customerId: 4,
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
    ,
    
    {
      name: 'Standout Ads where the price drops to $309.99 per',
      slug: 'standout-drop-309.99-ford',
      discount_price: 13.00,
      type: 'direct_debit',
      buy_qty: 0,
      get_qty: 0,
      min_qty : 1,
      productId: 2,
      customerId: 4,
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
    ,
    
    {
      name: 'Premium Ads when 3 or more 389.99',
      slug: 'premium-4-389.99-ford',
      discount_price: 10.00,
      type: 'direct_debit',
      buy_qty: 0,
      get_qty: 0,
      min_qty : 4,
      productId: 3,
      customerId: 4,
      createdAt : new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
    
    
    ]).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  },
  down: function (queryInterface, Sequelize) {

  }
};
