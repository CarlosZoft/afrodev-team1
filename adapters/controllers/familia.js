const servicosFamilia = require('../../application/services/familia');

exports.post = async (request) => {
  const result = await servicosFamilia.create(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await servicosFamilia.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await servicosFamilia.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await servicosFamilia.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await servicosFamilia.patch(id, request.body);
  return result;
};