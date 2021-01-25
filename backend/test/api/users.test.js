process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../../server');
const conn = require('../../database/index');

describe('Users testing', () => {
  before((done) => {
    conn
      .connectMock()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn.clear().catch((err) => done(err));
    conn
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });

  it('Post one user', (done) => {
    request(app)
      .post('/api/users/')
      .send({
        name: 'Dummy',
        email: 'Dummy@test.com',
        password: 'Dummypass',
        birthdate: '2000-01-01',
        phoneNumber: '1010101010',
        gender: Boolean(true),
        code: '0110101101',
      })
      .then((res) => {
        const { status } = res;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Get users', (done) => {
    request(app)
      .get('/api/users')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.be.equal(1);
        done();
      })
      .catch((err) => done(err));
  });
});
