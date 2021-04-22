const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Drugs = require('../application/model/drugs')

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Drugs.init(connection);

module.exports = connection;
