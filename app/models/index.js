'use strict'

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var basename = path.basename(module.filename)
var config = require('../config/config.js')
const logger = require('../lib/logger')

var db = {}

var sequelize = new Sequelize(config.database, config.username, config.password, config)

//Log connection status
sequelize.authenticate()
  .then(function (errors) {
    if (errors) {
      logger.error(errors)
    } else {
      logger.info("Successfully connected to db")
    }
  })

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
