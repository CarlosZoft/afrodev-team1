const servicosFamilia = require('../../application/services/familia');

exports.post = async (request) => {
    return await servicosFamilia.create(request.body);
};

exports.get = async (request) => {
    return await servicosFamilia.findAll(request.body);
};

exports.getById = async (id) => {
    return await servicosFamilia.findById(id); 
};

exports.put = async (id, request) => {
    return await servicosFamilia.update(id, request.body);
};

exports.patch = async (id, request) => {
    return await servicosFamilia.patch(id, request.body);
};