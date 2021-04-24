const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Familia = require('../application/model/familia/Familia');

const connection = new Sequelize(dbConfiguration);
Familia.init(connection);

module.exports = connection;
