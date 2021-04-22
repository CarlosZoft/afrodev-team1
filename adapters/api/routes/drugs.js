const controller = require("../../controllers/drugs");
//const validators = require("../validators/drugs");

module.exports = (app) => {
  app.post("/drugs", async (request, reply) => {
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get("/drugs", async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get("/drugs/:id", async (request, reply) => {
    return reply.json("Rota get by id OK");
  });

  app.put("/drugs/:id", async (request, reply) => {
    return reply.json("Rota put OK");
  });

  app.delete("/drugs/:id", async (request, reply) => {
    return reply.json("Rota delete OK");
  });
};
