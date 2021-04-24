const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Item = require('../application/model/items');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Item.init(connection);

module.exports = connection;
