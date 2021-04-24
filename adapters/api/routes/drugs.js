const controller = require('../../controllers/drugs');
// const validators = require("../validators/drugs");

module.exports = (app) => {
  app.post('/drugs', async (request, reply) => {
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/drugs', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/drugs/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/drugs/:id', async (request, reply) => {
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/drugs/:id', async (request, reply) => {
    await controller.delete(request.params.id, request, reply);
    return reply.json('Registro apagado');
  });
};
