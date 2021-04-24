const servicosFamilia = require('../../../application/services/familia/familia');

exports.post = async (request) => servicosFamilia.create(request.body);

exports.get = async (request) => servicosFamilia.findAll(request.body);

exports.getById = async (id) => servicosFamilia.findById(id);

exports.put = async (id, request) => servicosFamilia.update(id, request.body);

exports.patch = async (id, request) => servicosFamilia.patch(id, request.body);
