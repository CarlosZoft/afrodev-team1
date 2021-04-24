const controller = require('../../controllers/items');

module.exports = (app) => {
  app.post('/items', async (request, reply) => {
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/items', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/items/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/items/:id', async (request, reply) => {
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/items/:id', async (request, reply) => {
    await controller.delete(request.params.id, request, reply);
    return reply.json('Registro apagado');
  });
};
