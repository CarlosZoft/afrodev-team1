const itemsService = require("../../application/services/items");

exports.post = async (request) => {
  const result = await itemsService.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await itemsService.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await itemsService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await itemsService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await itemsService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await itemsService.delete(id);
  return result;
};
