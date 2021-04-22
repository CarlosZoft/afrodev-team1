const Familia = require('../model/Familia');
const restricaoCampos = require('../../adapters/api/validators/CamposVerifica');
const restricao = new restricaoCampos();

exports.create = async (familia) => {
  try {
    return await Familia.create(familia);
  } 
  catch (err) {
    console.log(err);
    const error = new Error('Ocorreu um erro ao criar familia');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (familia) => {
  try {
    return await Familia.findAll({
      where: familia,
    });
  } catch (err) {
    console.log(err);
    const error = new Error('Ocorreu um erro ao buscar familias');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    return await Familia.findByPk(id);
   
  } catch (err) {
    console.log(err);
    const error = new Error('Ocorreu um erro ao buscar familia');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newFamilia) => {
  try {
    return await Familia.update(restricao.patchFields(newFamilia), {
      where: {
        id:id
      }
    });
  } catch (err) {
    console.log(err);
    const error = new Error('Ocorreu um erro na atualização do status!');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newFamilia) => {
  try {
    const familia = await Familia.findOne({
      where :{ 
        id: id 
      }
    });
    familia.set(restricao.updateFields(newFamilia));
    familia.save();
    return familia;
  } catch (err) {
    console.log(err);
    const error = new Error('Ocorreu um erro ao atualizar familia');
    error.statusCode = 500;
    throw error;
  }
};
