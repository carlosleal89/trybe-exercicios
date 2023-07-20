const chai = require('chai');
const sinon = require('sinon');

const fs = require('fs');
const app = require('../../src/app');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const mockFile = JSON.stringify({ // importante converter para string, visto que o arquivo original é transfomado para string ;
    brands: [
      {
        id: 1,
        name: 'Lindt & Sprungli',
      },
      {
        id: 2,
        name: 'Ferrero',
      },
      {
        id: 3,
        name: 'Ghirardelli',
      },
    ],
    chocolates: [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ],
  });
describe('testando a API cacau trybe', function() {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore(); // após cada teste, restaura a função original da função;
  });

  describe('Usando o metodo GET em /chocolates', function() {
      
      it('Retorna a lista de chocolates', async function() {
          const output = [
              { id: 1, name: 'Mint Intense', brandId: 1 },
              { id: 2, name: 'White Coconut', brandId: 1 },
              { id: 3, name: 'Mon Chéri', brandId: 2 },
              { id: 4, name: 'Mounds', brandId: 3 },
            ];
          const response = await chai
              .request(app)
              .get('/chocolates'); // aqui se usa o metodo desejado(post, etc)
          expect(response.status).to.be.equals(200);
          expect(response.body.chocolates).to.deep.equal(output);
      });
  });
});