/* eslint-disable no-console */
const Drugs = require('../model/drugs');

exports.register = async (drug) => {
  try {
    const newDrug = await Drugs.create(drug);
    return newDrug;
  } catch (err) {
    console.error(err);
    const error = new Error('An error ocurred while creating drug');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (drug) => {
  try {
    const drugs = await Drugs.findAll({
      where: drug,
    });
    return drugs;
  } catch (err) {
    console.error(err);
    const error = new Error('An error ocurred while finding drugs');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const drugs = await Drugs.findAll({
      where: {
        id,
      },
    });
    return drugs;
  } catch (err) {
    console.error(err);
    const error = new Error('An error ocurred while finding drug by id');
    error.statusCode = 500;
    throw error;
  }
};


exports.update = async (id, newDrug) => {
  try {
    const drug = await Drugs.findOne({where:{ id }});
    drug.set(newDrug);
    drug.save();
    return drug;
  } catch (err) {
    console.error(err);
    const error = new Error('An error ocurred while updating drug');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const drug = await Drugs.destroy({
      where: {
        id,
      },
    });
    return drug;
  } catch (err) {
    console.error(err);
    const error = new Error('An error ocurred while deleting drug');
    error.statusCode = 500;
    throw error;
  }
};
