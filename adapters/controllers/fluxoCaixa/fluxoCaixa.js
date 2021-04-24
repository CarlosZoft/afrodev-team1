const servicosFluxoCaixa = require('../../../application/services/fluxoCaixa/fluxoCaixa');

exports.post = async (request) => servicosFluxoCaixa.create(request.body);

exports.get = async (request) => servicosFluxoCaixa.findAll(request.body);

exports.getById = async (id) => servicosFluxoCaixa.findById(id);

exports.put = async (id, request) => servicosFluxoCaixa.update(id, request.body);
