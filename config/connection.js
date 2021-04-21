const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Familia = require('../application/model/Familia');

const connection = new Sequelize(dbConfiguration);
Familia.init(connection);

module.exports = connection;
