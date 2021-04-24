const controller = require('../../controllers/familia');
const validators = require('../validators/familia');
const CamposVerifica = require('../validators/CamposVerifica');

const verify = new CamposVerifica();

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/familia', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post family object'] = {
            in: 'body',
            description: "New family values",
            schema: {
                "$nameFamilia": "New family name",
                "$endereco": "family address",
                "$quantidadeMembros": 5,
                "$preferencial": true,
                "$renda": 1000,
                "$status": active
            }
    } */
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
    return reply.json(verify.createFields(response));
  });

  app.put('/familia/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['put family object'] = {
            in: 'body',
            description: "New family values",
            schema: {
                "$endereco": "family address",
                "$quantidadeMembros": 5,
                "$preferencial": true,
                "$renda": 1000,
            }
      } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(verify.createFields(response));
  });

  app.patch('/familia/:id', validators.patchValidator(), async (request, reply) => {
    /*  #swagger.parameters['post family object'] = {
            in: 'body',
            description: "New family values",
            schema: {
                "$status": "active"
            }
      } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(verify.patchFields(response));
  });
};
