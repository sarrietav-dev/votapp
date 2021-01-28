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
        gender: 'male',
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
        gender: 'male',
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
      .get(`/api/users/${regularUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(200);
        expect(body._id).to.be.equal(regularUserId);
        expect(body.is_admin).to.be.equal(false);
        done();
      })
      .catch((err) => done(err));
  });

  it('Get admin user', (done) => {
    request(app)
      .get(`/api/users/${adminUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(200);
        expect(body._id).to.be.equal(adminUserId);
        expect(body.is_admin).to.be.equal(true);
        done();
      })
      .catch((err) => done(err));
  });

  it('Error or verify admin', (done) => {
    request(app)
      .patch(`/api/users/verify/${adminUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(400);
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal('The user is an admin');
        done();
      })
      .catch((err) => done(err));
  });

  it('Verify regular user', (done) => {
    request(app)
      .patch(`/api/users/verify/${regularUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(200);
        expect(body.message).to.be.equal('Operation completed');
        done();
      })
      .catch((err) => done(err));
  });

  it('Verify again regular user', (done) => {
    request(app)
      .patch(`/api/users/verify/${regularUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(400);
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal('The user is already verified');
        done();
      })
      .catch((err) => done(err));
  });

  it('Deny verified user', (done) => {
    request(app)
      .delete(`/api/users/deny/${regularUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(400);
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal('The user is already verified');
        done();
      })
      .catch((err) => done(err));
  });

  it('Deny admin user', (done) => {
    request(app)
      .delete(`/api/users/deny/${adminUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(400);
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal('The user is an admin');
        done();
      })
      .catch((err) => done(err));
  });

  let unverifiedUserId;
  it('Post one regular user', (done) => {
    request(app)
      .post('/api/users/')
      .send({
        name: 'Unverified Dummy',
        email: 'unverifiedDummy@test.com',
        password: 'Dummypass',
        birthdate: '2000-01-01',
        phoneNumber: '1010101010',
        gender: 'male',
        code: '0110101111',
      })
      .then((res) => {
        const { status, body } = res;
        unverifiedUserId = body.id;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Get unverified users', (done) => {
    request(app)
      .get('/api/users/unverified')
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(200);
        expect(body.length).to.be.equal(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('Deny unverified user', (done) => {
    request(app)
      .delete(`/api/users/deny/${unverifiedUserId}`)
      .then((res) => {
        const { body, status } = res;
        expect(status).to.be.equal(200);
        expect(body.message).to.be.equal('Operation completed');
        done();
      })
      .catch((err) => done(err));
  });
});
