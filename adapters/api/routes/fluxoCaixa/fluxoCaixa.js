const controller = require('../../../controllers/fluxoCaixa/fluxoCaixa');
const validators = require('../../validators/fluxoCaixa/fluxoCaixa');
const verify = require('../../validators/fluxoCaixa/CamposVerifica');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/fluxoCaixa', validators.Validator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(verify.createFields(response));
  });

  app.get('/fluxoCaixa', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(verify.allFields(response));
  });

  app.get('/fluxoCaixa/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    if (!response) {
      return reply.status(404).send({ mensagemError: 'Registro não encontrado' });
    }
    return reply.json(verify.createFields(response));
  });

  app.put('/fluxoCaixa/:id', validators.Validator(), async (request, reply) => {
    const getFluxo = await controller.getById(request.params.id, request, reply);
    if (!getFluxo) {
      return reply.status(404).send({ mensagemError: 'Registro não encontrado' });
    }
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(verify.createFields(response));
  });
};
