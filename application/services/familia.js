const Familia = require('../model/Familia');

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
    return await Familia.update(newFamilia, {
      where: {
        id,
      },
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
    const familia = await Familia.findOne({ id });
    familia.set(newFamilia);
    familia.save();
    return familia;
  } catch (err) {
    console.log(err);
    const error = new Error('Ocorreu um erro ao atualizar familia');
    error.statusCode = 500;
    throw error;
  }
};
