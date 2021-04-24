const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);
const modelFluxo = require('../application/model/fluxoCaixa/FluxoCaixa');
const connectionDB = require('../config/connection');

describe('Getting data from API - Family', () => {
  beforeAll(async () => {
    await connectionDB.authenticate();
  });

  it('Calling POST endpoint without parameters', async () => {
    request.post('/fluxoCaixa')
      .send({
        descricao: 'descricao test',
        custo: 1234,
        tipo: 'Irregular',
      }).expect(200).end((err, res) => {
        expect(res.body).toStrictEqual({
          descricao: 'descricao test',
          custo: 1234,
          tipo: 'Irregular',
        });
      });
  });
  it('Calling GET endpoint with parameter ID', async () => {
    request.get('/fluxoCaixa/1').expect(200).end((err, res) => {
      expect(res.body).toStrictEqual({
        descricao: 'descricao test',
        custo: 1234,
        tipo: 'Irregular',
      });
    });
  });

  it('Calling POST endpoint without parameter', async () => {
    request.post('/fluxoCaixa')
      .send({
        descricao: 'descricao do segundo teste 2',
        custo: 1500,
        tipo: 'Irregular',
      }).expect(200).end((err, res) => {
        expect(res.body).toStrictEqual({
          descricao: 'descricao do segundo teste 2',
          custo: 1500,
          tipo: 'Irregular',
        });
      });
  });
  it('Calling PUT endpoint with parameter ID', async () => {
    request.put('/fluxoCaixa/2')
      .send({
        descricao: 'descricao do segundo teste 2 modificado',
        custo: 3000,
        tipo: 'Regular',
      }).expect(200).end((err, res) => {
        expect(res.body).toStrictEqual({
          descricao: 'descricao do segundo teste 2 modificado',
          custo: 3000,
          tipo: 'Regular',
        });
      });
  });
  it('Calling GET endpoint with parameter ID ', async () => {
    request.get('/fluxoCaixa/2').expect(200).end((err, res) => {
      expect(res.body).toStrictEqual({
        descricao: 'descricao do segundo teste 2 modificado',
        custo: 3000,
        tipo: 'Regular',
      });
    });
  });
  afterAll(async (done) => {
    await modelFluxo.destroy({
      truncate: true,
      force: true,
    });
    done();
  });
});
