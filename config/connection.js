const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Familia = require('../application/model/familia/Familia');
const FluxoCaixa = require('../application/model/fluxoCaixa/FluxoCaixa');

const connection = new Sequelize(dbConfiguration);
Familia.init(connection);
FluxoCaixa.init(connection);

module.exports = connection;
