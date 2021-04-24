const controller = require('../../controllers/familia');
const validators = require('../validators/familia');
const verify = require('../validators/CamposVerifica');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/familia', validators.registerValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(verify.createFields(response));
  });

  app.get('/familia', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(verify.allFields(response));
  });

  app.get('/familia/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    if (!response) {
      return reply.status(404).send({ mensagemError: 'Usuario nao encontrado' });
    }
    return reply.json(verify.createFields(response));
  });

  app.put('/familia/:id', validators.updateValidator(), async (request, reply) => {
    const getFamilia = await controller.getById(request.params.id, request, reply);
    if (!getFamilia) {
      return reply.status(404).send({ mensagemError: 'Usuario nao encontrado' });
    }
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(verify.createFields(response));
  });

  app.patch('/familia/:id', validators.patchValidator(), async (request, reply) => {
    const getFamilia = await controller.getById(request.params.id, request, reply);
    if (!getFamilia) {
      return reply.status(404).send({ mensagemError: 'Usuario nao encontrado' });
    }
    const errors = validators.validateRequest(request);
    if (errors.length) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(verify.patchFields(response));
  });
};
