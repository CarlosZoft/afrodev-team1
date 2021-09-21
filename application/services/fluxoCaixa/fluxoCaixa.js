const FluxoCaixa = require('../../model/fluxoCaixa/FluxoCaixa');
const restricao = require('../../../adapters/api/validators/fluxoCaixa/CamposVerifica');

exports.create = async (fluxoCaixa) => {
  try {
    return await FluxoCaixa.create(fluxoCaixa);
  } catch (err) {
    const error = new Error('Ocorreu um erro ao registrar custo');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (fluxoCaixa) => {
  try {
    return await FluxoCaixa.findAll({
      where: fluxoCaixa,
    });
  } catch (err) {
    const error = new Error('Ocorreu um erro ao buscar registros de caixa');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    return await FluxoCaixa.findByPk(id);
  } catch (err) {
    const error = new Error('Ocorreu um erro ao buscar registro');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newFluxoCaixa) => {
  try {
    const caixa = await FluxoCaixa.findOne({
      where: {
        id,
      },
    });
    caixa.set(restricao.updateFields(newFluxoCaixa));
    caixa.save();
    return caixa;
  } catch (err) {
    const error = new Error('Ocorreu um erro na atualização do registro!');
    error.statusCode = 500;
    throw error;
  }
};
