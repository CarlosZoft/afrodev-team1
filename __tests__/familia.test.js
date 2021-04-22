const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const sequelize = require('../config/connection');

describe('Getting data from API - Family', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  /*it('Calling GET endpoint without parameters', async () => {
  
    const res = await request.get('/familia');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([]);

  });*/

  // Primeiro Teste

  it('Calling POST endpoint without parameters', async () => {
    const res = await request.post('/familia')
      .send({
        "nome_familia": "Familia do Carlos",
        "endereco": "family address - 8381 rua 9384 condominio 3748",
        "quantidade_membros": 4,
        "preferencial": false,
        "renda": 2100,
        "status": "Inativo"
      })
      expect(res.status).toBe(200);
      expect(res.body).toStrictEqual({
        "nome_familia": "Familia do Carlos",
        "endereco": "family address - 8381 rua 9384 condominio 3748",
        "quantidade_membros": 4,
        "preferencial": false,
        "renda": 2100,
        "status": "Inativo"
      });
      
  });
  it('Calling GET endpoint with parameter ID', async () => {
    const res = await request.get('/familia/1');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
      "nome_familia": "Familia do Carlos",
      "endereco": "family address - 8381 rua 9384 condominio 3748",
      "quantidade_membros": 4,
      "preferencial": false,
      "renda": 2100,
      "status": "Inativo"
    });
  });
  //Segundo teste

  it('Calling POST endpoint without parameters', async () => {
    const res = await request.post('/familia')
      .send({
        "nome_familia": "Familia da eduarda xD",
        "endereco": "family address - 38938 - 297838 - 23987",
        "quantidade_membros": 5,
        "preferencial": true,
        "renda": 2100,
        "status": "Ativo"
      })
      expect(res.status).toBe(200);
      expect(res.body).toStrictEqual({
        "nome_familia": "Familia da eduarda xD",
        "endereco": "family address - 38938 - 297838 - 23987",
        "quantidade_membros": 5,
        "preferencial": true,
        "renda": 2100,
        "status": "Ativo"
      });
      
  });
  it('Calling PUT endpoint with parameter ID', async () => {
    const res = await request.put('/familia/2')
                .send({
                  "nome_familia": "Familia test",
                  "endereco": "family address - 1234578",
                  "quantidade_membros": 9,
                  "preferencial": false,
                  "renda": 2300,
                  "status": "Inativo"
                })
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
      "nome_familia": "Familia da eduarda xD",
      "endereco": "family address - 1234578",
      "quantidade_membros": 9,
      "preferencial": false,
      "renda": 2300,
      "status": "Ativo"
    });
  });
  it('Calling GET endpoint with parameter ID', async () => {
    const res = await request.get('/familia/2');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
      "nome_familia": "Familia da eduarda xD",
      "endereco": "family address - 1234578",
      "quantidade_membros": 9,
      "preferencial": false,
      "renda": 2300,
      "status": "Ativo"
    });
  });
  //Terceiro Teste

  it('Calling POST endpoint without parameters', async () => {
    const res = await request.post('/familia')
      .send({
        "nome_familia": "Familia da eduarda 12345 xD",
        "endereco": "family address - 38938 - 297838",
        "quantidade_membros": 10,
        "preferencial": false,
        "renda": 10000,
        "status": "Inativo"
      })
      expect(res.status).toBe(200);
      expect(res.body).toStrictEqual({
        "nome_familia": "Familia da eduarda 12345 xD",
        "endereco": "family address - 38938 - 297838",
        "quantidade_membros": 10,
        "preferencial": false,
        "renda": 10000,
        "status": "Inativo"
      });
      
  });
  it('Calling PATCH endpoint with parameter ID', async () => {
    const res = await request.patch('/familia/3')
                .send({
                  "nome_familia": "Familia test",
                  "endereco": "family address - 1234578",
                  "quantidade_membros": 9,
                  "preferencial": false,
                  "renda": 2300,
                  "status": "Ativo"
                })
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
        "status": "Ativo"
    });
  });
  it('Calling GET endpoint with parameter ID', async () => {
    const res = await request.get('/familia/3');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
        "nome_familia": "Familia da eduarda 12345 xD",
        "endereco": "family address - 38938 - 297838",
        "quantidade_membros": 10,
        "preferencial": false,
        "renda": 10000,
        "status": "Ativo"
    });
  });
  /*
  it('Calling PATCH endpoint with parameter ID', async () => {
    const res = await request.patch('/familia/2')
                .send({
                  "nome_familia": "Familia test",
                  "endereco": "family address - 1234578",
                  "quantidade_membros": 9,
                  "preferencial": false,
                  "renda": 2300,
                  "status": "Inativo"
                })
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
        "nome_familia": "Familia do Carlos",
        "endereco": "family address - 908381 rua 09384",
        "quantidade_membros": 6,
        "preferencial": true,
        "renda": 1500,
        "status": "Inativo"
    });
  });

  it('Calling PUT endpoint with parameter ID', async () => {
    const res = await request.put('/familia/3')
                .send({
                  "nome_familia": "Familia test",
                  "endereco": "family address - 1234578",
                  "quantidade_membros": 9,
                  "preferencial": false,
                  "renda": 2300,
                  "status": "Inativo"
                })
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
      "nome_familia": "Familia do Carlos",
      "endereco": "family address - 1234578",
      "quantidade_membros": 9,
      "preferencial": false,
      "renda": 2300,
      "status": "Ativo"
    });
  });
*/
 

  afterAll(async (done) => {
    await sequelize.dropSchema('sequelizemeta');
    await sequelize.drop('familia');
    await sequelize.close();
    done();
  });
});
