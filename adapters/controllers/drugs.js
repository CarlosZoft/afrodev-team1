const drugsService = require('../../application/services/drugs');

exports.post = async (request) => {
  const result = await drugsService.register(request.body);
  return result;
};

exports.get = async () => {
  const result = await drugsService.findAll();
  return result;
};

exports.getById = async (id) => {
  const result = await drugsService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await drugsService.update(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await drugsService.delete(id);
  return result;
};
