/* eslint-disable no-underscore-dangle */
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

  let regularUserId;
  it('Post one regular user', (done) => {
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
        const { status, body } = res;
        regularUserId = body.id;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Get 1 user', (done) => {
    request(app)
      .get('/api/users')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.be.equal(1);
        done();
      })
      .catch((err) => done(err));
  });

  let adminUserId;
  it('Post one admin user', (done) => {
    request(app)
      .post('/api/users/')
      .send({
        name: 'Admin Dummy',
        email: 'adminDummy@test.com',
        password: 'Dummypass',
        birthdate: '2000-01-01',
        phoneNumber: '1010101010',
        gender: Boolean(true),
        code: '0110101100',
        is_admin: true,
      })
      .then((res) => {
        const { status, body } = res;
        adminUserId = body.id;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Get 2 users', (done) => {
    request(app)
      .get('/api/users')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.be.equal(2);
        done();
      })
      .catch((err) => done(err));
  });

  it('Get regular user', (done) => {
    request(app)
      .get(`api/users/${regularUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(200);
        expect(body._id).to.be.equal(regularUserId);
        expect(body.is_admin).to.be.false();
        done();
      })
      .catch((err) => done(err));
  });
});
